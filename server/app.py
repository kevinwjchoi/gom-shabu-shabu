from flask import Flask, send_from_directory
from flask_restful import Api
from flask_cors import CORS
from dotenv import load_dotenv
from server.models import db
from server.resources import PlaceSearch, GomShabuSearch, GomShabuDetails, ReservationResource, ReservationByIdResource
import os
import logging

# Load environment variables
load_dotenv()

# Initialize Flask app
app = Flask(__name__, static_folder='client/build', static_url_path='')
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SECRET_KEY'] = os.getenv('SECRET_KEY', os.urandom(24).hex())

# Initialize extensions
db.init_app(app)
api = Api(app)
# CORS(app)  # Add this line to enable CORS
CORS(app, resources={r"/api/*": {"origins": "*"}})  # Allow all origins

# Register API resources
api.add_resource(PlaceSearch, '/api/place-search', endpoint='api/place-search')
api.add_resource(GomShabuSearch, '/api/gom-shabu-search', endpoint='api/gom-shabu-search')  # Register GomShabuSearch resource
api.add_resource(GomShabuDetails, '/api/gom-shabu-details')
api.add_resource(ReservationResource, '/api/reservations')
api.add_resource(ReservationByIdResource, '/api/reservations/<int:reservation_id>')



@app.route('/')
def serve():
    try:
        return send_from_directory(app.static_folder, 'index.html')
    except FileNotFoundError:
        logging.error("index.html not found in the static folder")
        return "File not found", 404


@app.route('/<path:path>')
def static_proxy(path):
    return send_from_directory(app.static_folder, path)


if __name__ == '__main__':
    app.run(debug=True)



