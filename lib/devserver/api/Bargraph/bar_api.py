from flask import Flask, make_response, request, jsonify
from flask_restful import Resource, Api, reqparse, MethodView
import random


class BargraphApi(Resource):
    def get(self):
        return jsonify({1: 'x'})
