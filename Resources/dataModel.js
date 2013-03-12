// Model

var sondh = {
	userData:null
};

exports.initModel = function()
{
	sondh.userData = {
		userId:null,
		username:null,
		password:null,
		sessionId:null,
		siteList:[
			{
				entityReference:null,
				title:null,
				entityId:null,
				shortDescription:null,
				tools: [
					{
						toolId:null,
						blogId:null
					}
				]
			}
		]
	}
}

//	blogPrivacySetting: 'group',
exports.saveData = function()
{
	//Ti.App.Properties.setString("userData", JSON.stringify(nursApp.userData));	
}

exports.restoreData = function()
{
	//nursApp.userData = JSON.parse(Ti.App.Properties.getString('userData'));
	/*
	if(Ti.App.Properties.hasProperty('userData'))
	{
		Ti.API.info('The property exists');
		return true;
	} else {
		Ti.API.info('The property doesnt exist');
		alert('User data doesnt exist');
		return false;
	}
	*/
}

exports.clearData = function()
{
	sondh.userData = null;
}
