
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var buttonBlue = {};	// @button
	var buttonGreen = {};	// @button
	var buttonRed = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock
	
	function colorSetEntityCollection(teamDatasource) {
		//Add the selected staff members to the team.
		var sel = sources.person.getSelection(); // Let's get the selection from the staff list.
		var col = sources.person.getEntityCollection(); // And we need the entity collection our selection refers to.
		
		//Now let's build a new collection based on the selected staff and display this group in our Tiger team grid.
		col.buildFromSelection(sel, {
			onSuccess: function(event) {
				teamDatasource.setEntityCollection(event.entityCollection);
			}
		}); 
	}
	
	buttonBlue.click = function buttonBlue_click (event)// @startlock
	{// @endlock
		colorSetEntityCollection(waf.sources.personBlue);
	};// @lock

	buttonGreen.click = function buttonGreen_click (event)// @startlock
	{// @endlock
		colorSetEntityCollection(waf.sources.personGreen);
	};// @lock

	buttonRed.click = function buttonRed_click (event)// @startlock
	{// @endlock
		colorSetEntityCollection(waf.sources.personRed);
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("buttonBlue", "click", buttonBlue.click, "WAF");
	WAF.addListener("buttonGreen", "click", buttonGreen.click, "WAF");
	WAF.addListener("buttonRed", "click", buttonRed.click, "WAF");
// @endregion
};// @endlock
