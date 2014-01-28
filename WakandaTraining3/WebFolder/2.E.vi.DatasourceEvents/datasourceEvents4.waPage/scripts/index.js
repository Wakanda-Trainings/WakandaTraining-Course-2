
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var button2 = {};	// @button
	var companyEvent = {};	// @dataSource
	var queryButton = {};	// @button
	var documentEvent = {};	// @document
// @endregion// @endlock

// eventHandlers// @lock

	button2.click = function button2_click (event)// @startlock
	{// @endlock
		waf.sources.company.all();
	};// @lock

	companyEvent.onCollectionChange = function companyEvent_onCollectionChange (event)// @startlock
	{// @endlock
		waf.sources.company.totalRevenues({
					onSuccess: function(event) {
						totalRevenuesVar = event.result;
						waf.sources.totalRevenuesVar.sync();
					}
				});
	};// @lock

	queryButton.click = function queryButton_click (event)// @startlock
	{// @endlock
		waf.sources.company.query("name = :1", searchName + "*", {
			onSuccess: function(event) {
				/*
				waf.sources.company.totalRevenues({
					onSuccess: function(event) {
						totalRevenuesVar = event.result;
						waf.sources.totalRevenuesVar.sync();
					}
				});
				*/
			}
		});
	};// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		//Hide horizontal scrollbar on grid.
		$("#dataGrid1 .waf-dataGrid-body").css("overflow-x","hidden");
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("button2", "click", button2.click, "WAF");
	WAF.addListener("company", "onCollectionChange", companyEvent.onCollectionChange, "WAF");
	WAF.addListener("queryButton", "click", queryButton.click, "WAF");
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
// @endregion
};// @endlock
