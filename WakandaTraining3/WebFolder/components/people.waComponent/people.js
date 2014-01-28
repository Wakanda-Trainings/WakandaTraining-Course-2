
(function Component (id) {// @lock

// Add the code that needs to be shared between components here

function constructor (id) {

	// @region beginComponentDeclaration// @startlock
	var $comp = this;
	this.name = 'people';
	// @endregion// @endlock
	var badgeCompRef = getHtmlId('badgeComponent');
	
	
	this.load = function (data) {// @lock
		//Hide horizontal scrollbar on grid.
		$(".waf-widget-body.waf-dataGrid-body").css("overflow","hidden");
	// @region namespaceDeclaration// @startlock
	var personEvent = {};	// @dataSource
	// @endregion// @endlock

	// eventHandlers// @lock

	personEvent.onCurrentElementChange = function personEvent_onCurrentElementChange (event)// @startlock
	{// @endlock
		if (this.getCurrentElement()!==null){
			switch($comp.sources.person.city) {
				case "San Jose":
				$$(badgeCompRef).loadComponent('/components/gold.waComponent');
				break;
				
				case "Campbell":
				$$(badgeCompRef).loadComponent('/components/platinum.waComponent');
				break;
				
				default: 
				$$(badgeCompRef).loadComponent('/components/silver.waComponent');
			}
		}
	};// @lock

	// @region eventManager// @startlock
	WAF.addListener(this.id + "_person", "onCurrentElementChange", personEvent.onCurrentElementChange, "WAF");
	// @endregion// @endlock

	};// @lock


}// @startlock
return constructor;
})();// @endlock
