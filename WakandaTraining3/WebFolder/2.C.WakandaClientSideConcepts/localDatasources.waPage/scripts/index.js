
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var clearMessageButton = {};	// @button
	var signUpButton = {};	// @button
	var documentEvent = {};	// @document
	var queryButton = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	clearMessageButton.click = function clearMessageButton_click (event)// @startlock
	{// @endlock
		$$('messageText').setValue(' ');
	};// @lock
	
	function signUp(signUpObj) {
		waf.ds.User.addUser(signUpObj, {
			onSuccess: function(event) {
				$$("messageText").setValue(event.result.errorMessage);
				
				if (waf.directory.currentUser() !== null) {
					waf.sources.user.all();
					
					/**/
					$$('inputUsername').setValue('');
					$$('inputEmailAddress').setValue('');
					$$('inputPassword').setValue('');
					$$('inputVerifyPassword').setValue('');
					
					
					
					//*** Best Pratice ***
					/*
					signUpObj.name = "";
					signUpObj.email = "";
					signUpObj.password = "";
					signUpObj.verifyPassword = "";
					waf.sources.signUpObj.sync();
					*/
					//*** Best Pratice ***
					
				} //end - if (waf.directory.currentUser() !== null)
			} //end - onSuccess
		
		});
	}
	
	
	signUpButton.click = function signUpButton_click (event)// @startlock
	{// @endlock
		//Sign Up
		/**/
		var mySignUpObj = {
			name: $$('inputUsername').getValue(),
			email: $$('inputEmailAddress').getValue(),
			password: $$('inputPassword').getValue(),
			verifyPassword: $$('inputVerifyPassword').getValue()
		};
		
		signUp(mySignUpObj);
		
		
		
		
		//*** Best Pratice ***
		//signUp(signUpObj);
		//*** Best Pratice ***
	};// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		waf.sources.user.all();
		
		//Hide horizontal scrollbar on grid.
		$("#dataGrid2 .waf-dataGrid-body").css("overflow-x","hidden");
	};// @lock

	queryButton.click = function queryButton_click (event)// @startlock
	{// @endlock
		var queryString = $$('textField4').getValue(); //We don't need this line if we create a variable datasource.
		waf.sources.person.query("firstName == :1 || lastName == :1", queryString + "*");
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("clearMessageButton", "click", clearMessageButton.click, "WAF");
	WAF.addListener("signUpButton", "click", signUpButton.click, "WAF");
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
	WAF.addListener("queryButton", "click", queryButton.click, "WAF");
// @endregion
};// @endlock
