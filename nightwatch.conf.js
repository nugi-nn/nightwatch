require('dotenv').config();

module.exports = {
  "src_folders" : ["tests"],

  "webdriver" : {
    "start_process": true,
    "server_path": "./node_modules/chromedriver/lib/chromedriver/chromedriver.exe",
    "port": 9515
  },


  "test_settings" : {
    "default" : {
      "screenshots" : {
        "enabled" : true,
        "on_failure" : true,
        "on_error" : true,
        "path" : "tests_output/screenshots" 
      },
      "desiredCapabilities": {
        "browserName" : "chrome",
        "javascriptEnabled" : true,
        "acceptSslCerts" : true,
        "chromeOptions": {
        "args": ["disable-gpu", "no-sandbox", "start-maximized", "--window-size=1920,1200"]
      }

    }
    }
  }
};