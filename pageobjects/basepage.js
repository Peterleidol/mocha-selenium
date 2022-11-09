var webdriver = require('selenium-webdriver');
const {By} = require('selenium-webdriver');
var driver = new webdriver.Builder().forBrowser('chrome').build();
driver.manage().setTimeouts({implicit: (10000)});

class BasePage{
    constructor(){
        buildDriver(caps) = driver;
    }

    go_to_url(theURL){
        driver.get(theURL);
    }

    entertxtUsername(username, tomsmith){
        driver.findElement(By.name(username)).sendKey(tomsmith);
    }
    entertxtPassword(password,SuperSecretPassword){
        driver.findElement(By.name(password)).sendKeys(SuperSecretPassword);

    }
    clickByClass(radius){
        driver.findElement(By.className(radius)).click();
    }

    sleep(seconds){
        var e = new Date().getTime() + (seconds * 1000);
        while (new Date().getTime() <= e) {}
    }
}


module.exports = BasePage;