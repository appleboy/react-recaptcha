import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  className: PropTypes.string,
  onloadCallbackName: PropTypes.string,
  elementID: PropTypes.string,
  onloadCallback: PropTypes.func,
  verifyCallback: PropTypes.func,
  expiredCallback: PropTypes.func,
  render: PropTypes.oneOf(['onload', 'explicit']),
  sitekey: PropTypes.string,
  theme: PropTypes.oneOf(['light', 'dark']),
  type: PropTypes.string,
  verifyCallbackName: PropTypes.string,
  expiredCallbackName: PropTypes.string,
  size: PropTypes.oneOf(['invisible', 'compact', 'normal']),
  tabindex: PropTypes.string,
  hl: PropTypes.string,
  badge: PropTypes.oneOf(['bottomright', 'bottomleft', 'inline']),
};

const defaultProps = {
  elementID: 'g-recaptcha',
  className: 'g-recaptcha',
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
  hl: undefined,
  badge: 'bottomright',
};

const isReady = (elementID) => typeof window !== 'undefined'
  && typeof window.grecaptcha !== 'undefined'
  && typeof window.grecaptcha.render === 'function'
  && document.getElementById(elementID);

export default class Recaptcha extends Component {

  constructor(props) {
    super(props);
    this._renderGrecaptcha = this._renderGrecaptcha.bind(this);
    this.reset = this.reset.bind(this);
    this.state = {
      ready: isReady(props.elementID),
      widget: null,
    };
    this.readyCheck = null;

    if (!this.state.ready && typeof window !== 'undefined') {
      this.readyCheck = setInterval(this._updateReadyState.bind(this), 1000);
    }
  }

  componentDidMount() {
    if (this.state.ready) {
      this._renderGrecaptcha();
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { render, onloadCallback } = this.props;

    if (render === 'explicit' && onloadCallback && this.state.ready && !prevState.ready) {
      this._renderGrecaptcha();
    }
  }

  componentWillUnmount() {
    clearInterval(this.readyCheck);
  }

  reset() {
    const { ready, widget } = this.state;
    if (ready && widget !== null) {
      grecaptcha.reset(widget);
    }
  }

  execute() {
    const { ready, widget } = this.state;
    if (ready && widget !== null) {
      grecaptcha.execute(widget);
    }
  }

  _updateReadyState() {
    if (isReady(this.props.elementID)) {
      this.setState({
        ready: true,
      });

      clearInterval(this.readyCheck);
    }
  }

  _renderGrecaptcha() {
    this.state.widget = grecaptcha.render(this.props.elementID, {
      sitekey: this.props.sitekey,
      callback: (this.props.verifyCallback) ? this.props.verifyCallback : undefined,
      theme: this.props.theme,
      type: this.props.type,
      size: this.props.size,
      tabindex: this.props.tabindex,
      hl: this.props.hl,
      badge: this.props.badge,
      'expired-callback': (this.props.expiredCallback) ? this.props.expiredCallback : undefined,
    });

    if (this.props.onloadCallback) {
      this.props.onloadCallback();
    }
  }

  render() {
    if (this.props.render === 'explicit' && this.props.onloadCallback) {
      return (
        <div id={this.props.elementID}
          data-onloadcallbackname={this.props.onloadCallbackName}
          data-verifycallbackname={this.props.verifyCallbackName}
        />
      );
    }

    return (
      <div id={this.props.elementID}
        className={this.props.className}
        data-sitekey={this.props.sitekey}
        data-theme={this.props.theme}
        data-type={this.props.type}
        data-size={this.props.size}
        data-badge={this.props.badge}
        data-tabindex={this.props.tabindex}
      />
    );
  }
}

Recaptcha.propTypes = propTypes;
Recaptcha.defaultProps = defaultProps;
