
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var clearMessageButton = {};	// @button
	var searchButton = {};	// @button
	var documentEvent = {};	// @document
// @endregion// @endlock
function buildCompanyAccordian(qString) {
	//Let's Build An Accordian.
	//Remove all items from our <DL>
	$('#companyDL').children().remove();
	
	//Now let's get our Companies.
	ds.Company.query("name = :1", qString + "*", {
		autoExpand: "employees",
		orderBy: "name",
		onSuccess: function(ev1) {
			$$('messageText').setValue(ev1.entityCollection.length + " Companies Loaded.");
			
			ev1.entityCollection.forEach({
				onSuccess: function(ev2) {	
					//Use jQuery to build the Definition Titles.
					$('<dt>', {
						text: ev2.entity.name.getValue()
					}).appendTo('#companyDL');	
					
					//Get employee collection for current company
					var employeeCollection = ev2.entity.employees.relEntityCollection;
					if (employeeCollection.length > 0) { 
						employeeCollection.forEach({
							onSuccess: function(ev3) {
								var employeeName, address, phone,
								employeeNameDiv, addressDiv, phoneDiv,
								myDD;
								
								employeeName = ev3.entity.firstName.getValue() + " " + ev3.entity.lastName.getValue();
								address = ev3.entity.mailingAddress.getValue();
								phone = ev3.entity.phone.getValue();
								
								var employeeNameDiv = $('<div>', {
									text: employeeName,
									"class" : "nameDiv"
								});
								
								var addressDiv = $('<div>', {
									text: address,
									"class" : "addressDiv"
								});
								
								var phoneDiv = $('<div>', {
									text: phone,
									"class" : "phoneDiv"
								});
								
								var myDD = $('<dd>');
								myDD.append(employeeNameDiv, addressDiv, phoneDiv);
								$('#companyDL').append(myDD);
							}
						}); //end - employeeCollection.forEach
					} //end - employeeCollection.length > 0
					
				}	
			}); //end -- ev1.entityCollection.forEach()
			
			var dd = $('dd');
			dd.hide();
		
		} //end -- onSuccess ev1
	}); //end -- ds.User.query
}

// eventHandlers// @lock

	clearMessageButton.click = function clearMessageButton_click (event)// @startlock
	{// @endlock
		$$('messageText').setValue('');
	};// @lock

	searchButton.click = function searchButton_click (event)// @startlock
	{// @endlock
		if (queryString == "") {
			$$('messageText').setValue("Please enter a search string.");
			$('#companyDL').children().remove();
		} else {
			buildCompanyAccordian(queryString);
		}
	};// @lock
		
	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		//Create event handler for our Definition List Items.
		$('dl').on('click', 'dt', function() {
			$this = $(this);
			$this.nextUntil('dt').slideDown(300);
			$this.siblings('dt').nextUntil('dt').slideUp(300);
		});	
		
		//buildCompanyAccordian();
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("clearMessageButton", "click", clearMessageButton.click, "WAF");
	WAF.addListener("searchButton", "click", searchButton.click, "WAF");
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
// @endregion
};// @endlock
