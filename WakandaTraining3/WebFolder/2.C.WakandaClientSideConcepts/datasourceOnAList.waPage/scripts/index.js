
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var documentEvent = {};	// @document
	var clearMessageButton = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		//Load our array of books.
		bookArr.push({title: "The Stand", author: "Stephen King", publisher: "Doubleday"});
		bookArr.push({title: "It", author: "Stephen King", publisher: "Signet"});
		bookArr.push({title: "The Shining", author: "Stephen King", publisher: "New English Library"});
		bookArr.push({title: "Misery", author: "Stephen King", publisher: "New English Library"});
		bookArr.push({title: "Pet Sematary", author: "Stephen King", publisher: "Pocket Books"});
		bookArr.push({title: "The Green Mile", author: "Stephen King", publisher: "Signet"});
		bookArr.push({title: "Firestarter", author: "Stephen King", publisher: "Signet"});
		bookArr.push({title: "The Tommyknockers", author: "Stephen King", publisher: "Signet"});
		bookArr.push({title: "The Bourne Identity", author: "Robert Ludlum", publisher: "Orion"});
		bookArr.push({title: "The Day of the Jackal", author: "aaaaaa", publisher: "Random House"});
		bookArr.push({title: "Red Storm Rising", author: "Tom Clancey", publisher: "Random House"});
		bookArr.push({title: "Clear and Present Danger", author: "Tom Clancey", publisher: "Random House"});
		bookArr.push({title: "From Russia With Love", author: "Ian Fleming", publisher: "Penguin Books"});
		bookArr.push({title: "Goldfinger", author: "Ian Fleming", publisher: "Penguin Books"});
		bookArr.push({title: "To Kill a Mockingbird", author: "Harper Lee", publisher: "Harper"});
		bookArr.push({title: "Pride and Prejudice ", author: "Jane Austen", publisher: "Oxford University Press"});
		bookArr.push({title: "The Color Purple ", author: "Alice Walker", publisher: "Pocket"});
		waf.sources.bookArr.sync();
		
		//Hide horizontal scrollbar on grid.
		$("#dataGrid1 .waf-dataGrid-body").css("overflow-x","hidden");
		$("#dataGrid2 .waf-dataGrid-body").css("overflow-x","hidden");
	};// @lock

	clearMessageButton.click = function clearMessageButton_click (event)// @startlock
	{// @endlock
		$$('messageText').setValue(' ');
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
	WAF.addListener("clearMessageButton", "click", clearMessageButton.click, "WAF");
// @endregion
};// @endlock
