var assert = require("assert"),
  webdriver = require("selenium-webdriver"),
  conf_file = process.argv[3] || "conf/single.conf.js";

var capabilities = require("../" + conf_file).capabilities;

var buildDriver = function(caps) {
  return new webdriver.Builder()
    .usingServer(
      "http://" +
        LT_USERNAME +
        ":" +
        LT_ACCESS_KEY +
        "@hub.lambdatest.com/wd/hub"
    )
    .withCapabilities(caps)
    .build();
};

capabilities.forEach(function(caps) {
 
  describe("Mocha Todo Test " + caps.browserName, function() {
    var driver;
    this.timeout(0);

    beforeEach(function(done) {
      caps.name = this.currentTest.title;
      driver = buildDriver(caps);
      done();
    });
    it("should login with valid credentials + logout and verify logout alert message", function(done) {
      driver.get("https://the-internet.herokuapp.com/login").then(function() {
          driver.findElement(webdriver.By.name('username')).sendKeys('tomsmith').then(function(){
              console.log("Successfully set vaule the username.");
          });
  
          driver.findElement(webdriver.By.name('password')).sendKeys('SuperSecretPassword!').then(function(){
              console.log("Successfully set vaule the password.");
            });
  
          driver.findElement(webdriver.By.className('fa fa-2x fa-sign-in')).click().then(function(){
                  console.log("Successfully clicked login.");
          driver.findElement(webdriver.By.className('button secondary radius')).click().then(function(){
                  console.log("Successfully clicked login.");
            });
          });
      });
    });
  
    afterEach(function(done) {
      if (this.currentTest.isPassed()) {
        driver.executeScript("lambda-status=passed");
      } else {
        driver.executeScript("lambda-status=failed");
      }
      driver.quit().then(function() {
        done();
      });
    });
  });
});
