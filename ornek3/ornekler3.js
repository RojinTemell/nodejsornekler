// url modülü bir web adresini okunabilir parçalara böler
// ayrıştırmak için url.parse() nesnesini döndürür


var url= require('url');
var adr='http://localhost:8080/default.htm?year=2017&month=february';
var q=url.parse(adr,true);

console.log(q.host);// 'localhost::8080' döndürür
console.log(q.pathname)// '/default.htm' döndürür
console.log(q.search);// '?year=2017&month=february' döndürür

var qdata=q.query;// bir nesne döndürür { year:2017,month:february}
console.log(qdata.month);//  'february' döndürür