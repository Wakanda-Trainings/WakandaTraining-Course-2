
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var menuItem1 = {};	// @menuItem
	var menuItem2 = {};	// @menuItem
	var updateButton = {};	// @button
	var login1 = {};	// @login
	var documentEvent = {};	// @document
// @endregion// @endlock

// eventHandlers// @lock
	function resetMessage() {
		$$('messageText').setValue("");
		$$('messageContainer').hide();
	}
	
	function showMessage(message) {
		$$('messageText').setValue(message);
		$$('messageContainer').show();
	}
	
	function quickAdd() {
		resetMessage();
		//Add new task.		
		waf.sources.task.addNewElement();
		waf.sources.task.serverRefresh({
			onSuccess: function(event) {
				// the new entity has been initialized by the server
				waf.sources.task.title = quickAddFormObj.title;
				//Now save it.
				waf.sources.task.save({
					onSuccess: function(ev2) {
						waf.sources.task.query("complete = false Order By priority");
						quickAddFormObj.title = "";
						waf.sources.quickAddFormObj.autoDispatch(); 
						waf.widgets.titleInput.focus();
					}
				});
			}
		}); 
	}
	
	
	
	menuItem1.click = function menuItem1_click (event)// @startlock
	{// @endlock
		//Refresh To Do tasks.
		waf.sources.task.query("complete = false Order By priority");
		resetMessage();
	};// @lock

	menuItem2.click = function menuItem2_click (event)// @startlock
	{// @endlock
		//Refresh completed tasks.
		waf.sources.completedTask.query("complete = true Order By dueDate");
		resetMessage();
	};// @lock

	updateButton.click = function updateButton_click (event)// @startlock
	{// @endlock
		//Update
		waf.sources.task.save({
			onSuccess: function(event) {
				waf.sources.task.query("complete = false Order By priority");
				if (event.dataSource.complete != false) {
					showMessage('"' + event.dataSource.title + '"' + ' has been moved to Completed.');
				}
			}
		});
	};// @lock

	login1.login = function login1_login (event)// @startlock
	{// @endlock
		waf.widgets.titleInput.focus();
		waf.sources.task.query("complete = false Order By priority");
		$$('updateButton').show();
	};// @lock

	login1.logout = function login1_logout (event)// @startlock
	{// @endlock
		$$('updateButton').hide();
		resetMessage();
		waf.sources.task.setEntityCollection();
	};// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		waf.sources.task.declareDependencies("owner");
		waf.sources.task.setEntityCollection();
		
		$$('updateButton').hide();
		resetMessage();
		
		//Run Quick Add on Return Key
		$('#titleInput').live('keyup', function (e) {
	   		if ( e.keyCode == 13 ){
	   			quickAdd();
	    	}
		});
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("menuItem1", "click", menuItem1.click, "WAF");
	WAF.addListener("menuItem2", "click", menuItem2.click, "WAF");
	WAF.addListener("updateButton", "click", updateButton.click, "WAF");
	WAF.addListener("login1", "login", login1.login, "WAF");
	WAF.addListener("login1", "logout", login1.logout, "WAF");
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
// @endregion
};// @endlock
