import 'babel-core/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import Recaptcha from '../src';

// site key
const sitekey = '6LdX_f4SAAAAAAAawpsqhQsfJK2ToPV7g_BnOA91';

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
