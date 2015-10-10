import 'babel-core/polyfill';
import React from 'react';
import Recaptcha from '../src';

// site key
let sitekey = 'xxxxxxxx';

// specifying your onload callback function
let callback = () => {
  console.log('Done!!!!');
};

let verifyCallback = (response) => {
  console.log(response);
};

let App = React.createClass({
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
});

React.render(<App />, document.getElementById('app'));
