'use strict';

var React = require('react');

var Recaptcha = React.createClass({
  propTypes: {
    className: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      onload: undefined,
      render: 'onload',
      hl: undefined,
      theme: 'light',
      type: 'image'
    };
  },

  render: function() {
    return (
      <div className='g-recaptcha'
        data-sitekey={this.props.sitekey}
        data-theme={this.props.theme}
        data-type={this.props.type}
        >
      </div>
    );
  }
});

module.exports = Recaptcha;
