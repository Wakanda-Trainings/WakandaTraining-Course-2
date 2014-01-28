
WAF.onAfterInit = function onAfterInit() {// @lock
	function setMessage(message, type) {
		if (arguments.length == 0) {
			$$("messageText").setTextColor("#333333");
			$$("messageText").setValue();
		} else if (arguments.length == 1) {
			$$("messageText").setTextColor("#333333");
			$$("messageText").setValue(message);
		} else {
			if (type == "error") {
				$$("messageText").setTextColor("red");
			} else {
				$$("messageText").setTextColor("#333333");
			}
			$$("messageText").setValue(message);
		}
	}
	
	function signUp(signUpObj) {
		waf.ds.User.addUser(signUpObj, {
			onSuccess: function(event) {
				//$$("messageText").setValue(event.result.errorMessage);
				if (event.result.error != 8010) {
					setMessage(event.result.errorMessage, "error");
				} else {
					setMessage(event.result.errorMessage);
				}
				
				if (waf.directory.currentUser() !== null) {
					waf.sources.user.all();
			
					signUpObj.name = "";
					signUpObj.email = "";
					signUpObj.password = "";
					signUpObj.verifyPassword = "";
					waf.sources.signUpObj.sync();
					waf.widgets.inputUserName.focus();
					
				} //end - if (waf.directory.currentUser() !== null)
			}
		});
	}
// @region namespaceDeclaration// @startlock
	var documentEvent = {};	// @document
	var inputVerifyPassword = {};	// @textField
	var signUpButton = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		/*
		$(document).on('keyup', 'input', function (e) {
			if ( e.keyCode == 13 ){
				console.log('Event Delegation Works.');
				console.log(e.target);
				signUp(signUpObj);
			}
		});
		*/
	};// @lock

	inputVerifyPassword.keyup = function inputVerifyPassword_keyup (event)// @startlock
	{// @endlock
		/**/
		if ( event.keyCode == 13 ){
			signUp(signUpObj);
		}
		
	};// @lock

	signUpButton.click = function signUpButton_click (event)// @startlock
	{// @endlock
		//Sign Up
		signUp(signUpObj);
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
	WAF.addListener("inputVerifyPassword", "keyup", inputVerifyPassword.keyup, "WAF");
	WAF.addListener("signUpButton", "click", signUpButton.click, "WAF");
// @endregion
};// @endlock
