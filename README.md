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

You can see the [full example](./example) by following steps.

```
$ npm install
$ npm start
```

open the `http://localhost:3000` in your browser.

# Node support

Node >= v6 is required for this package. Run `node -v` in your command prompt if you're unsure which Node version you have installed.

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
## Component props

### Available props

The following props can be passed into the React reCAPTCHA component. These can also be viewed in the [source code](https://github.com/appleboy/react-recaptcha/blob/master/src/index.js#L4-L21)

* `className` : the class for the reCAPTCHA div.
* `onloadCallbackName` : the name of your onloadCallback function (see `onloadCallback` below).
* `elementID` : the #id for the reCAPTCHA div.
* `onloadCallback` : the callback to pass into the reCAPTCHA API if [rendering the reCAPTCHA explicitly](https://github.com/appleboy/react-recaptcha#explicitly-render-the-recaptcha-widget).
* `verifyCallback` : the callback that fires after reCAPTCHA has verified a user.
* `expiredCallback` : optional. A callback to pass into the reCAPTCHA if the reCAPTCHA response has expired.
* `render` : specifies the render type for the component (e.g. explicit), see `onloadCallback` and [explicit rendering](https://github.com/appleboy/react-recaptcha#explicitly-render-the-recaptcha-widget).
* `sitekey` : the sitekey for the reCAPTCHA widget, obtained after signing up for an API key.
* `theme` : the color theme for the widget, either light or dark.
* `type` : the type of reCAPTCHA you'd like to render, list of reCAPTCHA types [available here](https://developers.google.com/recaptcha/docs/versions).
* `verifyCallbackName` : the name of your verifyCallback function, see `verifyCallback` above.
* `expiredCallbackName` : the name of your expiredCallbackName function, see `expiredCallback` above.
* `size` : the desired size of the reCAPTCHA widget, can be either 'compact' or 'normal'.
* `tabindex` : optional: The tabindex of the widget and challenge. If other elements in your page use tabindex, it should be set to make user navigation easier. More info on tabindex [available here](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex).
* `hl` : optional. Forces the widget to render in a specific language. Auto-detects the user's language if unspecified. List of language codes [available here](https://developers.google.com/recaptcha/docs/language).
* `badge` : optional. Reposition the reCAPTCHA badge. 'inline' allows you to control the CSS.

### Default props

If not specified when rendering the component, the following props will be passed into the reCAPTCHA widget:

```javascript
  {
    elementID: 'g-recaptcha',
    onloadCallback: undefined,
    onloadCallbackName: 'onloadCallback',
    verifyCallback: undefined,
    verifyCallbackName: 'verifyCallback',
    expiredCallback: undefined,
    expiredCallbackName: 'expiredCallback',
    render: 'onload',
    theme: 'light',
    type: 'image',
    size: 'normal',
    tabindex: '0',
    hl: 'en',
    badge: 'bottomright',
  };
```


### Using invisible reCAPTCHA

Use the invisible reCAPTCHA by setting `size` prop to 'invisible'. Since it is invisible, the reCAPTCHA widget must be executed programatically.

```javascript
var Recaptcha = require('react-recaptcha');

// create a variable to store the component instance
let recaptchaInstance;

// manually trigger reCAPTCHA execution
const executeCaptcha = function () {
  recaptchaInstance.execute();
};

// executed once the captcha has been verified
// can be used to post forms, redirect, etc.
const verifyCallback = function (response) {
  console.log(response);
  document.getElementById("someForm").submit();
};

ReactDOM.render(
  <div>
    <form id="someForm" action="/search" method="get">
      <input type="text" name="query">
    </form>
    <button
      onClick={executeCaptcha}
    >
     Submit
    </button>

    <Recaptcha
      ref={e => recaptchaInstance = e}
      sitekey="xxxxxxxxxxxxxxxxxxxx"
      size="invisible"
      verifyCallback={verifyCallback}
    />
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
