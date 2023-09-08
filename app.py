from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/bfhl', methods=['POST'])
def post_endpoint():
    try:
        data = request.json['data']

        # Implement your logic here
        # Extract relevant information and perform processing
        # Replace with your actual logic

        response_data = {
            "is_success": True,
            "user_id": "john_doe_17091999",
            "email": "john@xyz.com",
            "roll_number": "ABCD123",
            "numbers": ["1", "334", "4"],
            "alphabets": ["M", "B"],
            "highest_alphabet": ["M"]
        }

        return jsonify(response_data), 200

    except Exception as e:
        return jsonify({"is_success": False, "error_message": str(e)}), 400

@app.route('/bfhl', methods=['GET'])
def get_endpoint():
    response_data = {"operation_code": 1}
    return jsonify(response_data), 200

if __name__ == '__main__':
    app.run(debug=True)
