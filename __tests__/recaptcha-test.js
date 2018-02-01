// Mock grecaptcha, see below
const grecaptchaMock = {
  reset: function() {
    return true
  },
  render: function() {
    return true
  }
}

// JSDOM configuration (should be done before requiring anything else, see: http://airbnb.io/enzyme/docs/guides/jsdom.html)
const {JSDOM} = require('jsdom');
const jsdom = new JSDOM('<!doctype html><html><body></body></html>');
const {window} = jsdom;
// set grecaptchaMock as a property on JSDOM window, will now be accessable by component when rendered in tests
window.grecaptcha = grecaptchaMock

function copyProps(src, target) {
  const props = Object.getOwnPropertyNames(src).filter(prop => typeof target[prop] === 'undefined').reduce((result, prop) => ({
    ...result,
    [prop]: Object.getOwnPropertyDescriptor(src, prop)
  }), {});
  Object.defineProperties(target, props);
}

global.window = window;
global.document = window.document;
global.navigator = {
  userAgent: 'node.js'
};
copyProps(window, global);

// Import React, test utils, component
import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import Recaptcha from '../src/index';
import sinon from 'sinon';

// Lodash for deep equality testing
import _ from 'lodash'

// Import enzyme and configure for React 15
import Adapter from 'enzyme-adapter-react-15';
import {configure, render, mount} from 'enzyme';
configure({adapter: new Adapter()});

// Test method for test props
function testFunction() {
  return true
}

// Test props with all props specified
const testProps = {
  className: 'testClass',
  onloadCallbackName: 'testCallBackName',
  elementID: 'testElementID',
  onloadCallback: testFunction,
  verifyCallback: testFunction,
  expiredCallback: testFunction,
  render: 'testRender',
  sitekey: 'testSitekey',
  theme: 'testTheme',
  type: 'testType',
  verifyCallbackName: 'testVerifyCallbackName',
  expiredCallbackName: 'testExpiredCallbackName',
  size: 'testSize',
  tabindex: 'testTabindex',
  hl: 'testHl',
  badge: 'testBadge'
};


/* ----------
   Test cases!
   ---------- */

describe('Recaptcha Test', () => {
  describe('Recaptcha component', () => {
    it('should exist', () => {
      // Render into document
      let recaptcha = ReactTestUtils.renderIntoDocument(<Recaptcha sitekey="123456789"/>);
      expect(ReactTestUtils.isCompositeComponent(recaptcha)).toBeTruthy();
    });
    it('should mount successfully', () => {
      const component = mount(<Recaptcha />);
      let actual = component.length
      let expected = 1
      expect(actual).toEqual(expected)
    })
  })

  describe('Component props', () => {
    it('should render props correctly', () => {
      const component = mount(<Recaptcha {...testProps} />)
      let componentProps = component.props()
      let actual = _.isEqual(componentProps, testProps)
      let expected = true
      expect(actual).toEqual(expected)
    })
    it('should render default props for the component\'s specified default props', () => {
      const component = mount(<Recaptcha />)
      let componentProps = component.props()
      let actual = _.isEqual(Recaptcha.defaultProps, componentProps)
      let expected = true
      expect(actual).toEqual(expected)
    })
  })

  describe('Component methods', () => {
    describe('component#constructor', () => {
      it('should exist', () => {
        const component = mount(<Recaptcha />)
        let actual = typeof component.instance().constructor
        let expected = 'function'
        expect(actual).toEqual(expected)
      })
      it('should bind \'this\' to the appropriate component methods when called', () => {
        const component = mount(<Recaptcha />)
        const boundComponentMethods = ['_renderGrecaptcha', 'reset']
        let actual = undefined
        let expected = undefined
        boundComponentMethods.forEach(method => {
          actual = component.instance()[method].hasOwnProperty('prototype')
          expected = false
          expect(actual).toEqual(expected)
          actual = undefined
          expected = undefined
        })
      })
    })

    describe('component#reset', () => {
      it('should exist', () => {
        const component = mount(<Recaptcha />)
        let actual = typeof component.instance().reset
        let expected = 'function'
        expect(actual).toEqual(expected)
      })
      it('should call reset on window.grecaptcha when called', () => {
        let resetSpy = sinon.spy(window.grecaptcha, 'reset');
        const component = mount(<Recaptcha />, {context: window})
        component.instance().reset()
        let actual = resetSpy.callCount
        let expected = 1
        expect(actual).toEqual(expected)
        resetSpy.restore()
      })
    })

    describe('component#_updateReadyState', () => {
      it('should exist', () => {
        const component = mount(<Recaptcha />)
        let actual = typeof component.instance()._updateReadyState
        let expected = 'function'
        expect(actual).toEqual(expected)
      })
      it('should set the component\'s state to ready when isReady returns true', () => {
        const component = mount(<Recaptcha />, {context: window})
        let actual = component.instance().state.ready
        let expected = true
        expect(actual).toEqual(expected)
      })
    })

    describe('component#_renderGrecaptcha', () => {
      it('should exist', () => {
        const component = mount(<Recaptcha />)
        let actual = typeof component.instance()._renderGrecaptcha
        let expected = 'function'
        expect(actual).toEqual(expected)
      })
      it('should be called when the captcha is ready to render', () => {
        let componentSpy = sinon.spy(Recaptcha.prototype, '_renderGrecaptcha');
        const component = mount(<Recaptcha />, {context: window})
        let actual = componentSpy.callCount
        let expected = 1
        expect(actual).toEqual(expected)
        componentSpy.restore()
      })
    })
  })
})
