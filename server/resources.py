from flask_restful import Resource
from flask import request, jsonify
import requests
from datetime import datetime
from models import db, Reservation
import os

# Google Maps API Resource
class PlaceSearch(Resource):
    def get(self):
        query = request.args.get('query')
        if not query:
            return {'error': 'Query parameter is required'}, 400
        
        url = "https://maps.googleapis.com/maps/api/place/textsearch/json"
        params = {
            'query': query,
            'key': os.getenv('REACT_APP_GOOGLE_MAPS_API_KEY')
        }
        
        response = requests.get(url, params=params)
        data = response.json()
        
        if response.status_code != 200:
            return {'error': 'Failed to retrieve data from Google Maps API'}, response.status_code

        return jsonify(data)

# Reservation Resource
class ReservationResource(Resource):
    def post(self):
        data = request.json
        try:
            name = data['name']
            number_of_people = int(data['numberOfPeople'])
            date = datetime.strptime(data['date'], '%Y-%m-%d').date()
            time = datetime.strptime(data['time'], '%H:%M').time()
            phone_number = data['phoneNumber']
            
            reservation = Reservation.create_reservation(
                name=name,
                number_of_people=number_of_people,
                date=date,
                time=time,
                phone_number=phone_number
            )
            
            return {'message': 'Reservation made successfully', 'reservation': reservation.id}, 201
        
        except ValueError as e:
            return {'error': str(e)}, 400
        except Exception as e:
            print(e)
            return {'error': 'Invalid input or server error'}, 400

class ReservationByIdResource(Resource):
    def get(self, reservation_id):
        reservation = Reservation.query.get(reservation_id)
        if reservation:
            return {
                'id': reservation.id,
                'name': reservation.name,
                'number_of_people': reservation.number_of_people,
                'date': reservation.date.isoformat(),
                'time': reservation.time.strftime('%H:%M'),
                'phone_number': reservation.phone_number
            }, 200
        return {'error': 'Reservation not found'}, 404

    def delete(self, reservation_id):
        reservation = Reservation.query.get(reservation_id)
        if reservation:
            db.session.delete(reservation)
            db.session.commit()
            return {'message': 'Reservation deleted successfully'}, 200
        return {'error': 'Reservation not found'}, 404

    def patch(self, reservation_id):
        data = request.json
        reservation = Reservation.query.get(reservation_id)
        if reservation:
            try:
                if 'name' in data:
                    reservation.name = data['name']
                if 'numberOfPeople' in data:
                    reservation.number_of_people = int(data['numberOfPeople'])
                if 'date' in data:
                    reservation.date = datetime.strptime(data['date'], '%Y-%m-%d').date()
                if 'time' in data:
                    reservation.time = datetime.strptime(data['time'], '%H:%M').time()
                if 'phoneNumber' in data:
                    reservation.phone_number = data['phoneNumber']
                
                db.session.commit()
                return {'message': 'Reservation updated successfully'}, 200
            except ValueError as e:
                return {'error': str(e)}, 400
            except Exception as e:
                print(e)
                return {'error': 'Invalid input or server error'}, 400
        return {'error': 'Reservation not found'}, 404
