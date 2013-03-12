// Add access to utilities
/*
var model = require('/utilities/model');		// Utilties for accessing the model
var laulima = require('/utilities/laulima');	// Utilities for accessing laulima
var error = require('/utilities/error');		// Error responses


nursApp.system = {};

exports.initApp = function()
{
	nursApp.system = {
		lastLaulimaAccess : null,
		activityIndicator :	Ti.UI.createActivityIndicator({
			color: 'white',
			font: {fontFamily:'Helvetica Neue', fontSize:20, fontWeight:'bold'},
			style:Ti.UI.iPhone.ActivityIndicatorStyle.BIG,
			height:'auto',
			width:'auto'
		})
	};
} 

	
exports.isSessionActive = function()
{
	Ti.API.info('checking isSessionActive');
	if(nursApp.system.lastLaulimaAccess != null)
	{
		var timeStamp = new Date();
		var sessionDifference = timeStamp.getTime() - nursApp.system.lastLaulimaAccess;
		
		// If the last session was never stored, or greater than 9 minutes ago, get a new sessionId
		if(sessionDifference > 540000)	
		{
			Ti.API.info('isSessionActive = false');
			return false;
		} 
			else // Use the current sessionId 
		{
			Ti.API.info('isSessionActive = true');
			return true;
		}
	} else {
		Ti.API.info('isSessionActive = false');
		return false;
	}
}

exports.updateSessionTime = function()
{
	Ti.API.info('updating the session time');
	// Store the last time Laulima was accessed successfully
	var timeStamp = new Date();
	nursApp.system.lastLaulimaAccess = timeStamp.getTime();
}
*/