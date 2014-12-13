'use strict';

var React = require('react');

var Recaptcha = React.createClass({
  render: function() {
    <div class="g-recaptcha" data-sitekey="this.props.siteKey"></div>
  }
});

module.exports = Recaptcha;
