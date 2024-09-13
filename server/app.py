from flask import Flask, render_template
from flask_restful import Api
from flask_cors import CORS
from dotenv import load_dotenv
from models import db
from resources import PlaceSearch, ReservationResource, ReservationByIdResource
import os

# Load environment variables
load_dotenv()

# Initialize Flask app
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SECRET_KEY'] = os.getenv('SECRET_KEY', os.urandom(24).hex())

# Initialize extensions
db.init_app(app)
api = Api(app)
CORS(app)

# Register API resources
api.add_resource(PlaceSearch, '/api/place-search')
api.add_resource(ReservationResource, '/api/reservations')
api.add_resource(ReservationByIdResource, '/api/reservations/<int:reservation_id>')

# Basic route for rendering the index.html
@app.route('/')
def index():
    return render_template("index.html")

if __name__ == '__main__':
    app.run(debug=True)
