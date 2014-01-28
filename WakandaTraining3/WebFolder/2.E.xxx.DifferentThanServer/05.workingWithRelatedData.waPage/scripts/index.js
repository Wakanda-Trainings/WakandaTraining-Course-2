
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var login1 = {};	// @login
	var assignButton = {};	// @button
	var documentEvent = {};	// @document
// @endregion// @endlock

// eventHandlers// @lock

	login1.logout = function login1_logout (event)// @startlock
	{// @endlock
		waf.sources.task.setEntityCollection();
		waf.sources.user.setEntityCollection();
	};// @lock

	login1.login = function login1_login (event)// @startlock
	{// @endlock
		newTaskObj.due = new Date();
		waf.sources.newTaskObj.sync();
		waf.sources.task.all();
		waf.sources.user.all();
		waf.widgets.textField2.focus();
	};// @lock

	assignButton.click = function assignButton_click (event)// @startlock
	{// @endlock
		//Assign a new task.
		waf.sources.task.addNewElement(); //Create new task entity on our task datasource.
		
		waf.sources.task.title = newTaskObj.title; //Set the title of our new task from the users input.
		waf.sources.task.dueDate = newTaskObj.due; //Set the date of our new task from the users input.
		if (waf.sources.task.priority != "") {
			waf.sources.task.priority = newTaskObj.priority; //Set the priority of our new task from the users input.
		}
		waf.sources.task.owner.set(waf.sources.user); //Assign new task to a stooge.
		
		waf.sources.task.save({
			onSuccess: function(ev2) {
				$$('messageText').setValue("Task " + waf.sources.task.ID + " assigned to " + waf.sources.user.fullName);
				
				newTaskObj.title = '';
				newTaskObj.due = new Date();
				newTaskObj.priority = '';
				waf.sources.newTaskObj.sync();
				waf.widgets.textField2.focus();
			}
		});
			
	};// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		//Hide horizontal scrollbar on grid.
		$("#dataGrid1 .waf-dataGrid-body").css("overflow-x","hidden");
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("login1", "logout", login1.logout, "WAF");
	WAF.addListener("login1", "login", login1.login, "WAF");
	WAF.addListener("assignButton", "click", assignButton.click, "WAF");
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
// @endregion
};// @endlock
