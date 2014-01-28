
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var textField3 = {};	// @textField
	var textField2 = {};	// @textField
	var documentEvent = {};	// @document
	var textField1 = {};	// @textField
	var allEntitiesButton = {};	// @button
// @endregion// @endlock
function clearSearchInputs(namesArr) {
	namesArr.forEach(function(name) {
		queryObj[name] = "";
		waf.sources.queryObj.sync();
	});
}
// eventHandlers// @lock

	textField3.change = function textField3_change (event)// @startlock
	{// @endlock
		//City query.
		waf.sources.person.query("city = :1", queryObj.city + "*", {
			onSuccess: function(event) {
				$$('messageText').setValue(event.dataSource.length + ' person entities loaded from the server.');
				clearSearchInputs(["firstName", "lastName"]);
			}
		});
		
	};// @lock

	textField2.change = function textField2_change (event)// @startlock
	{// @endlock
		//Last name query.
		waf.sources.person.query("lastName = :1", queryObj.lastName + "*", {
			onSuccess: function(event) {
				$$('messageText').setValue(event.dataSource.length + ' person entities loaded from the server.');
				clearSearchInputs(["firstName", "city"]);
			}
		});
	};// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		//Hide horizontal scrollbar on grid.
		$("#dataGrid1 .waf-dataGrid-body").css("overflow-x","hidden");
	};// @lock

	textField1.change = function textField1_change (event)// @startlock
	{// @endlock
		//First name query
		waf.sources.person.query("firstName = :1", queryObj.firstName + "*", {
			onSuccess: function(event) {
				$$('messageText').setValue(event.dataSource.length + ' person entities loaded from the server.');
				clearSearchInputs(["lastName", "city"]);
			}
		});
	};// @lock

	allEntitiesButton.click = function allEntitiesButton_click (event)// @startlock
	{// @endlock
		waf.sources.person.all({
			onSuccess: function(event) {
				$$('messageText').setValue(event.dataSource.length + ' person entities loaded from the server.');
				clearSearchInputs(["firstName", "lastName", "city"]);
			}
		});
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("textField3", "change", textField3.change, "WAF");
	WAF.addListener("textField2", "change", textField2.change, "WAF");
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
	WAF.addListener("textField1", "change", textField1.change, "WAF");
	WAF.addListener("allEntitiesButton", "click", allEntitiesButton.click, "WAF");
// @endregion
};// @endlock
