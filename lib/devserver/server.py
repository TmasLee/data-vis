from flask import Flask, make_response, request, render_template, jsonify
from flask_restful import Resource, Api, reqparse
import random

app = Flask(__name__)
api = Api(app)

parser = reqparse.RequestParser()


class sampleApi(Resource):
    def get(self):
        return jsonify({1: 'x'})


api.add_resource(sampleApi, '/')


if __name__ == '__main__':
    app.run()
