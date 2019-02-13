# First Blog, my first flask project!

[Imgur](https://i.imgur.com/eEsBniG.png)

## installation and structurue.
to install the project, simply make sure that you have python and node on your PC then type `npm install` then `gulp`.

the projects consists of:
- `templates`: that is (jinja)[http://jinja.pocoo.org/] specific templates for the different pages.
- `static`: contains `sass` and `css`, I'm using gulp to compile/join the sass to css files.
- `flaskblog.py`: is the entry point of the project, and `posts.py` is just a static array of posts that I will be replacing with a DB very soon.

## learning keynotes
let's start by creating a virtualenv which is like creating a seperate environemnt with 
the packages of specific versions you want.

### virtual env.

- To create one `virtualenv <envname>`, then `virtualenv <envname>/bin/activate` to activate the env.
- an important command is: `pip freeze --local > requirements.txt`   to export the versions of the libs to a requirements file.
- to get out of the environment enter `deactivate`.

### flask/python notes

- `'__name__' == '__main__'` is just a way to identify that the file is the one you ran from the terminal.
- `render_template()` is used for refering to templates and passing variables.
- `url_for` used for getting a static file like a css.
