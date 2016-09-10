load("init.js");
load("pages/LoginPage.js");
load("pages/MyNotesPage.js");

testOnAllDevices("My Notes page", "/", function (driver, device) {
	// launch the page and wait until the page is loaded
	var welcomePage = new WelcomePage(driver);
	welcomePage.waitForIt();
	welcomePage.loginButton.click();
	
	//login to the page
	var loginPage = new LoginPage(driver);
	loginPage.waitForIt();
	loginPage.loginAs(TEST_USER);
	
	//Go to My notes page after entering the credentials
	var myNotes = new MyNotesPage(driver);
	myNotes.waitForIt();
	checkLayout(driver, "specs/myNotesPage.gspec", device.tags);
});


