module.exports = {
  // We can group different tests with a tag. To run the test having the same tag
  // we need to run: npm test -- --tag forms
  '@tags': ['forms'],
  'Testing forms'(browser) {
    const backBtn = '#back';
    const submitBtn = '#submit';
    const fullName = 'Endy Ranaudo';
    const fullNameInputSelector = 'input[name="full-name"]';

    browser
      .url('http://localhost:3000/form')
      .setValue(fullNameInputSelector, fullName)

      // // BACK BTN
      // // Need to figure out how to keep test DRY
      // .click(backBtn)
      // .expect.element('#logo').text.to.contain('GREETING APP')

      // NEXT BTN
      .click(submitBtn)
      .waitForElementVisible('#card')
      .assert.containsText('#your-name', 'Endy Ranaudo');
    browser.saveScreenshot('tests_output/greeting_app.png');
  }
};
