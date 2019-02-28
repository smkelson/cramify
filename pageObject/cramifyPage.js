var loginFunction = {
    login: function (email, password) {
        this
            .click('@loginBtn')
            .waitForElementVisible('@loginDisplay')
            .setValue('@email', email)
            .setValue('@password', password)
            // .pause(3000)
            .click('@login')
            .waitForElementVisible('@userimg')
    },
    createSet: function (name, questions) {
        this
            .waitForElementVisible('@createSet')
            .click('@createSet')
            .waitForElementVisible('@questionList')
            .setValue('@setName', name)
        questions.forEach(question => {
            this
                .useXpath()
                .waitForElementVisible(`(//div[text()="${question}"])`)
                .click(`(//div[text()="${question}"])`)
                .useCss()
        })
        this
            .click('@plus')
            .expect.element('@sets').text.to.contain(name).before(5000)
            return this
    }
}

module.exports = {
    url: 'https://cramify.net/#/',
    commands: [loginFunction],
    elements: {
        loginBtn: {
            selector: '(//div[@class="button"])[2]',
            locateStrategy: 'xpath'
        },
        email: 'input[placeholder="Email"]',
        password: 'input[placeholder="Password"]',
        login: {
            selector: '(//button[@class="button"])[3]',
            locateStrategy: 'xpath'
        },
        logout: {
            selector: '(//*[text()="Logout"])[1]',
            locateStrategy: 'xpath'
        },
        loginDisplay: {
            selector: '(//div[@class="content"])[2]',
            locateStrategy: 'xpath'
        },
        userimg: '.user-img',
        createSet: 'h5[class="create-set-btn"]',
        questionList: 'div[class="question-list"]',
        setName: `input[placeholder="Your Set's Name"]`,
        plus: '.fa-plus',
        sets: '.my-sets'
    }
}