//ds is a global variable managed by wakanda
var myDataStore = ds; //ds is short for data store

var myDataClass = ds.Person; //each dataclass is a property

var allPeople = myDataClass.all(); //allPeople is an entity collection

var onePerson = allPeople[45]; //onePerson is an entity

