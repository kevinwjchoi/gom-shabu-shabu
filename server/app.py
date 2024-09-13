from flask import Flask, jsonify, request, render_template
from flask_restful import Api, Resource
import requests
import os
from dotenv import load_dotenv
from flask_cors import CORS

# Load environment variables from a .env file
load_dotenv()

# Initialize Flask app and Flask-RESTful API
app = Flask(__name__)
api = Api(app)

# Enable CORS
CORS(app)

# Your Google Maps API key (make sure this matches your .env file)
GOOGLE_MAPS_API_KEY = os.getenv('GOOGLE_MAPS_API_KEY')

class PlaceSearch(Resource):
    def get(self):
        # Extract query parameter from the request
        query = request.args.get('query')
        if not query:
            return {'error': 'Query parameter is required'}, 400

        # Construct the Google Maps Place Search URL
        url = "https://maps.googleapis.com/maps/api/place/textsearch/json"
        params = {
            'query': query,
            'key': GOOGLE_MAPS_API_KEY
        }

        # Make the request to the Google Maps API
        response = requests.get(url, params=params)
        data = response.json()

        # Check for API errors
        if response.status_code != 200:
            return {'error': 'Failed to retrieve data from Google Maps API'}, response.status_code

        return jsonify(data)

# Add the resource to the API
api.add_resource(PlaceSearch, '/api/place-search')

# Basic route for rendering the index.html
@app.route('/')
def index():
    return render_template("index.html")

if __name__ == '__main__':
    app.run(debug=True)
