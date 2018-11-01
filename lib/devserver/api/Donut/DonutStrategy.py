from flask import Flask, jsonify, make_response
import random
from ..strategies.AbsStrategy import AbsStrategy  # pylint: disable=E0402


class DonutStrategy(AbsStrategy):

    dataset = [
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
        return self.getData()

    def put(self):
        return self.randomizeData()

    def getData(self):
        response = jsonify(self.dataset)
        return make_response(response, 200)

    def randomizeData(self):
        for slice in self.dataset:
            slice['value'] = random.randint(0, 99)
        random.shuffle(self.dataset)
        return self.dataset
