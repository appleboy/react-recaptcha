import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import Recaptcha from '../src';

// site key
const sitekey = 'xxxxxxx';

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

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Google Recaptcha</h1>
        <Recaptcha
          sitekey={sitekey}
          size="compact"
          render="explicit"
          verifyCallback={verifyCallback}
          onloadCallback={callback}
          expiredCallback={expiredCallback}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
