
WAF.onAfterInit = function onAfterInit() {// @lock
	function metroRadioSelect(buttonRef) {
		//var theRadioButton = $(buttonRef.$domNode),
		var theRadioButton = $(buttonRef),
			radioButtonsContainer = theRadioButton.parent();
			
		radioButtonsContainer.children().removeClass('selectedRadio');
		theRadioButton.addClass('selectedRadio');
	}
// @region namespaceDeclaration// @startlock
	var documentEvent = {};	// @document
// @endregion// @endlock

// eventHandlers// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		//Add event handlers for Radio Button Tab
		$('#radioButtonTabContainer').on('click', 'button', function(event) {
				metroRadioSelect(this);
				//console.log($(this).attr('id'));
				switch($(this).attr('id')) {
					case "introRadioTabButton" :
					$$('mainComponent').loadComponent('/components/intro.waComponent');
					break;
					
					case "companyRadioTabButton" :
					$$('mainComponent').loadComponent('/components/company.waComponent');
					break;
					
					case "employeeRadioTabButton" :
					$$('mainComponent').loadComponent('/components/employee.waComponent');
					break;
					
					case "peopleRadioTabButton" :
					$$('mainComponent').loadComponent('/components/people.waComponent');
					break;
					
				} //end - switch
		});
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
// @endregion
};// @endlock
