* npm i -g babel-cli
* get into directory where you want to work
* npm init -y // setting up package.json
* npm i --save-dev babel-cli babel-preset-es2015 // adding babel to package.json
* create .babelrc in root folder
* put {
    "presets": ["es2015"],
    "plugins": []
  } in .babelrc
* create a directory named  src in root floder
* create file named test.js in src
* now write any es6 code in test.js
* babel src -d build
