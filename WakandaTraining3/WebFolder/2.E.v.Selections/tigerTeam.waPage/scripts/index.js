
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var personEvent = {};	// @dataSource
// @endregion// @endlock

// eventHandlers// @lock

	personEvent.onCurrentElementChange = function personEvent_onCurrentElementChange (event)// @startlock
	{// @endlock
		//Let's update our Tiger Team.
		var sel = sources.person.getSelection(); // Let's get the selection from the staff list.
		var col = sources.person.getEntityCollection(); // And we need the entity collection our selection refers to.
		
		//Now let's build a new collection based on the selected staff and display this group in our Tiger team grid.
		col.buildFromSelection(sel, {
			onSuccess: function(event) {
				sources.person1.setEntityCollection(event.entityCollection);
			}
		}); 
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("person", "onCurrentElementChange", personEvent.onCurrentElementChange, "WAF");
// @endregion
};// @endlock
