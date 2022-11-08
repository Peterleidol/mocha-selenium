
LT_USERNAME = process.env.LT_USERNAME || "duylnfs90122";
LT_ACCESS_KEY = process.env.LT_ACCESS_KEY || "UY81Eo3Pcd7Ee5sw8ysEMyxKdXvu8ak55CZL6Bd7m7Lto3z4CH";

exports.capabilities = {
  'build': 'Mocha-Selenium-Sample', //Build name
  'name': 'Your Test Name', // Test name
  'platform':'Windows 10', // OS name
  'browserName': 'chrome', // Browser name
  'version': 'latest', // Browser version
  'visual': false,  // To take step by step screenshot
  'network':false,  // To capture network Logs
  'console':false, // To capture console logs.
  'tunnel': false // If you want to run the localhost than change it to true
  };