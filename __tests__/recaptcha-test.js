jest.dontMock('../src/index');

import React from 'react/addons';
let TestUtils = React.addons.TestUtils;
let Recaptcha;

describe('Recaptcha Test', () => {

  beforeEach(function() {
    Recaptcha = require('../src/index');
  });

  it('should exists', function() {
    // Render into document
    let recaptcha = TestUtils.renderIntoDocument(<Recaptcha sitekey="123456789" />);
    expect(TestUtils.isCompositeComponent(recaptcha)).toBeTruthy();
  });
});
