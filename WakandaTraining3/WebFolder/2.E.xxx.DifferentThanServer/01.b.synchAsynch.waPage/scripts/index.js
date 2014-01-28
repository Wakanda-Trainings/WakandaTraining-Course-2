
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var clearPeopleListButton = {};	// @button
	var loadPeople_forLoop = {};	// @button
	var clearMessageButton = {};	// @button
	var displayCountButton = {};	// @button
	var loadPeopleButton_toArray = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	clearPeopleListButton.click = function clearPeopleListButton_click (event)// @startlock
	{// @endlock
		$('#listPeopleContainer').html('');
		$$('footerText').setValue('');
	};// @lock



	loadPeople_forLoop.click = function loadPeople_forLoop_click (event)// @startlock
	{// @endlock
		var namesArr, count, loopCounter, myHTML = ' ';
		
		ds.Person.all({
			orderBy: "lastName", 
			onSuccess: function(event) {
				count = event.entityCollection.length;
				$$('messageText').setValue("We used a for loop and getValue() to build the list of people.");
				$$('footerText').setValue(count + " People loaded from the server.");
				
				for (loopCounter = 0; loopCounter  < count; loopCounter++) {
					event.entityCollection.getEntity(loopCounter, {
						onSuccess: function(event2) {
							myHTML += '<p>' + event2.entity.firstName.getValue() + " " + event2.entity.lastName.getValue() + '</p>';
						}
					});
				}
				
				$('#listPeopleContainer').html(myHTML);
			}
		});
	};// @lock

	clearMessageButton.click = function clearMessageButton_click (event)// @startlock
	{// @endlock
		$$('messageText').setValue(' ');
	};// @lock



	displayCountButton.click = function displayCountButton_click (event)// @startlock
	{// @endlock
		var vcount = 0;
		
		ds.Person.all({
		    onSuccess: function(event) {
		        vcount = event.entityCollection.length; // we retrieve the size of the entity collection
		        		$$('messageText').setValue("There are " + vcount + " people in the Person class."); //Does not work.

		   	} 
		});
		

	};// @lock



	loadPeopleButton_toArray.click = function loadPeopleButton_toArray_click (event)// @startlock
	{// @endlock
		var namesArr, myHTML = ' ';
		
		ds.Person.all({
			orderBy: "lastName", 
			onSuccess: function(event) {
				$$('messageText').setValue("We used toArray() to build the list of people.");
				$$('footerText').setValue(event.entityCollection.length + " People loaded from the server.");
				event.entityCollection.toArray("firstName, lastName", {
					onSuccess: function(event2) {
						namesArr = event2.result;
						namesArr.forEach(function(onePerson) { 
							myHTML += '<p>' + onePerson.firstName + " " + onePerson.lastName + '</p>';
							
						});
						
						$('#listPeopleContainer').html(myHTML);
					}
				});
			}
		});
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("clearPeopleListButton", "click", clearPeopleListButton.click, "WAF");
	WAF.addListener("loadPeople_forLoop", "click", loadPeople_forLoop.click, "WAF");
	WAF.addListener("clearMessageButton", "click", clearMessageButton.click, "WAF");
	WAF.addListener("displayCountButton", "click", displayCountButton.click, "WAF");
	WAF.addListener("loadPeopleButton_toArray", "click", loadPeopleButton_toArray.click, "WAF");
// @endregion
};// @endlock
