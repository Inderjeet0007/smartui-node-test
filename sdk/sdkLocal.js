const { Builder, By, Key, until, Browser } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const { smartuiSnapshot } = require('@lambdatest/selenium-driver');

(async function example() {
  const options = new chrome.Options();
  options.setChromeBinaryPath("/Applications/Chromium.app/Contents/MacOS/Chromium");

  let driver = await new Builder().forBrowser('chrome').setChromeOptions(options).build();

  try {
    await driver.get("http://localhost:8000/page.html");
    await smartuiSnapshot(driver, "Local Page");
  } finally {
    await driver.quit();
  }
})();
