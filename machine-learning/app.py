import numpy as np
from flask import Flask, request
import pickle
import json
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

model = pickle.load(open("model.pkl", "rb"))

@app.route('/')
def hello_world():
    return 'FLASK API RUNNING!'


@app.route('/analyse', methods=["POST"])
def analyse():
    request_data = request.get_json()
    dom_pv = request_data['dom_pv']
    ks_kpt = request_data['ks_kpt']
    md_bct = request_data['md_bct']
    md_ct = request_data['md_ct']
    md_cvt = request_data['md_cvt']
    features = [dom_pv, ks_kpt, md_bct, md_ct, md_cvt]
    matrix = [np.array(features)]
    print(matrix)
    prediction = model.predict(matrix)
    print(prediction)
    prediction_scaled = prediction.item(0)
    value = {
        "response": prediction_scaled
    }
    return json.dumps(value)

if __name__ == '__main__':
    app.run()
