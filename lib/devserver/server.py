from flask import Flask, make_response, request, render_template, jsonify
from flask_restful import Resource, Api
from flask_cors import CORS
from api.Bargraph.BarStrategy import BarStrategy
from api.Donut.DonutStrategy import DonutStrategy
from api.Scatter.ScatterStrategy import ScatterStrategy
from api.strategies.DataApi import DataApi
import json
import os

app = Flask(__name__)
cors = CORS(app, resources={r"*": {"origins": "*"}})
api = Api(app)

script_dir = os.path.dirname(__file__)
holmium1_path = os.path.join(script_dir, './api/Scatter/holmium_1.json')
holmium2_path = os.path.join(script_dir, './api/Scatter/holmium_2.json')
KMnO4_1_path = os.path.join(script_dir, './api/Scatter/KMnO4_1.json')
KMnO4_2_path = os.path.join(script_dir, './api/Scatter/KMnO4_2.json')

with open(holmium1_path, 'r') as outfile1, open(holmium2_path, 'r') as outfile2, open(KMnO4_1_path, 'r') as outfile3, open(KMnO4_2_path, 'r') as outfile4:
    HolmiumData1 = json.load(outfile1)
    HolmiumData2 = json.load(outfile2)
    KMnO4_Data1 = json.load(outfile3)
    KMnO4_Data2 = json.load(outfile4)

api.add_resource(DataApi, '/holmiumTrial1', endpoint='/holmiumTrial1',
                 resource_class_kwargs={'strategy': ScatterStrategy(HolmiumData1)})
api.add_resource(DataApi, '/holmiumTrial2', endpoint='/holmiumTrial2',
                 resource_class_kwargs={'strategy': ScatterStrategy(HolmiumData2)})
api.add_resource(DataApi, '/KMnO4Trial1', endpoint='/KMnO4Trial1',
                 resource_class_kwargs={'strategy': ScatterStrategy(KMnO4_Data1)})
api.add_resource(DataApi, '/KMnO4Trial2', endpoint='/KMnO4Trial2',
                 resource_class_kwargs={'strategy': ScatterStrategy(KMnO4_Data2)})
api.add_resource(DataApi, '/BAR_GRAPH', endpoint='/BAR_GRAPH',
                 resource_class_kwargs={'strategy': BarStrategy()})
api.add_resource(DataApi, '/DONUT_CHART', endpoint='/DONUT_CHART',
                 resource_class_kwargs={'strategy': DonutStrategy()})

if __name__ == '__main__':
    app.run()
