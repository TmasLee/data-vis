from flask import Flask, make_response, request, jsonify
from flask_restful import Resource
import random

# Does the AbsStrategy go into this class?


class BargraphApi(Resource):
    def get(self):
        return jsonify({'data': 'x'})
