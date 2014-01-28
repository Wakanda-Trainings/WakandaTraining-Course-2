
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var documentEvent = {};	// @document
	var clearMessageButton = {};	// @button
	var aSynchButton = {};	// @button
	var synchButton = {};	// @button
	var helloWorldButton = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		// Add your code here
	};// @lock

	clearMessageButton.click = function clearMessageButton_click (event)// @startlock
	{// @endlock
		$$('messageText').setValue("");
	};// @lock

	aSynchButton.click = function aSynchButton_click (event)// @startlock
	{// @endlock
		ds.Task.slowdown(
		{
			onSuccess: function(event) {
				$$('messageText').setValue(event.result);
			}
		}
		);
	};// @lock

	synchButton.click = function synchButton_click (event)// @startlock
	{// @endlock
		var slowDownResponse = ds.Task.slowdown();
		$$('messageText').setValue(slowDownResponse);
	};// @lock

	helloWorldButton.click = function helloWorldButton_click (event)// @startlock
	{// @endlock
		alert("Hello World");
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
	WAF.addListener("clearMessageButton", "click", clearMessageButton.click, "WAF");
	WAF.addListener("aSynchButton", "click", aSynchButton.click, "WAF");
	WAF.addListener("synchButton", "click", synchButton.click, "WAF");
	WAF.addListener("helloWorldButton", "click", helloWorldButton.click, "WAF");
// @endregion
};// @endlock
