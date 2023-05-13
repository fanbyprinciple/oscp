from flask import Flask, redirect, request

app = Flask(__name__)


@app.route("/redirect", methods=["GET"])
def redir():
    # return redirect('http://10.10.14.6/test')
    # trying to bypass firewall
    return redirect('http://127.0.0.1:3000')

@app.route("/test", methods=["GET"])
def test():
    return ("Hello!", 200)


@app.route("/hook", methods=["POST"])
def hook():
    print("Got Hook!")
    print(request.json)
    return ('', 200)


if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=80)