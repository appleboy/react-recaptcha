import 'babel-core/polyfill';
import React from 'react';
import Recaptcha from '../src';

// site key
const sitekey = 'xxxxxxxx';

// specifying your onload callback function
const callback = () => {
  console.log('Done!!!!');
};

const verifyCallback = (response) => {
  console.log(response);
};

class App extends React.Component {
  render() {
    return (
      <div>
        <Recaptcha
          sitekey={sitekey}
          render="explicit"
          verifyCallback={verifyCallback}
          onloadCallback={callback}
        />
      </div>
    );
  }
}

React.render(<App />, document.getElementById('app'));
