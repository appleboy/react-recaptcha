import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  className: PropTypes.string,
  onloadCallbackName: PropTypes.string,
  elementID: PropTypes.string,
  onloadCallback: PropTypes.func,
  verifyCallback: PropTypes.func,
  expiredCallback: PropTypes.func,
  render: PropTypes.string,
  sitekey: PropTypes.string,
  theme: PropTypes.string,
  type: PropTypes.string,
  verifyCallbackName: PropTypes.string,
  expiredCallbackName: PropTypes.string,
  size: PropTypes.string,
  tabindex: PropTypes.string,
  hl: PropTypes.string,
  badge: PropTypes.string,
};

const defaultProps = {
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

const isReady = () => typeof window !== 'undefined' && typeof window.grecaptcha !== 'undefined';

let readyCheck;

export default class Recaptcha extends Component {

  constructor(props) {
    super(props);
    this.state = {
      ready: isReady(),
      widget: null,
    };
    if (!this.state.ready) {
      readyCheck = setInterval(this._updateReadyState.bind(this), 1000);
    }
  }

  componentDidMount() {
    const { ready } = this.state;
    if (ready) {
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
    clearInterval(readyCheck);
  }

  reset() {
    const { ready, widget } = this.state;
    if (ready && widget !== null) {
      grecaptcha.reset(widget);
    }
  }

  _updateReadyState() {
    if (isReady()) {
      this.setState({ ready: true });
      clearInterval(readyCheck);
    }
  }

  _renderGrecaptcha() {
    const {
      elementID, sitekey, verifyCallback, theme, type, size, tabindex, hl, badge, expiredCallback, onloadCallback,
    } = this.props;

    this.state.widget = grecaptcha.render(elementID, {
      sitekey,
      callback: (verifyCallback) ? verifyCallback : undefined,
      theme,
      type,
      size,
      tabindex,
      hl,
      badge,
      'expired-callback': (expiredCallback) ? expiredCallback : undefined,
    });

    if (onloadCallback) {
      onloadCallback();
    }
  }

  render() {
    const {
      render, onloadCallback, elementID, onloadCallbackName, verifyCallbackName, sitekey, theme, type, size, badge, tabindex,
    } = this.props;

    if (render === 'explicit' && onloadCallback) {
      return (
        <div id={elementID}
          data-onloadcallbackname={onloadCallbackName}
          data-verifycallbackname={verifyCallbackName}
        />
      );
    }

    return (
      <div id={elementID}
        className="g-recaptcha"
        data-sitekey={sitekey}
        data-theme={theme}
        data-type={type}
        data-size={size}
        data-badge={badge}
        data-tabindex={tabindex}
      />
    );
  }
}

Recaptcha.propTypes = propTypes;
Recaptcha.defaultProps = defaultProps;
