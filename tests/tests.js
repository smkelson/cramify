var cram = {}
var data = require('../testData/data')
module.exports = {
    beforeEach: browser => {
        cram = browser.page.cramifyPage()
        cram.navigate()
        .maximizeWindow()
    },
    after: browser => {
        browser.end()
    },
    'login': browser => {
        cram.login('smkelson@yahoo.com', 'Dexter')
    },
    'Set Name Test': browser => {
        cram.api.url('https://cramify.net/#/dashboard')
        cram.createSet('Know It All', data)
        .click('@logout')

    },
  }