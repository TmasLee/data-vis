from flask import Flask, jsonify, make_response
from ..strategies.AbsStrategy import AbsStrategy  # pylint: disable=E0402


class ScatterStrategy(AbsStrategy):
    def __init__(self, data):
        self.dataset = data

    def get(self):
        return self.getData()

    def put(self):
        return self.randomizeData()

    def getData(self):
        response = jsonify(self.dataset)
        return make_response(response, 200)

    def randomizeData(self):
        return None
