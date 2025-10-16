const { Builder, By, Key, until } = require('selenium-webdriver');
const { smartuiSnapshot } = require('@lambdatest/selenium-driver');

// username: Username can be found at automation dashboard
const USERNAME = process.env.LT_USERNAME || "<USERNAME>";

// AccessKey:  AccessKey can be generated from automation dashboard or profile section
const KEY = process.env.LT_ACCESS_KEY || "<ACCESS_KEY>";
let capabilities = {
  "browserName": "Chrome",
	"browserVersion": "140.0",
  "LT:Options": {
    username: USERNAME,
    accessKey: KEY,
    w3c: true,
    "name": "Home_Page_SmartUI_SDK",
    "build": "Home_Page_SmartUI_SDK_Build",
    visual: true,
    "platformName": "Windows 11",
    "accessibility":true,
    "accessibility.wcagVersion":"wcag21a",
    "accessibility.bestPractice":true,
    "accessibility.needsReview":true,  
  },
};

(async function example() {
  // Setup Input capabilities
  var gridUrl =
    "https://" + USERNAME + ":" + KEY + "@hub.lambdatest.com/wd/hub";

  let driver = await new Builder()
    .usingServer(gridUrl)
    .withCapabilities(capabilities)
    .build();
  driver.manage().window().fullscreen();
  try {
    await driver.get("https://www.amazon.in/");
    let options = {
        ignoreType: ["layout"]
      }
    await driver.sleep(5000)
    await smartuiSnapshot(driver, `Amazon Home Page`, options);
  } finally {
    await driver.quit();
  }
})();
