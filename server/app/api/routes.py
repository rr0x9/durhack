from flask import jsonify
from flask import Blueprint

api = Blueprint('api', __name__, url_prefix="/api")

@api.route('/test')
def test():
    return {'message': 'qwerty'}


@api.route('/submit-action', methods=['POST'])
def submit_action():
    return jsonify({'response': 123, 'test': 321})