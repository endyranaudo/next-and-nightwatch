module.exports = {
  'My first test'(browser) {
    browser
      .url('http://localhost:3000/')
      .waitForElementVisible('#logo')
      .assert.containsText('#logo', 'GREETING APP');
  }
};
