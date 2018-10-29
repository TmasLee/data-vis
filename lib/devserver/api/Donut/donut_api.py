from flask import Flask, jsonify, make_response
from flask_restful import Resource
import random


class DonutApi(Resource):
    dataset: [
        {
            'name': '1',
            'value': 20,
            'color': None
        },
        {
            'name': '2',
            'value': 25,
            'color': None
        },
        {
            'name': '3',
            'value': 40,
            'color': None
        },
        {
            'name': '4',
            'value': 50,
            'color': None
        }
    ]

    def get(self):
        response = jsonify(self.dataset)
        return make_response(response, 200)

    def put(self):
        return self.dataset
