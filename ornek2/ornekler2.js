var http = require('http');
var fs = require('fs');
const { Console } = require('console');



http.createServer(function (req, res) {
 
// readFile dosya okur
  fs.readFile('demofile1.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(3000);

// appendfile dosya ekler yoksa oluşturur
fs.appendFile('demofile2.txt','hello content',(err)=>{
    if(err) throw err;
    console.log('saved');
});

// open dosya açar yoksa oluşturur
fs.open('demofile3.txt','w',(err)=>{
    if(err) throw err;
    console.log('saved');
});

//dosya Sistemi modülü, dosyaları güncellemek için yöntemlere sahiptir:
//fs.appendFile()
//fs.writeFile()

fs.writeFile('demofile3.txt','hello',(err)=>{
    if(err) throw err;
    console.log('saved');
});

fs.appendFile('demofile2.txt','this is my text',(err)=>{
    if(err) throw err;
    console.log('updated');
});



// unlink dosya silme
fs.unlink('demofile3.txt',(err)=>{
    if(err) throw err;
    console.log('deleted');
});

// rename dosya adını değiştirme
fs.rename('demofile1.html','demofile2.html',(err)=>{
    if(err) throw err;
    console.log('rename');
});