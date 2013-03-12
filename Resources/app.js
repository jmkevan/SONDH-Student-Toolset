/*
 * Single Window Application Template:
 * A basic starting point for your application.  Mostly a blank canvas.
 * 
 * In app.js, we generally take care of a few things:
 * - Bootstrap the application with any data we need
 * - Check for dependencies like device type, platform version or network connection
 * - Require and open our top-level UI component
 *  
 */

// Prepopulate data / or clear
var userData = require('dataModel');
var uiPath = "";

// Check dependencies
// Device type
var device = "iPhone";

// Platform Version

// Network connection?

// Open UI based on device type ////////////////
// Create first container window
var mainWindow = Ti.UI.createWindow({
	barColor:'#004b2d'
});

// Determine device, set appropriate uiPath, and open first view
if(device == "iPhone")
{
	uiPath = "/ui/iPhone/";
	// Determine which UI branch we will start in
	var loginMaker = require(uiPath + 'LoginManager');	
	// Create the login window
	var loginManager = loginMaker.createLoginManager(uiPath, mainWindow);
	
	// Add the login window to a nav group
	var navGroup = Ti.UI.iPhone.createNavigationGroup({
		window:loginManager,
	});
}




//navGroup, uiPath, userData

// Add the nav group to the main window
mainWindow.add(navGroup);

// Open the main windwo
mainWindow.open();
