'use strict';

var assert = require('assert');
var Recaptcha = require('../build/index');
var React = require('react');

describe('react-time', function() {
  it('renders widget', function() {
    var c = React.createElement(Recaptcha, {siteKey: 123456});
    var markup = React.renderToString(c);
    assert(/data-sitekey="123456"/.test(markup));
  });
});
