
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var queryString = {};	// @textField
// @endregion// @endlock

// eventHandlers// @lock

	queryString.keyup = function queryString_keyup (event)// @startlock
	{// @endlock
		waf.sources.company.query("name == :1", $$('queryString').getValue() + "*");
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("queryString", "keyup", queryString.keyup, "WAF");
// @endregion
};// @endlock
