var http=require('http');
// 1 var dtime=require('./myfirstmodule');
var url =require('url');

http.createServer((req,res)=>{
  res.writeHead(200,{'Content-Type':'text/html'});
 // 1 res.write("the date and time are currently: "+dtime.mydatetime());
 // 2 res.write(req.url);// / yazdırır istersen localhost:8080/summer dersek /summer yazdırır
  3 var q=url.parse(req.url,true).query;// parse ayrıştırmak query sorgu
  3 var txt=q.year+" "+q.month;
  3 res.end( txt);//http://localhost:8080/?year=2017&month=July
  res.end();
}).listen(8080);