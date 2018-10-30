from flask_restful import Resource


class DataApi(Resource):
    __name__ = 'DataApi xD'

    def __init__(self, strategy):
        self._strategy = strategy

    def get(self):
        return self._strategy.get()

    def put(self):
        return self._strategy.put()
