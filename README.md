# Neighborhood Map

[![FEND nanodegree](https://img.shields.io/badge/udacity-FEND-02b3e4.svg?style=flat-square)](https://udacity.com/course/front-end-web-developer-nanodegree--nd001/) [![License](https://img.shields.io/badge/license-MIT-02b3e4.svg?style=flat-square)](https://github.com/calaca/fend-neighborhood-map/blob/master/LICENSE.md)

> Project from Udacity's [Front End Web Developer nanodegree program](https://udacity.com/course/front-end-web-developer-nanodegree--nd001/) which consists in creating a neighborhood map using Google maps' API, JavaScript design patterns and more. :mortar_board: :computer:

## Stack

- Package manager: [NPM](https://www.npmjs.com/)
- Task runner: [Gulp](http://gulpjs.com/)
- Framework MVVM (Model-View-ViewModel): [Knockout.js](http://knockoutjs.com/)

## APIs

- [Google Maps](https://developers.google.com/maps/documentation/)
- [Foursquare](https://developer.foursquare.com/)

## Folders Structure

```
.
├── dist/
|   └── ...
├── node_modules/
|   └── ...
├── src/
|   ├── css/
|   |   └── app.css
|   ├── img/
|   |   ├── favicon.png
|   |   ├── map-marker-blue.png
|   |   └── map-marker-green.png
|   ├── js/
|   |   ├── map.js
|   |   ├── models.js
|   |   └── view.js
|   └── index.html
├── .editorconfig
├── .gitignore
├── browserslist
├── gulpfile.js
├── LICENSE.md
├── package.json
└── README.md
```

## Set Up

- Node and NPM:
    - Linux:
        ```
        curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
        sudo apt-get install -y nodejs
        ```
    - MacOSX:
        - Install Homebrew:
            ```
            /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
            ```
        - Install Node and NPM via Homebrew: `brew install node`
    - Windows: download the [Windows Installer](http://nodejs.org/#download) and follow the instructions.
- Gulp: `npm install -g gulp-cli`
- Dependencies: run `npm install` at root level.

## Run The Project

> :warning: Please make sure you've run `npm install` [(see above)](https://github.com/calaca/fend-neighborhood-map#set-up) before opening up the project. :warning:

- The distribution version is located at `dist` whereas the source code is located at `src`.

- Open `index.html` that is inside `dist` or `src` to visualize the distribution and source versions correspondingly.

- To run the distribution version on your machine open a terminal then run `gulp`. All new processed files should be inside the `dist` folder.

- If you wish to play with the source code then run `gulp server` so you have a server with auto-reaload functionality up and running.

## License

[MIT License](https://github.com/calaca/fend-neighborhood-map/blob/master/LICENSE.md) © [Lorena Calaça](http://calaca.github.io/)
