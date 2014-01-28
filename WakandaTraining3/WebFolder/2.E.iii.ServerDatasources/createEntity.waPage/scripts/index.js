
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var addNewEntity = {};	// @button
	var cancelButton = {};	// @button
	var saveButton = {};	// @button
	var classMethodButton = {};	// @button
	var addNewElementButton = {};	// @button
	var documentEvent = {};	// @document
	var login1 = {};	// @login
// @endregion// @endlock

// eventHandlers// @lock

	addNewEntity.click = function addNewEntity_click (event)// @startlock
	{// @endlock
		waf.sources.task.newEntity(); //chrome dev tools console: waf.sources.task.getPosition()
		waf.sources.task.serverRefresh({
			onSuccess: function(event) {
				$$('textField2').focus();
			}
		});
		
		//newEntity() : creates a new blank entity in the datasource to which it is applied and 
		//   makes it the new current entity.
	};// @lock

	cancelButton.click = function cancelButton_click (event)// @startlock
	{// @endlock
		//Cancel
		if (waf.sources.task.isNewElement()) {
			waf.sources.task.removeCurrentReference();
		}
		
		//isNewElement() : returns True when the datasource's current element is a new element 
		//   that has not been saved on the server. Otherwise, this method returns False.
		
		//removeCurrentReference() : removes the current element reference from the datasource 
		//   collection on the page.
	};// @lock

	saveButton.click = function saveButton_click (event)// @startlock
	{// @endlock
		waf.sources.task.save({
			onSuccess: function(event) {
				//Did we create the entity with our addNewEntity or custom server method.
				if (waf.sources.task.getPosition() == -1) {
					waf.sources.task.addEntity(waf.sources.task.getCurrentElement());
				}
			}
		});
		
		//addEntity(): adds the entity passed as the parameter to the current entity 
		//   collection of the datasource.
		
		//getCurrentElement() : returns the current element of the datasource.
	};// @lock



	classMethodButton.click = function classMethodButton_click (event)// @startlock
	{// @endlock
		//Create Task on Server (it will run init code).
		//chrome dev tools console: waf.sources.task.getPosition()
		waf.sources.task.createNewTask({
			onSuccess: function(event) {
				waf.sources.task.setCurrentEntity(event.result);
				$$('textField2').focus();
			}
		});
		
	};// @lock



	addNewElementButton.click = function addNewElementButton_click (event)// @startlock
	{// @endlock
		//Create New Task Entity.
		waf.sources.task.addNewElement();
		
		/**/
		//Run init on server.
		waf.sources.task.serverRefresh({
			onSuccess: function(event) {
				$$('textField2').focus();
			}
		});
		
	};// @lock



	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		waf.sources.task.declareDependencies("owner");
		waf.sources.task.setEntityCollection();
	};// @lock



	login1.logout = function login1_logout (event)// @startlock
	{// @endlock
		// Logout
		waf.sources.task.setEntityCollection();
	};// @lock

	login1.login = function login1_login (event)// @startlock
	{// @endlock
		waf.sources.task.all();
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("addNewEntity", "click", addNewEntity.click, "WAF");
	WAF.addListener("cancelButton", "click", cancelButton.click, "WAF");
	WAF.addListener("saveButton", "click", saveButton.click, "WAF");
	WAF.addListener("classMethodButton", "click", classMethodButton.click, "WAF");
	WAF.addListener("addNewElementButton", "click", addNewElementButton.click, "WAF");
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
	WAF.addListener("login1", "logout", login1.logout, "WAF");
	WAF.addListener("login1", "login", login1.login, "WAF");
// @endregion
};// @endlock
