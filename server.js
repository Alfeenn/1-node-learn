const app = require('http')
const get=app.createServer();
get((req,res)=>{
    if(req.url==='/'){
        console.log('request event')
        res.end('This is the requested url')
    }
})
get.listen(3000,()=>{
    console.log('listen to port 3000...')
})
