const report = require('multiple-cucumber-html-reporter');
report.generate({
  jsonDir: 'cypress/reports/cucumber-json',
  reportPath: 'cypress/reports',
  useCDN: true,
  metadata: {
    browser: {
      name: 'chrome',
      version: '102.0.5005.115'
    },
    device: 'Desktop',
    platform: {
      name: 'windows',
      version: 10
    }
  }
});
