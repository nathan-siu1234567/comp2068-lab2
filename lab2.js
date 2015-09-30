var http = require('http');


var url=require('url');

http.createServer(function(req,res){
res.writeHead(200, {'content-type': 'text-plain'});

res.write('<h1>Simple Calculator</h1>')

//get the 3 parameters from querystring
var qs = url.parse(req.url, true).query;
var method = qs.method;
var x = parseFloat(qs.x);
var y= parseFloat(qs.y);

//validate operator and calculate the results

var result =0;

	if(method=="add")
	{
		result =x+y;
		res.write(x + '+' + y + '=' + result);//display results to screen
	}
	else if(method=="subtract")
	{
		result =x-y;
		res.write(x + '-' + y + '=' + result);

	}
	else if(method=="multiply")
	{
		result =x*y;
		res.write(x + '*' + y + '=' + result);

	}
	else if(method=="divide")
	{
		result=x/y;
		res.write(x + '/' + y + '=' + result);

	}
	else
	{
		res.write("please enter a valid method");
	}
	
	return result;




res.end();

}).listen(3000);


