from sqlite3 import IntegrityError
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.ext.hybrid import hybrid_property
from sqlalchemy.orm import validates
from datetime import time


# Initialize SQLAlchemy
db = SQLAlchemy()

class Reservation(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    number_of_people = db.Column(db.Integer, nullable=False)
    date = db.Column(db.Date, nullable=False)
    time = db.Column(db.Time, nullable=False)
    phone_number = db.Column(db.String(10), nullable=False)

    def __repr__(self):
        return f'<Reservation {self.id}>'

    @validates('number_of_people')
    def validate_number_of_people(self, key, number_of_people):
        if number_of_people < 6:
            raise ValueError('Number of people must be 6 or more')
        return number_of_people

    @validates('time')
    def validate_time(self, key, time):
        day_of_week = self.date.strftime('%A')
        hours_of_operation = {
            'Thursday': {'start': '11:30', 'end': '22:00'},
            'Friday': {'start': '11:30', 'end': '23:00'},
            'Saturday': {'start': '11:30', 'end': '23:00'},
            'Sunday': {'start': '11:30', 'end': '22:00'},
            'Monday': {'start': '11:30', 'end': '22:00'},
            'Tuesday': {'start': '11:30', 'end': '22:00'},
            'Wednesday': {'start': '11:30', 'end': '22:00'},
        }
        start_time = time.fromisoformat(hours_of_operation[day_of_week]['start'])
        end_time = time.fromisoformat(hours_of_operation[day_of_week]['end'])
        if not (start_time <= time <= end_time):
            raise ValueError('Time must be within hours of operation')
        return time

    @staticmethod
    def create_reservation(name, number_of_people, date, time, phone_number):
        try:
            reservation = Reservation(
                name=name,
                number_of_people=number_of_people,
                date=date,
                time=time,
                phone_number=phone_number
            )
            db.session.add(reservation)
            db.session.commit()
            return reservation
        except ValueError as e:
            db.session.rollback()
            raise e
        except IntegrityError:
            db.session.rollback()
            raise ValueError('Database integrity error')
