
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var populateArray = {};	// @button
	var clearCompanyListButton = {};	// @button
	var clearMessageButton = {};	// @button
	var loadCompanyButton = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	populateArray.click = function populateArray_click (event)// @startlock
	{// @endlock
		var arrCompanyName = [];
		ds.Company.all({onSuccess: function(event) {	
			event.entityCollection.forEach({onSuccess: function(event2) {
		    	arrCompanyName.push(event2.entity.name.getValue());
		   	}});
		   	console.log(arrCompanyName);
		}});
	};// @lock

	clearCompanyListButton.click = function clearCompanyListButton_click (event)// @startlock
	{// @endlock
		$('#listCompanyContainer').html('');
		$$('footerText').setValue('');
	};// @lock

	clearMessageButton.click = function clearMessageButton_click (event)// @startlock
	{// @endlock
		$$('messageText').setValue(' ');
	};// @lock

	loadCompanyButton.click = function loadCompanyButton_click (event)// @startlock
	{// @endlock
		//Load Company names into display container.
		var myHTML = ' ';
		
		ds.Company.all({orderBy:"name", 
			onSuccess:function(event) {	
				$$('footerText').setValue(event.entityCollection.length + " Companies loaded from the server.");
				event.entityCollection.forEach({
					onSuccess: function(event2) {
						myHTML += '<p>' + event2.entity.name.getValue() + '</p>';
					}
				});
				
				$('#listCompanyContainer').html(myHTML);
			}
		});
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("populateArray", "click", populateArray.click, "WAF");
	WAF.addListener("clearCompanyListButton", "click", clearCompanyListButton.click, "WAF");
	WAF.addListener("clearMessageButton", "click", clearMessageButton.click, "WAF");
	WAF.addListener("loadCompanyButton", "click", loadCompanyButton.click, "WAF");
// @endregion
};// @endlock
