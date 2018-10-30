from flask import Flask, jsonify, make_response
from flask_restful import Resource
import random
from ..strategies.AbsStrategy import AbsStrategy  # pylint: disable=E0402


class BarStrategy(AbsStrategy):
    @property
    def dataset(self):
        self._dataset = [
            {
                'name': 'The Ancient One',
                'power': 85,
                'color': 'hsl(200,90%,61%)'
            },
            {
                'name': 'Dr. Strange',
                'power': 60,
                'color': 'hsl(144,90%,61%)'
            },
            {
                'name': 'Me',
                'power': 70,
                'color': 'hsl(155,90%,61%)'
            },
            {
                'name': 'Dormammu',
                'power': 100,
                'color': 'hsl(222,90%,61%)'
            },
            {
                'name': 'Mordo',
                'power': 10,
                'color': 'hsl(334,90%,61%)'
            }
        ]

    def get(self):
        return self.getData()

    def put(self):
        return self.randomizeData()

    def getData(self):
        response = jsonify(self._dataset)
        return make_response(response, 200)

    def randomizeData(self):
        for person in self._dataset:
            if person['name'] == 'The Ancient One':
                self.calculateSimilarityAndColor(80, 90, person)
            if person['name'] == 'Mordo':
                self.calculateSimilarityAndColor(0, 30, person)
            if person['name'] == 'Dormammu':
                self.calculateSimilarityAndColor(90, 100, person)
            else:
                self.calculateSimilarityAndColor(10, 75, person)
        return self._dataset

    def calculateSimilarityAndColor(self, min, max, person):
        degree = (person['power'] * 222) / 100
        person['color'] = f'hsl({degree}, 90%, 61%)'
        person['power'] = random.randint(min, max)
