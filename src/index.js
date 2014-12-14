'use strict';

var React = require('react');

var Recaptcha = React.createClass({
  propTypes: {
    className: React.PropTypes.string
  },
  render: function() {
    return (
      <div className='g-recaptcha' data-sitekey={this.props.siteKey}></div>
    );
  }
});

module.exports = Recaptcha;
