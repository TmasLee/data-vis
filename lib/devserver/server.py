from flask import Flask, make_response, request, render_template, jsonify
from flask_restful import Resource, Api
from flask_cors import CORS
from api.Bargraph.BarStrategy import BarStrategy
from api.strategies.DataApi import DataApi

app = Flask(__name__)
cors = CORS(app, resources={r"*": {"origins": "*"}})
api = Api(app)

strategy = BarStrategy()
bar_api = DataApi

api.add_resource(bar_api, '/bargraph',
                 resource_class_kwargs={'strategy': strategy})


if __name__ == '__main__':
    app.run()
