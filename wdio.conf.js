const allure = require('allure-commandline');
require('dotenv').config();

exports.config = {
  runner: 'local',
  specs: [
    './test/specs/**/*.js'
  ],
  exclude: [
    //
  ],
  maxInstances: 10,
  capabilities: [{
    maxInstances: 5,
    browserName: 'chrome',
    acceptInsecureCerts: true,
    'goog:chromeOptions': {
      args: [
        '--no-sandbox',
        '--disable-infobars',
        '--headless', // comment out this line to run test in headful mode
        '--disable-gpu',
        '--window-size=1440,735'
      ],
    }
  }],
  logLevel: 'info',
  bail: 0,
  baseUrl: 'https://dev.deel.wtf',
  waitforTimeout: 30000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  services: ['chromedriver'],
  reporters: [['allure', {
    outputDir: 'allure-results'
  }]],
  framework: 'mocha',
  mochaOpts: {
    ui: 'bdd',
    timeout: 60000
  }
}
