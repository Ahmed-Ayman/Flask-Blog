# First Blog, my first flask project!

let's start by creating a virtualenv which is like creating a seperate environemnt with 
the packages of specific versions you want.

## virtual env.

- To create one `virtualenv <envname>`, then `virtualenv <envname>/bin/activate` to activate the env.
- an important command is: `pip freeze --local > requirements.txt`   to export the versions of the libs to a requirements file.
- to get out of the environment enter `deactivate`.

## flask/python notes

- `'__name__' == '__main__'` is just a way to identify that the file is the one you ran from the terminal.
- `render_template()` is used for refering to templates and passing variables.
- `url_for` used for getting a static file like a css.