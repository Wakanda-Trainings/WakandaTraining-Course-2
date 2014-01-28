//cycling through all the dataclasses
var classesAttributes = {};//empty array
for(className in ds.dataClasses)
{
	classesAttributes[className] = [];
	var theClass = ds.dataClasses[className]; //class reference
	for(attribName in theClass.attributes)
	{
		classesAttributes[className].push(attribName);
		var theAttrib = theClass[attribName];
	}
}

classesAttributes;