import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import ReactFrame from 'react-frame-component';
import Recaptcha from '../src';

// site key
const sitekey = 'xxxxxxx';

// define a variable to store the recaptcha instance
let recaptchaInstance;

class App extends React.Component {
  render() {
    // specifying your onload callback function
    const callback = () => {
      console.log('Done!!!!');
    };

    const verifyCallback = (response) => {
      console.log(response);
    };

    const expiredCallback = () => {
      console.log(`Recaptcha expired`);
    };

    // handle reset
    const resetRecaptcha = () => {
      recaptchaInstance.reset();
    };

    const content = (
      <div>
        <h1>Google Recaptcha</h1>
        <Recaptcha
          ref={e => this.recaptchaInstance = e}
          sitekey={sitekey}
          verifyCallback={verifyCallback}
          onloadCallback={callback}
          expiredCallback={expiredCallback}
        />
        <br />
        <button
          onClick={resetRecaptcha}
        >
          Reset
        </button>
      </div>
    );

    if (this.props.framed) {
      return (
        <ReactFrame
          initialContent='<html><head><script src="https://www.google.com/recaptcha/api.js" async defer></script></head><body><div class="frame-root"></div></body></html>'
        >
          {content}
        </ReactFrame>
      );
    }

    return (<div>{content}</div>);
  }
}

App.propTypes = {
  framed: PropTypes.bool.isRequired,
};

ReactDOM.render(<App framed />, document.getElementById('app'));
ReactDOM.render(<App framed={false} />, document.getElementById('app2'));
