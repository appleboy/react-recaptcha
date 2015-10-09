import "babel-core/polyfill";
import React from "react";
import Recaptcha from "../src";

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
          sitekey="xxxxxxxxxxxxxxxxxxx"
          render="explicit"
          verifyCallback={verifyCallback}
          onloadCallback={callback}
        />
      </div>
    );
  }
});

React.render(<App />, document.getElementById('app'));
