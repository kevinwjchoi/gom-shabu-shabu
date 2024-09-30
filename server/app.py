from flask import Flask, send_from_directory
from flask_restful import Api
from flask_cors import CORS
from dotenv import load_dotenv
from server.models import db
from server.resources import PlaceSearch, GomShabuSearch, GomShabuDetails, ReservationResource, ReservationByIdResource
import os

# Load environment variables
load_dotenv()

# Initialize Flask app
app = Flask(__name__, static_folder='../client/build')
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
    return send_from_directory(app.static_folder, 'index.html')

@app.errorhandler(404)
def not_found(e):
    return send_from_directory(app.static_folder, 'index.html')

if __name__ == '__main__':
    app.run(debug=True)



