const { Builder, By, Key, until, Browser } = require('selenium-webdriver');
const { smartuiSnapshot } = require('@lambdatest/selenium-driver');

(async function example() {
  const options = new chrome.Options();
  options.setChromeBinaryPath("/Applications/Chromium.app/Contents/MacOS/Chromium");

  let driver = await new Builder().forBrowser('chrome').setChromeOptions(options).build();

  try {
    await driver.get("https://www.lambdatest.com");
    // await smartuiSnapshot(driver, "Lambdatest");
    await driver.get("https://www.pinterest.com/pin/112801165652823604/");
    // await smartuiSnapshot(driver, "NYC");
    for(let i=0; i<1000; i++){
      await smartuiSnapshot(driver, `NYC Snap No: ${i}`); // Capture Screenshot
    }
  } finally {
    await driver.quit();
  }
})();
