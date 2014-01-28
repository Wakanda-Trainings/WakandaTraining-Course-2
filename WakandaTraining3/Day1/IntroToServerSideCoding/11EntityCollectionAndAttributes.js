var someCompanies = ds.Company.query('ID < 50'); //get a collection
var someNamesArray = someCompanies.orderBy('name').name; //using an attribute on a collection!
someNamesArray;


var somePeople = ds.Person.query('ID < 50');
var someCompanies = somePeople.employer;
someCompanies.orderBy('name');
