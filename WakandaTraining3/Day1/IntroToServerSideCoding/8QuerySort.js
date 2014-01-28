var qString = 'customerEmployerName == :1 order by orderDate desc';
var customerName = 'Z*';

var x = ds.Order.query(qString, customerName);

x;