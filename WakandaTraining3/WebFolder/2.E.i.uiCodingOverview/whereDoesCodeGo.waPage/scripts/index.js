
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var button2 = {};	// @button
	var button1 = {};	// @button
	var login2 = {};	// @login
	var documentEvent = {};	// @document
// @endregion// @endlock

// eventHandlers// @lock

	button2.click = function button2_click (event)// @startlock
	{// @endlock
		//Anti-pattern. Don't put business logic on the client.
		/**/
		var okToSave = false;
		
		if (waf.directory.currentUserBelongsTo("Manager")) {
			okToSave = true;
		} else {
			if (waf.sources.task.priority == waf.sources.task.getOldAttributeValue("priority")) {
				okToSave = true;
			} 
		}
		
		if (okToSave) {
			waf.sources.task.save();
		} else {
			$$('messageText').setValue("You do not have permission to update this task.");
			waf.sources.task.collectionRefresh();
		}
		
		/* Best Practice
		// Uncomment code on server for Task onValidate:function().
		waf.sources.task.save({
			onSuccess: function(event) {
				$$('messageText').setValue("Task saved on server.");
			},
			onError: function(error) {
				$$('messageText').setValue(error.error[0].message);
			}
		});
		*/
	};// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock
		waf.sources.task.addNewElement();
		waf.sources.task.serverRefresh();
	};// @lock

	login2.logout = function login2_logout (event)// @startlock
	{// @endlock
		$$('messageText').setValue("");
		waf.sources.task.setEntityCollection();
	};// @lock

	login2.login = function login2_login (event)// @startlock
	{// @endlock
		//Anti-pattern. Don't put login to restrict access to data on the client.
		/**/
		ds.User.find("email = :1", waf.directory.currentUser().userName, {
			onSuccess: function(event) {
				
				if (waf.directory.currentUserBelongsTo('Manager')) {
					waf.sources.task.all();
				} else {
					waf.sources.task.query("owner.ID = :1", event.entity.ID.value);
				}
				
				
				$$('messageText').setValue(event.entity.fullName.value + " logged in.   -- Role: " + event.entity.role.value + ".");
			}
		});
		
		/* Best Practice
		// Uncomment code on server for Task onRestrictingQuery:function().
		waf.sources.task.all();
		*/
	};// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		//Hide horizontal scrollbar on grid.
		$("#dataGrid2 .waf-dataGrid-body").css("overflow-x","hidden");
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("button2", "click", button2.click, "WAF");
	WAF.addListener("button1", "click", button1.click, "WAF");
	WAF.addListener("login2", "logout", login2.logout, "WAF");
	WAF.addListener("login2", "login", login2.login, "WAF");
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
// @endregion
};// @endlock
