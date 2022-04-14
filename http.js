//netserver=eventemitter
const http = require('http');
const server = http.createServer((req, res)=>{
    if(req.url === '/'){
    res.write(`this is the root url `);
    res.end();

    }

    if(req.url==='/node/practice'){
    res.write(JSON.stringify( [1, 2, 3]));
    res.end();
    }
});


server.listen(3000);

console.log('Listening to socket 3000');