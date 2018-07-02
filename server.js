
const http = require('http'); //let me use this module (require('http')
const fs = require('fs');

//method
http.createServer(function (req, res) {
  fs.readFile('demofile.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);//send html data as a repsonse
    res.end();
  });
}).listen(8000); //server running on port 8000


// //simpletest server
// http.createServer(function (req, res) {
//
// }).listen(8000);

//control 'c' KILLS SERVER/TERMINAL
