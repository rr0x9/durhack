from flask import Blueprint

bp = Blueprint('main', __name__)

@bp.route('/test')
def test():
    return {'message': 'qwerty'}