'use strict';

var React = require('react');

var Recaptcha = React.createClass({displayName: "Recaptcha",
  propTypes: {
    className: React.PropTypes.string,
    onloadCallbackName: React.PropTypes.string,
    elementID: React.PropTypes.string,
    onloadCallback: React.PropTypes.func,
    verifyCallback: React.PropTypes.func,
    render: React.PropTypes.string,
    sitekey: React.PropTypes.string,
    theme: React.PropTypes.string,
    type: React.PropTypes.string,
    verifyCallbackName: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      elementID: 'g-recaptcha',
      onloadCallback: undefined,
      onloadCallbackName: 'onloadCallback',
      verifyCallbackName: 'verifyCallback',
      verifyCallback: undefined,
      render: 'onload',
      theme: 'light',
      type: 'image'
    };
  },

  render: function() {
    if (this.props.render === 'explicit' && this.props.onloadCallback) {
      window[this.props.onloadCallbackName] = function () {
        grecaptcha.render(this.props.elementID, {
          'sitekey': this.props.sitekey,
          'callback': (this.props.verifyCallback) ? this.props.verifyCallback : undefined,
          'theme': this.props.theme,
          'type': this.props.type
        });

        if (this.props.onloadCallback) {
          this.props.onloadCallback();
        }
      }.bind(this);
      return (
        React.createElement("div", {id: this.props.elementID,
          "data-onloadcallbackname": this.props.onloadCallbackName,
          "data-verifycallbackname": this.props.verifyCallbackName
          }
        )
      );
    } else {
      return (
        React.createElement("div", {className: "g-recaptcha",
          "data-sitekey": this.props.sitekey,
          "data-theme": this.props.theme,
          "data-type": this.props.type
          }
        )
      );
    }
  }
});

module.exports = Recaptcha;
