const http = require ('http');
const port = 3001
var fs = require('fs');

const server = http.createServer(function(req, res){
      
    fs.readFile('index.html', function(err, data){
    res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
     return res.end();
    });
})
// .listen(port)

server.listen(port, function(error){
    if (error) {
        console.log('Something went wrong', error)
    }
    else {
        console.log('Server is listeng on port ' + port)
    }
})


// console.log('Hello Ms Galant!')
