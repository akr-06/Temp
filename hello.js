const http = require('http')

const server = http.createServer((req,res)=>{
    res.write('Welcome')
    console.log(req);
    res.end();
})

//console.log(server);
server.listen(3000);