the-webdev.de
==============

This repository contains the source code of my portfolio site [the-webdev.de](http://the-webdev.de/).

## Structure

- `src` contains the Sass and JavaScript files.
- `www` contains the distribution folder.
	- The Sass files are compiled into  `www/css`.
	- The JavaScript files are compiled into `www/js`.
	- `www/js/vendor` contains third-party JavaScript librarys.


## Usage

- If you haven't already done so, install [node.js](https://nodejs.org/).
- If you haven't already done so, install [gulp.js](http://gulpjs.com/).
- Navigate via command line into the cloned repository.
- Run `$ npm install` to install the dependencies from the `package.json`.
- Run `$ gulp` to start the Sass and JavaScrip tasks.