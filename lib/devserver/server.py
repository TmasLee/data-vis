from flask import Flask, make_response, request, render_template, jsonify
from flask_restful import Resource, Api, reqparse
from flask_cors import CORS
from api.Bargraph import bar_api

app = Flask(__name__)
cors = CORS(app, resources={r"*": {"origins": "*"}})
api = Api(app)

parser = reqparse.RequestParser()

api.add_resource(bar_api.BargraphApi, '/bargraph')

if __name__ == '__main__':
    app.run()

# Fix virtualenv + figure out how to use and what for
# Better api for bargraph smfh
# Fix get and then test if randomize works
# Hurry make proper api with data structure + tests
