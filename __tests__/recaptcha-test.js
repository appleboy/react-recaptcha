jest.dontMock('../src/index');

import React from 'react';
import ReactTestUtils from 'react-dom/test-utils';
import Recaptcha from '../src/index';

describe('Recaptcha Test', () => {
  it('should exists', () => {
    // Render into document
    let recaptcha = ReactTestUtils.renderIntoDocument(<Recaptcha sitekey="123456789" />);
    expect(ReactTestUtils.isCompositeComponent(recaptcha)).toBeTruthy();
  });
});
