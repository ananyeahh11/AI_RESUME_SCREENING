from flask import Flask, request, jsonify
from flask_cors import CORS
from ranking import rank_candidates

app = Flask(__name__)

CORS(
    app,
    resources={
        r"/*": {
            "origins": "*"
        }
    }
)

@app.route("/")
def home():
    return jsonify({
        "status": "running"
    })

@app.route("/rank", methods=["POST"])
def rank():

    try:

        data = request.get_json()

        job_description = data.get(
            "jobDescription",
            ""
        )

        resumes = data.get("resumes", [])
        print("TOTAL RESUMES RECEIVED:", len(resumes))    
        

        if len(resumes) == 0:
            return jsonify({
                "error": "No resumes uploaded"
            }), 400

        results = rank_candidates(
            job_description,
            resumes
        )

        return jsonify(results)

    except Exception as e:

        print("ERROR:", str(e))

        return jsonify({
            "error": str(e)
        }), 500


if __name__ == "__main__":
    app.run(
        host="0.0.0.0",
        port=5000,
        debug=True
    )