
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var collectionEchoButton = {};	// @button
	var entityEchoButton = {};	// @button
	var updateAreaCodeButton = {};	// @button
	var clearMessageButton = {};	// @button
	var deleteSelectionButton = {};	// @button
	var textField1 = {};	// @textField
	var documentEvent = {};	// @document
// @endregion// @endlock

// eventHandlers// @lock

	collectionEchoButton.click = function collectionEchoButton_click (event)// @startlock
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

	clearMessageButton.click = function clearMessageButton_click (event)// @startlock
	{// @endlock
		$$('messageText').setValue(' ');
	};// @lock

	deleteSelectionButton.click = function deleteSelectionButton_click (event)// @startlock
	{// @endlock
		waf.sources.person.deleteSelection($$('dataGrid1').getSelectedRows(), {
			onSuccess: function(event) {
				$$('messageText').setValue('The selected rows were removed on the server.');
				waf.sources.person.setEntityCollection(event.result);
			}
		});
	};// @lock

	textField1.keyup = function textField1_keyup (event)// @startlock
	{// @endlock
		waf.sources.person.query("city == :1", $$('textField1').getValue() + '*');
	};// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		//enable autocomplete for state input field.
		//Let's use jQuery UI autocomplete.
		
		//Simple example to show setup.
		//$('#statesInput').autocomplete({source: ["Alaska", "Alabama", "Arizona", "Maine", "Montana", "Oregon", "Texas", "Vermont", "Washington"]});
		

		//Source property can point to a callback function.
		/*
		$('#statesInput').autocomplete({source: function(request, response) {
			response(["Alaska", "Alabama", "Arizona", "Maine", "Montana", "Oregon", "Texas", "Vermont", "Washington"]);
		}});
		*/
		
		//But using a dataclass method is best. 
		/**/
		$('#statesInput').autocomplete({
			source: function(request, response) {	
				ds.State.getStates(request.term, {
					onSuccess: function(event) {
						response(event.result.map(function(state) {return state.usps;}));
					}
				});
			}
		});
		
		
		//Hide horizontal scrollbar on grid.
		$("#dataGrid1 .waf-dataGrid-body").css("overflow-x","hidden");
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("collectionEchoButton", "click", collectionEchoButton.click, "WAF");
	WAF.addListener("entityEchoButton", "click", entityEchoButton.click, "WAF");
	WAF.addListener("updateAreaCodeButton", "click", updateAreaCodeButton.click, "WAF");
	WAF.addListener("clearMessageButton", "click", clearMessageButton.click, "WAF");
	WAF.addListener("deleteSelectionButton", "click", deleteSelectionButton.click, "WAF");
	WAF.addListener("textField1", "keyup", textField1.keyup, "WAF");
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
// @endregion
};// @endlock
