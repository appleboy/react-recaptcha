jest.dontMock('../dist/react-recaptcha');

import React from 'react';
import ReactTestUtils from 'react-addons-test-utils';
import Recaptcha from '../dist/react-recaptcha';

describe('Recaptcha Test', () => {
  it('should exists', () => {
    // Render into document
    let recaptcha = ReactTestUtils.renderIntoDocument(<Recaptcha sitekey="123456789" />);
    expect(ReactTestUtils.isCompositeComponent(recaptcha)).toBeTruthy();
  });
});
