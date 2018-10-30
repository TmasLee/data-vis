from flask import Flask, make_response, request, render_template, jsonify
from flask_restful import Resource, Api
from flask_cors import CORS
# from api.Bargraph import bar_api
# from api.Donut import donut_api
from api.Bargraph.BarStrategy import BarStrategy
from api.strategies.DataApi import DataApi

app = Flask(__name__)
cors = CORS(app, resources={r"*": {"origins": "*"}})
api = Api(app)

strategy = BarStrategy()
bar_api = DataApi(strategy)

api.add_resource(bar_api, '/bargraph')


# api.add_resource(bar_api.BargraphApi, '/bargraph')
# api.add_resource(donut_api.DonutApi, '/donut')


if __name__ == '__main__':
    app.run()
