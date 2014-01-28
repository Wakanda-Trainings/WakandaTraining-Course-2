
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var login1 = {};	// @login
	var documentEvent = {};	// @document
	var addButton = {};	// @button
// @endregion// @endlock

function resetQuickAddForm() {
	//Reset our form.
	quickAddFormObj.title = "";
	waf.sources.quickAddFormObj.autoDispatch();
	waf.widgets.titleInput.focus();
	waf.sources.task.setEntityCollection();
}


function quickAdd() {
	//Quick Add Task
	waf.sources.task.addNewElement();
	
	waf.sources.task.serverRefresh({
		onSuccess: function(event) {
			waf.sources.task.title = quickAddFormObj.title; //New entity has been initialized by the server.
			waf.sources.task.save({ 
				onSuccess: function(event2) {
					quickAddFormObj.title = ""; //Reset our form for more input.
					waf.sources.quickAddFormObj.autoDispatch(); //Datasource Manager will create update event for #titleInput.
					waf.widgets.titleInput.focus();
				},
				onError: function(err2) {
					waf.widgets.errorText.setValue(err2.error[0].message);
					resetQuickAddForm();
				}
			});
		},
		
		onError: function(err) {
			waf.widgets.errorText.setValue(err.error[0].message);
			resetQuickAddForm();
		}
	});
	
}


// eventHandlers// @lock

	login1.login = function login1_login (event)// @startlock
	{// @endlock
		waf.sources.task.all();
		waf.widgets.titleInput.focus();
		waf.widgets.errorText.setValue("");
	};// @lock

	login1.logout = function login1_logout (event)// @startlock
	{// @endlock
		waf.sources.task.setEntityCollection();
		waf.widgets.errorText.setValue("");
	};// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		waf.sources.task.declareDependencies("owner");
		waf.sources.task.setEntityCollection();
		waf.widgets.titleInput.focus();
		waf.widgets.errorText.setValue("");
		
		
		//Run Quick Add on Return Key
		$('#titleInput').live('keyup', function (e) {
	   		if ( e.keyCode == 13 ){
	   			quickAdd();
	    	}
		});
	};// @lock

	addButton.click = function addButton_click (event)// @startlock
	{// @endlock
		quickAdd();
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("login1", "login", login1.login, "WAF");
	WAF.addListener("login1", "logout", login1.logout, "WAF");
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
	WAF.addListener("addButton", "click", addButton.click, "WAF");
// @endregion
};// @endlock
