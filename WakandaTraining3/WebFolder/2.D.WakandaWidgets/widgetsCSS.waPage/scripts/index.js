
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var documentEvent = {};	// @document
// @endregion// @endlock
function metroRadioSelect(buttonRef) {
	var theRadioButton = $(buttonRef),
		radioButtonsContainer = theRadioButton.parent();
		
	radioButtonsContainer.children().removeClass('selectedRadio');
	theRadioButton.addClass('selectedRadio');
}
// eventHandlers// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		$('div.metroRadio').children(':last-child').addClass('lastChild');
		$('div.metroRadio').children(':first-child').addClass('firstChild');
		
		$('div.metroRadio').on('click', 'button', function(event) {
			metroRadioSelect(this);
		});
		
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
// @endregion
};// @endlock
