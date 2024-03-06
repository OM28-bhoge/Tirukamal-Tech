from flask import Flask, jsonify, render_template, request_finished, send_from_directory
from flask_cors import CORS
# import os
app = Flask(__name__, static_folder='build', static_url_path='/')
CORS(app)

# Serve the React frontend at the root URL
@app.route('/', methods =['GET'])
def index():
    # Render the index.html template
    return render_template('index.html')

# Define routes to handle API requests
@app.route('/Component/Registration', methods=['GET'])
def registration():
    # Your logic to retrieve registration data goes here
    registration_data = {
        "message": "Registration page data from Flask!",
        "registration_fields": ["name", "email", "password"]  # Example registration fields
    }
    return jsonify(registration_data)

# @app.route('/', methods=['GET'])
# def login():
#     # Your logic to retrieve login data goes here
#     login_data = {
#         "message": "Login page data from Flask!"
#     }
#     return jsonify(login_data)

# @app.route('/', methods=['GET'])
# def home():
#     # Your logic to retrieve home page data goes here
#     home_data = {
#         "message": "Home page data from Flask!"
#     }
#     return jsonify(home_data)

# @app.route('/', methods=['GET'])
# def AttendancePage():
#     # Your logic to retrieve home page data goes here
#     AttendancePage_data = {
#         "message": "Attendance page data from Flask!"
#     }
#     return jsonify(AttendancePage_data)

if __name__ == '__main__':
    app.run(debug=True , port=5000)
