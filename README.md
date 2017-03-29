# Neighborhood Map

> Project from Udacity's [Front End Web Developer nanodegree program](https://udacity.com/course/front-end-web-developer-nanodegree--nd001/) which consists in creating a neighborhood map using Google maps' API, JavaScript design patterns and more. :mortar_board: :computer:

## Stack

- Package managers: [NPM](https://www.npmjs.com/)
- Task runner: [Gulp](http://gulpjs.com/)
- Framework MVVM (Model-View-ViewModel): [Knockout.js](http://knockoutjs.com/)

## APIs

- [Google Maps](https://developers.google.com/maps/documentation/)
- [Foursquare](https://developer.foursquare.com/)

## Folders Structure

```
.
├── README.md
├── dist/
├── src/
|   ├── css/
|   |   └── app.css
|   ├── js/
|   |   ├── collections/
|   |   |   └── ...
|   |   ├── models/
|   |   |   └── ...
|   |   ├── routers/
|   |   |   └── ...
|   |   └── views/
|   |   |   └── ...
|   |   └── app.js
|   └── index.html
├── gulpfile.js
├── package.json
├── .editorconfig
└── .gitignore
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
- Bower: `npm install -g bower`
- Dependencies: run `npm install` at root level.

## Run The Project

**TODO:** finish this section as soon as the gulpfile is done.

## License
[MIT License](https://github.com/calaca/fend-neighborhood-map/blob/master/LICENSE.md) © [Lorena Calaça](http://calaca.github.io/)