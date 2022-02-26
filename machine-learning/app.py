import numpy as np
from flask import Flask, request
import pickle
import json
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/')
def hello_world():
    return 'FLASK API RUNNING!'


if __name__ == '__main__':
    app.run()
