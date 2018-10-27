from flask import Flask, make_response, request, render_template, jsonify
from flask_restful import Resource, Api, reqparse
from api.Bargraph import bar_api

app = Flask(__name__)
api = Api(app)

parser = reqparse.RequestParser()

api.add_resource(bar_api.BargraphApi, '/bargraph')

if __name__ == '__main__':
    app.run()
