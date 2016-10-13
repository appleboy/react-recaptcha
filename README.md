# [react](http://facebook.github.io/react/)-recaptcha

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Build Status](https://travis-ci.org/appleboy/react-recaptcha.svg?branch=master)](https://travis-ci.org/appleboy/react-recaptcha) [![devDependency Status](https://david-dm.org/appleboy/react-recaptcha/dev-status.svg)](https://david-dm.org/appleboy/react-recaptcha#info=devDependencies)

[![NPM](https://nodei.co/npm/react-recaptcha.png?downloads=true&stars=true)](https://nodei.co/npm/react-recaptcha/)

[npm-url]: https://www.npmjs.org/package/react-recaptcha
[npm-image]: http://img.shields.io/npm/v/react-recaptcha.svg
[downloads-image]: http://img.shields.io/npm/dm/react-recaptcha.svg

A [react.js]((http://facebook.github.io/react/)) reCAPTCHA for Google. The FREE anti-abuse service. Easy to add, advanced security, accessible to wide range of users and platforms.

# What is reCAPTCHA?

reCAPTCHA is a free service that protects your site from spam and abuse. It uses advanced risk analysis engine to tell humans and bots apart. With the new API, a significant number of your valid human users will pass the reCAPTCHA challenge without having to solve a CAPTCHA (See blog for more details). reCAPTCHA comes in the form of a widget that you can easily add to your blog, forum, registration form, etc.

See [the details][1].

# Sign up for an API key pair

To use reCAPTCHA, you need to [sign up for an API key pair][2] for your site. The key pair consists of a site key and secret. The site key is used to display the widget on your site. The secret authorizes communication between your application backend and the reCAPTCHA server to verify the user's response. The secret needs to be kept safe for security purposes.

[1]: https://www.google.com/recaptcha/intro/index.html
[2]: http://www.google.com/recaptcha/admin

# Installation

Install package via [node.js](http://nodejs.org/)

```bash
$ npm install --save react-recaptcha
```

# Usage

You can see the [full example](./example) by follwing steps.

```
$ npm install
$ npm start
```

open the `http://localhost:3000` in your browser.

### Automatically render the reCAPTCHA widget

Html example code:

```html
<html>
  <head>
    <title>reCAPTCHA demo: Simple page</title>
    <script src="build/react.js"></script>
    <script src="https://www.google.com/recaptcha/api.js" async defer></script>
  </head>
  <body>
    <div id="example"></div>
    <script src="build/index.js"></script>
  </body>
</html>
```

Jsx example code: `build/index.js`

```javascript
var Recaptcha = require('react-recaptcha');

ReactDOM.render(
  <Recaptcha
    sitekey="xxxxxxxxxxxxxxxxxxxx"
  />,
  document.getElementById('example')
);
```

### Explicitly render the reCAPTCHA widget

Deferring the render can be achieved by specifying your onload callback function and adding parameters to the JavaScript resource.

```html
<html>
  <head>
    <title>reCAPTCHA demo: Simple page</title>
    <script src="build/react.js"></script>
    <script src="https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit" async defer></script>
  </head>
  <body>
    <div id="example"></div>
    <script src="build/index.js"></script>
  </body>
</html>
```

Jsx example code: `build/index.js`

```javascript
var Recaptcha = require('react-recaptcha');

// specifying your onload callback function
var callback = function () {
  console.log('Done!!!!');
};

ReactDOM.render(
  <Recaptcha
    sitekey="xxxxxxxxxxxxxxxxxxxx"
    render="explicit"
    onloadCallback={callback}
  />,
  document.getElementById('example')
);
```

Define verify Callback function

```javascript
var Recaptcha = require('react-recaptcha');

// specifying your onload callback function
var callback = function () {
  console.log('Done!!!!');
};

// specifying verify callback function
var verifyCallback = function (response) {
  console.log(response);
};

ReactDOM.render(
  <Recaptcha
    sitekey="xxxxxxxxxxxxxxxxxxxx"
    render="explicit"
    verifyCallback={verifyCallback}
    onloadCallback={callback}
  />,
  document.getElementById('example')
);
```

Change the color theme of the widget. Please `theme` property `light|dark`. Default value is `light`.

```javascript
ReactDOM.render(
  <Recaptcha
    sitekey="xxxxxxxxxxxxxxxxxxxx"
    theme="dark"
  />,
  document.getElementById('example')
);
```

Change the type of CAPTCHA to serve. Please `type` property `audio|image`. Default value is `image`.

```javascript
ReactDOM.render(
  <Recaptcha
    sitekey="xxxxxxxxxxxxxxxxxxxx"
    type="audio"
  />,
  document.getElementById('example')
);
```

### Explicitly reset the reCAPTCHA widget

The reCAPTCHA widget can be manually reset by accessing the component instance via a callback ref and calling `.reset()` on the instance.

```javascript
var Recaptcha = require('react-recaptcha');

// create a variable to store the component instance
let recaptchaInstance;

// create a reset function
const resetRecaptcha = () => {
  recaptchaInstance.reset();  
};

ReactDOM.render(
  <div>
    <Recaptcha
      ref={e => recaptchaInstance = e}
      sitekey="xxxxxxxxxxxxxxxxxxxx"
    />
    <button
      onClick={resetRecaptcha}
    >
     Reset
    </button>
  </div>,
  document.getElementById('example')
);
```

# Contributing

* 1. Fork it
* 2. Create your feature branch (git checkout -b my-new-feature)
* 3. Commit your changes (git commit -am 'Add some feature')
* 4. Push to the branch (git push origin my-new-feature)
* 5. Create new Pull Request
