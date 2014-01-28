
guidedModel =// @startlock
{
	State :
	{
		methods :
		{// @endlock
			getStates:function(term)
			{// @lock
				var matchStates = ds.State.query("usps == :1", term + '*');
				return matchStates.toArray("usps");
			}// @startlock
		}
	},
	Company :
	{
		collectionMethods :
		{// @endlock
			totalRevenues:function()
			{// @lock
				var totalRevenues = 0;
				this.forEach(function(oneCompany) {
					totalRevenues += oneCompany.revenues;
				});
				
				return totalRevenues;
			}// @startlock
		},
		events :
		{
			onValidate:function()
			{// @endlock
				//Company name must be 3 or more charaters.
				if (this.name.length < 3) {
					return {error: 44, errorMessage: "Company name has a required minimum length of 3 characters."};
				}
			}// @startlock
		}
	},
	Person :
	{
		entityMethods :
		{// @endlock
			entityEcho:function()
			{// @lock
				// echo back current entity info.
				//variable 'this' is reference to the current entity.
				return this.firstName + " " + this.lastName + " lives in " + this.city + ".";
			}// @startlock
		},
		collectionMethods :
		{// @endlock
			deleteSelection:function(theSelectedRows)
			{// @lock
				var currentPersonCollection = this, //"this" contains our current company collection.
					deleteCollection = ds.Person.createEntityCollection();
				//Iterate through the selected rows passed in from the client
				//to populate the delete collection.
				theSelectedRows.forEach(function(rowNum) { //create delete collection
					deleteCollection.add(currentPersonCollection[rowNum]);
				});
				//Return our updated person collection.
				return currentPersonCollection.minus(deleteCollection);	
				
			},// @lock
			collectionEcho:function()
			{// @lock
				//variable 'this' is reference to our collection.
				return "There are " + this.length + " person entities in the server collection."
			},// @lock
			updateAreaCode:function(newAreaCode)
			{// @lock
				//variable 'this' is reference to our collection.
				//   this regex will find area code: \(([^)]*)\)
				this.forEach(function(onePerson) {
					var phoneString = onePerson.phone;
					onePerson.phone = phoneString.replace(/\(([^)]*)\)/, "(" + newAreaCode + ")");
					onePerson.save();
				});  //(408) 555.4323
				
				return this.length + " Person entities on the server updated with new area code (" + newAreaCode +")";
			}// @startlock
		}
	},
	Task :
	{
		methods :
		{// @endlock
			slowdown:function()
			{// @lock
				//Used in Synchronous vs. Asynchronous example.
				var i, j, len1 = 10000, len2 = 7000;
				for (i = 0; i < len1; i++) {
					for (j = 0; j < len2; j++) {}
				}
				
				return "Slow down, you move to fast...";
			},// @lock
			createNewTask:function()
			{// @lock
				// create new Task entity
				return new ds.Task();
			}// @startlock
		},
		events :
		{
			onValidate:function()
			{// @endlock
				/* 12.Where Does Code Go?
				var theClass = this.getDataClass(); //get the dataclass of the entity to save
				var theClassName = theClass.getName(); //get the dataclass name
				var oldEntity = theClass(this.getKey()); //find the same entity on disk
				var sessionRef = currentSession(); // Get session.
				var myCurrentUser = currentUser(); // Get the current user.
				var myUser = ds.User.find("ID = :1", myCurrentUser.ID);
				
				if (!sessionRef.belongsTo("Manager")) {
					if (this.priority != oldEntity.priority) {
						return { error : 9998, errorMessage: "You do not have permission to change the priority."};
					}
				} 
				*/
				

				if (currentUser().name == "default guest") {
					return {error: 99, errorMessage: "You must sign in to create a task."};
				}
			},// @startlock
			onRestrictingQuery:function()
			{// @endlock
				//Task Restricting Query
				
				//Comment out this line if you want to add rules for restricting the task query.
				return ds.Task.all();
				
				/* 12. Where Does Code Go?
				var myCurrentUser = currentUser(), // we get the user of the current session.
					sessionRef = currentSession(), // Get session.
					result;
					
				result = ds.Task.createEntityCollection(); //default to empty collection.
				
				if (sessionRef.belongsTo("Manager")) {
					result = ds.Task.all();
				} else {
					result = ds.Task.query("owner.ID = :1", myCurrentUser.ID);
				}
				
				return result;
				*/
				
			},// @startlock
			onInit:function()
			{// @endlock
				/**/
				var myCurrentUser = currentUser(), // we get the user of the current session.
				myUser = ds.User.find("ID = :1", myCurrentUser.ID);
			
				if ((myCurrentUser !== null) && (myUser !== null)) {//if a user is logged in.		
					this.owner = myUser;
				}
				
				this.dueDate = new Date();
				this.complete = false;
				this.priority = 3;
				
			
			}// @startlock
		}
	},
	User :
	{
		events :
		{
			onValidate:function()
			{// @endlock
				var err, emailRegexStr, isValid;
				//Check the email to see if it's valid.
				if (this.email !== null) {
					emailRegexStr = /^[a-zA-Z0-9.-_]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
					isValid = emailRegexStr.test(this.email);
					if (!isValid) {
						err = {error: 8080, errorMessage: "Email is invalid."};
					}
				}
				
				return err;
			}// @startlock
		},
		methods :
		{// @endlock
			addUser:function(signUpData)
			{// @lock
				var passwordRegexStr, isValid,
				sessionRef = currentSession(), // Get session.
				promoteToken = sessionRef.promoteWith("Admin"), //temporarily make this session Admin level.
				newUser;
				
				if (loginByPassword(signUpData.email, signUpData.password)) {
					return {error: 8020, errorMessage: "You aready have an Account."};
				
				} else {
					//Check if the password is at least 7 characters and one digit.
					if (signUpData.password !== null) {
						passwordRegexStr = /^(?=.*\d)[a-zA-Z\d]{7,}$/;
						isValid = passwordRegexStr.test(signUpData.password);
						if (!isValid) {
							return {error: 8025, errorMessage: "Password must be at least 7 characters."};
						}
					}
					
					//Check if password is enterd the same both times on the Sign Up form.
					if (signUpData.password !== signUpData.verifyPassword) {
						return {error: 8030, errorMessage: "Verification of password failed."};
					}
					
					newUser =  ds.User.createEntity();
			       	newUser.fullName = signUpData.name;  
			       	newUser.email = signUpData.email;    
			       	newUser.password = signUpData.password;
			       	
			       	try {
						newUser.save(); //Save the entity.
						sessionRef.unPromote(promoteToken); //Put the session back to normal.
			       		if (loginByPassword(signUpData.email, signUpData.password)) {
			       			return {error: 8010, errorMessage: "Congratulations on your new account!"};
			       		} else {
			       			return {error: 8090, errorMessage: "I'm sorry but we could not sign you up."};
						}
					}
					catch(e) {
						return {error: 8099, errorMessage: e.messages[1]};
					}
			       	
				} // end if (loginByPassword(signUpData.login, signUpData.password))
				
				
			}// @startlock
		},
		entityMethods :
		{// @endlock
			validatePassword:function(password)
			{// @lock
				var ha1 = directory.computeHA1(this.ID, password);
				return (ha1 === this.HA1Key); //true if validated, false otherwise.
			}// @startlock
		},
		password :
		{
			onSet:function(value)
			{// @endlock
				this.HA1Key = directory.computeHA1(this.ID, value);
			},// @startlock
			onGet:function()
			{// @endlock
				return "*****"; //could also return Null.
			}// @startlock
		}
	}
};// @endlock
