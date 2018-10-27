from flask import Flask, jsonify, make_response
from flask_restful import Resource
import random


class BargraphApi(Resource):
    dataset = [
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
        print(jsonify(self.dataset))
        response = jsonify(self.dataset)
        return make_response(response, 200)

    def put(self):
        for person in self.dataset:
            if person['name'] == 'The Ancient One':
                self.calculateSimilarityAndColor(80, 90, person)
            if person['name'] == 'Mordo':
                self.calculateSimilarityAndColor(0, 30, person)
            if person['name'] == 'Dormammu':
                self.calculateSimilarityAndColor(90, 100, person)
            else:
                self.calculateSimilarityAndColor(10, 75, person)
        return self.dataset

    def calculateSimilarityAndColor(self, min, max, person):
        degree = (person['power'] * 222) / 100
        person['color'] = f'hsl({degree}, 90%, 61%)'
        person['power'] = random.randint(min, max)
