
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var button1 = {};	// @button
	var button7 = {};	// @button
	var button6 = {};	// @button
	var button4 = {};	// @button
	var documentEvent = {};	// @document
// @endregion// @endlock

// eventHandlers// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock
		waf.sources.person.distinctValues("city", {
			onSuccess: function(event) {
				console.log(event.result);
			}
		});
	};// @lock

	button7.click = function button7_click (event)// @startlock
	{// @endlock
		waf.sources.person.selectNext();
	};// @lock

	button6.click = function button6_click (event)// @startlock
	{// @endlock
		waf.sources.person.selectPrevious();
	};// @lock

	button4.click = function button4_click (event)// @startlock
	{// @endlock
		/*** Anti-pattern ***/
		waf.sources.person.query("lastName = :1", lastName + "*");
		waf.sources.person.filterQuery("firstName = :1", firstName + "*");
		
		
		
		/*** Best Practice 
		waf.sources.person.query("lastName = :1", lastName + "*", {
			onSuccess: function(event) {
				waf.sources.person.filterQuery("firstName = :1", firstName + "*");
				//The filterQuery( ) method is the same as the query( ) method except that it restricts 
				//   the search to the current entity collection of the datasource to which it is applied 
				//(and not all the entities of the datastore class).
			}
		});
		*/
		
		//waf.sources.person.query("lastName = :1 OR firstName = :2", lastName + '*', firstName + '*');
		//waf.sources.person.query("lastName = :1 And firstName = :2", lastName + '*', firstName + '*');
		
	};// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		//waf.sources.person.all();
		$("#dataGrid1 .waf-dataGrid-body").css("overflow-x","hidden");
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("button1", "click", button1.click, "WAF");
	WAF.addListener("button7", "click", button7.click, "WAF");
	WAF.addListener("button6", "click", button6.click, "WAF");
	WAF.addListener("button4", "click", button4.click, "WAF");
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
// @endregion
};// @endlock
