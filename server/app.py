import os
import logging
from flask import Flask, send_from_directory
from flask_restful import Api
from flask_cors import CORS
from dotenv import load_dotenv
from server.models import db 
from server.resources import ( 
    PlaceSearch, 
    GomShabuSearch, 
    GomShabuDetails, 
    ReservationResource, 
    ReservationByIdResource
)

# Load environment variables
load_dotenv()

# Set up logging
logging.basicConfig(level=logging.DEBUG)
logger = logging.getLogger(__name__)

# Initialize Flask app
app = Flask(__name__, static_folder='client/build/', static_url_path='')
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SECRET_KEY'] = os.getenv('SECRET_KEY', os.urandom(24).hex())

# Log the static folder path
logger.debug(f"Static folder path: {app.static_folder}")

# Initialize extensions
db.init_app(app)
api = Api(app)

# Enable CORS for the API
CORS(app, resources={r"/api/*": {"origins": "*"}})

# Register API resources
api.add_resource(PlaceSearch, '/api/place-search', endpoint='api/place-search')
api.add_resource(GomShabuSearch, '/api/gom-shabu-search', endpoint='api/gom-shabu-search')
api.add_resource(GomShabuDetails, '/api/gom-shabu-details')
api.add_resource(ReservationResource, '/api/reservations')
api.add_resource(ReservationByIdResource, '/api/reservations/<int:id>')

@app.route('/<path:path>')
def send_js(path):
    logger.debug(f"Serving static file: {path}")
    return send_from_directory('client/build', path)

@app.route('/')
def index():
    logger.debug("Serving index.html")
    return send_from_directory('client/build', 'index.html')

if __name__ == '__main__':
    app.run(debug=True)
