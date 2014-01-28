
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var collectionEcho = {};	// @button
	var entityEchoButton = {};	// @button
	var documentEvent = {};	// @document
	var updateAreaCodeButton = {};	// @button
	var textField1 = {};	// @textField
	var clearMessageButton = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	collectionEcho.click = function collectionEcho_click (event)// @startlock
	{// @endlock
		waf.sources.person.collectionEcho({
			onSuccess: function(event) {
				$$('messageText').setValue(event.result);
			}
		});
	};// @lock

	entityEchoButton.click = function entityEchoButton_click (event)// @startlock
	{// @endlock
		waf.sources.person.entityEcho({
			onSuccess: function(event) {
				$$('messageText').setValue(event.result);
			}
		});
	};// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		//Hide horizontal scrollbar on grid.
		$("#dataGrid1 .waf-dataGrid-body").css("overflow-x","hidden");
	};// @lock

	updateAreaCodeButton.click = function updateAreaCodeButton_click (event)// @startlock
	{// @endlock
		//Let's update the area codes for our current person collection.
		waf.sources.person.updateAreaCode(newAreaCodeVar, {
			onSuccess: function(event) {
				$$('messageText').setValue(event.result);
				waf.sources.person.collectionRefresh();
			}
		});
	};// @lock

	textField1.keyup = function textField1_keyup (event)// @startlock
	{// @endlock
		waf.sources.person.query("city == :1", $$('textField1').getValue() + '*');
	};// @lock

	clearMessageButton.click = function clearMessageButton_click (event)// @startlock
	{// @endlock
		$$('messageText').setValue("");
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("collectionEcho", "click", collectionEcho.click, "WAF");
	WAF.addListener("entityEchoButton", "click", entityEchoButton.click, "WAF");
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
	WAF.addListener("updateAreaCodeButton", "click", updateAreaCodeButton.click, "WAF");
	WAF.addListener("textField1", "keyup", textField1.keyup, "WAF");
	WAF.addListener("clearMessageButton", "click", clearMessageButton.click, "WAF");
// @endregion
};// @endlock
