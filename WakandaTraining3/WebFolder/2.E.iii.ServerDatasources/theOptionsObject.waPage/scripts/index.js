
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var autoExpandButton = {};	// @button
	var noAutoExpandButton = {};	// @button
	var menuItem6 = {};	// @menuItem
	var loadPersonButtonOrderBy = {};	// @button
	var allPersonButton = {};	// @button
	var unloadPersonButton = {};	// @button
	var paramsQueryButton = {};	// @button
	var menuItem4 = {};	// @menuItem
	var refreshCompanyColButton = {};	// @button
	var menuItem3 = {};	// @menuItem
	var menuItem1 = {};	// @menuItem
	var menuItem2 = {};	// @menuItem
	var unloadGridButton = {};	// @button
	var loadPageButton = {};	// @button
	var saveCompanyButton = {};	// @button
	var documentEvent = {};	// @document
	var queryButton = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	autoExpandButton.click = function autoExpandButton_click (event)// @startlock
	{// @endlock
		ds.Company.all({autoExpand: "employees"});
	};// @lock

	noAutoExpandButton.click = function noAutoExpandButton_click (event)// @startlock
	{// @endlock
		//autoExpand
		ds.Company.all();
	};// @lock

	menuItem6.click = function menuItem6_click (event)// @startlock
	{// @endlock
		waf.sources.person.setEntityCollection();
	};// @lock

	loadPersonButtonOrderBy.click = function loadPersonButtonOrderBy_click (event)// @startlock
	{// @endlock
		//orderBy Tab
		waf.sources.person.all({orderBy: waf.widgets.combobox2.getValue()});
	};// @lock

	allPersonButton.click = function allPersonButton_click (event)// @startlock
	{// @endlock
		//params Tab
		waf.sources.person.all();
	};// @lock

	unloadPersonButton.click = function unloadPersonButton_click (event)// @startlock
	{// @endlock
		//params Tab
		waf.sources.person.setEntityCollection();
	};// @lock

	paramsQueryButton.click = function paramsQueryButton_click (event)// @startlock
	{// @endlock
		//params Tab
		waf.sources.person.query("city == :1 || city == :2 || city == :3", {
			params: [cityNamesObj.firstCity, cityNamesObj.secondCity, cityNamesObj.thirdCity],
			onSuccess: function(event) {
				$$('messageText').setValue("Your query returned " + event.dataSource.length + " People.");
			}
		});
	};// @lock

	menuItem4.click = function menuItem4_click (event)// @startlock
	{// @endlock
		waf.sources.company.setEntityCollection();
	};// @lock

	refreshCompanyColButton.click = function refreshCompanyColButton_click (event)// @startlock
	{// @endlock
		//onError Tab
		waf.sources.company.collectionRefresh();
	};// @lock

	menuItem3.click = function menuItem3_click (event)// @startlock
	{// @endlock
		//pageSize Tab
		$$('messageText').setValue("");
	};// @lock

	menuItem1.click = function menuItem1_click (event)// @startlock
	{// @endlock
		//onSuccess Tab
		$$('messageText').setValue("");
	};// @lock

	menuItem2.click = function menuItem2_click (event)// @startlock
	{// @endlock
		//onError Tab
		$$('messageText').setValue("");
		waf.sources.company.all();
	};// @lock

	unloadGridButton.click = function unloadGridButton_click (event)// @startlock
	{// @endlock
		waf.sources.person.setEntityCollection();
		waf.sources.person.collectionRefresh();
	};// @lock

	loadPageButton.click = function loadPageButton_click (event)// @startlock
	{// @endlock
		waf.sources.person.all({
			pageSize: pageSize
		});
	};// @lock

	saveCompanyButton.click = function saveCompanyButton_click (event)// @startlock
	{// @endlock
		waf.sources.company.addNewElement();
		waf.sources.company.name = newCompanyName;
		
		waf.sources.company.save({
			onSuccess: function(event) {
				$$('messageText').setValue("Company with ID " + event.dataSource.ID + " saved on the server.");
			},
			onError: function(error) {
				$$('messageText').setValue(error.error[0].message);
			}
		});
		
	};// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		//Hide horizontal scrollbar on grid.
		$("#dataGrid1 .waf-dataGrid-body").css("overflow-x","hidden");
		$("#dataGrid4 .waf-dataGrid-body").css("overflow-x","hidden");
		$("#dataGrid2 .waf-dataGrid-body").css("overflow-x","hidden");
		$("#dataGrid3 .waf-dataGrid-body").css("overflow-x","hidden");
		$("#dataGrid6 .waf-dataGrid-body").css("overflow-x","hidden");
	};// @lock

	queryButton.click = function queryButton_click (event)// @startlock
	{// @endlock
		waf.sources.company.query("name = :1", queryString + "*", {
			onSuccess: function(event) {
				$$('messageText').setValue("Your query returned " + event.dataSource.length + " Companies.");
			}
		});
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("autoExpandButton", "click", autoExpandButton.click, "WAF");
	WAF.addListener("noAutoExpandButton", "click", noAutoExpandButton.click, "WAF");
	WAF.addListener("menuItem6", "click", menuItem6.click, "WAF");
	WAF.addListener("loadPersonButtonOrderBy", "click", loadPersonButtonOrderBy.click, "WAF");
	WAF.addListener("allPersonButton", "click", allPersonButton.click, "WAF");
	WAF.addListener("unloadPersonButton", "click", unloadPersonButton.click, "WAF");
	WAF.addListener("paramsQueryButton", "click", paramsQueryButton.click, "WAF");
	WAF.addListener("menuItem4", "click", menuItem4.click, "WAF");
	WAF.addListener("refreshCompanyColButton", "click", refreshCompanyColButton.click, "WAF");
	WAF.addListener("menuItem3", "click", menuItem3.click, "WAF");
	WAF.addListener("menuItem1", "click", menuItem1.click, "WAF");
	WAF.addListener("menuItem2", "click", menuItem2.click, "WAF");
	WAF.addListener("unloadGridButton", "click", unloadGridButton.click, "WAF");
	WAF.addListener("loadPageButton", "click", loadPageButton.click, "WAF");
	WAF.addListener("saveCompanyButton", "click", saveCompanyButton.click, "WAF");
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
	WAF.addListener("queryButton", "click", queryButton.click, "WAF");
// @endregion
};// @endlock
