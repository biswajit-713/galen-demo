load("init.js");
load("pages/LoginPage.js");


testOnAllDevices("Login page", "/", function (driver, device) {

    logged("Check layout of Login page", function () {
    
    	// create welcome page object
        var welcomePage = new WelcomePage(driver);
        
        /*wait for the page to load. The load will wait until all primary objects are 
        are loaded*/
        welcomePage.waitForIt();
        welcomePage.loginButton.click();

		// wait for the login page to load
        var loginPage = new LoginPage(driver);
        loginPage.waitForIt();

		// check login page layout
        checkLayout(driver, "specs/loginPage.gspec", device.tags);
        
    });

});
