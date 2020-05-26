module.exports = {
    '@tags': ['login'],
    'Test di Kalcare (Dekstop)'(browser){
     
     const pass ='123456';
     const email ='noviantonugroho4@gmail.com';

    browser
         .url('https://kalcare.karsalintasbuwana.com/')
         .assert.urlContains('https://kalcare.karsalintasbuwana.com/', 'Home Page')
         .maximizeWindow();
    browser
        .useXpath()
            .assert.elementPresent("//*[@id='__next']/div[1]/header/div/div/button[2]", 'Button Akun')
            .click("//*[@id='__next']/div[1]/header/div/div/button[2]")
            .assert.elementPresent("//*[@id='bootstrap-input']")
            .setValue("//*[@id='bootstrap-input']", email)
            .click("/html/body/div[2]/div[3]/div/div/div[2]/form/button")
            .saveScreenshot('tests_output/mkalcare.png')
            .end();
 }
}