from flask_restful import Resource


class DataApi(Resource, object):
    __name__ = 'DataApi xD'

    def __init__(self, **kwargs):
        self._strategy = kwargs['strategy']

    def get(self):
        return self._strategy.get()

    def put(self):
        return self._strategy.put()
