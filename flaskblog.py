from flask import Flask, render_template
import posts 
app = Flask(__name__)
posts_arr = posts.posts_arr
@app.route("/")
def home():
    return  render_template('home.html',posts = posts_arr)

@app.route("/about")
def about():
    return  render_template('about.html',title= "about")

if __name__ =='__main__':
    app.run(debug=True)
