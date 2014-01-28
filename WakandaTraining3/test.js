

// A S S I G N   A   T A S K
/*
if (loginByPassword("moe@3stooges.com", "moe")) {
	var curly = ds.User.find("email = :1", "curly@3stooges.com");

	var oneTask = new ds.Task({title: "dave", owner: curly});
	oneTask.save();

	oneTask
}
*/

//L E T ' S   Q U E R Y


//var states = ds.State.all();
//states

//var allThePeople = ds.Person.query("lastName = :1", "r*"); //order by firstName
//allThePeople  //.toArray("lastName, phone");  //[9] 

//var theGuy = ds.Person(14985);
//theGuy //.employer.name //.coWorkers

//var firstGuy = ds.Person.find("lastName = :1", "r*");
//firstGuy

//var tomAndJerry = ds.Person.query("firstName = :1 || firstName = :2", "tom", "jerry");
//tomAndJerry

//Using Regular Expressions
//var nineToTen = ds.Person.query("lastName =% :1", "^[a-zA-Z]{9,10}$"); //Names must be 9 - 10 chars.
//nineToTen//.length

//var daveCompany = ds.Company.query("employees.firstName = :1", "Dave");
//daveCompany //[11].employees //.queryPlan




//var items = ds.OrderItem.all();
//items.length


//var companies = ds.Company.query("employees.city = :1", "M*");
//companies.length

//var allCompanies = ds.Company.all();
//allCompanies.length

//var people = ds.Person.all() //.orderBy("firstName");
//var people = ds.Person.query("mailingAddress = :1", "*Los Gatos*");
//people.updateAreaCode("999");
//people

/**/
//var x = ds.Company.query('name = "F*"'); //Find some companies
//x = x.employees; //show their employees
//x = x.purchaseOrders; //show their orders
//x = x.items; //show the orders items, about 700
//x = x.product; //show the items products, about 600


//ds.Product.all()


//Remove all tasks.
//var tasks = ds.Task.all();
//tasks.remove();

//var users = ds.User.all();
//users


//var moe = ds.User({ID: "01B67D69F38D4D8FA2B240BECEA0FE46"});
//moe.email = "moe@3stooges.com";
//moe.save();

//var larry = ds.User({ID: "4CF4BD08BE4C4CD28F3E137486E0E843"});
//larry.email = "larry@3stooges.com";
//larry.save();

//var curly = ds.User({ID: "55EC4808933E450CAB2FE5EA20CB09C5"});
//curly.email = "curly@3stooges.com";
//curly.save();



//Create our users.
/*
var admin = new ds.User({
	login: "admin", 
	password: "a", 
	fullName: "Administrator"
});
admin.save();


var larry = new ds.User({
	login: "larry", 
	password: "larry", 
	fullName: "Larry Fine" 
});
larry.save();

var moe = new ds.User({
	login: "moe", 
	password: "moe", 
	fullName: "Moe Howard" 
});
moe.save();

var curly = new ds.User({
	login: "curly", 
	password: "curly", 
	fullName: "Curly Howard" 
});
curly.save();

var users = ds.User.all();
users
*/

//var users = ds.User.query("role == null");
//users.remove()


//ds.User("A4B1E1BD92B641328177B27446483948")
//2013781011934DEF894915F650B10C12
//AAB5852B94BB4FD5887BBD8599FF5EA1
//FF14E14B69CC47EF80C8B47EEE65F197
//150612F084F44634AC32E8ADC7FFB5C2
//FC0FE6A41D9147BEA57EDC30A43E42F2
//FC0FE6A41D9147BEA57EDC30A43E42F2
//5791332EE2CE46DA845381BC900AE7A8
//6C00FDF7E7074184820A5863A95DA07F
//668C0B4F0D194F79AD4FFCEB202160EC



