import React from 'react'
import Layout from '../components/layout'
import Recaptcha from 'react-recaptcha'

class IndexPage extends React.Component {

  // render on captcha load
  handleCaptchaLoad(event) {
    console.log('handleCaptchaLoad')
  }

  // load on callback verify
  verifyCallback(event) {
    console.log('verifyCallback-->', event)
  }

  render() {
    return (
      <Layout>
          <h1>Hi people</h1>
          <p>Welcome to your new Gatsby site.</p>
          <Recaptcha
            sitekey="**********"
            render="explicit"
            verifyCallback={this.verifyCallback}
            onloadCallback={this.handleCaptchaLoad}
          />
        </Layout>
    )
  }
}

export default IndexPage
