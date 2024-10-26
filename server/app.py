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
app = Flask(__name__, static_folder='../client/build/', static_url_path='')
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

@app.route('/<path:path>', methods=['GET'])
def send_js(path):
    try:
        return send_from_directory(app.static_folder, path)
    except Exception as e:
        app.logger.error(f"Error serving static file '{path}': {e}")
        return "File not found", 404

@app.route('/', methods=['GET'])
def index():
    try:
        return send_from_directory(app.static_folder, 'index.html')
    except Exception as e:
        app.logger.error(f"Error serving index.html: {e}")
        return "File not found", 404


if __name__ == '__main__':
    app.run(debug=True)
