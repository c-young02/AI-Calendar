from flask import request, jsonify
from . import db
from .models import User
from . import create_app

"""
    Place holder routes for testing
"""


app = create_app()

@app.route('/users', methods=['GET'])
def get_users():
    print("getting all users")
    users = User.query.all()
    return jsonify([user.name for user in users])

@app.route('/add-user', methods=['POST'])
def add_user():
    print("adding new user")
    data = request.json
    new_user = User(name=data['name'])
    db.session.add(new_user)
    db.session.commit()
    return jsonify({'message': 'User added successfully!'}), 201
