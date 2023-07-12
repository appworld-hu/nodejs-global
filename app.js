const http = require('http')

const server = http.createServer((req,res)=>{
    if( req.url === '/hello' ) {
        global.sayhello = 'Hello'
    }

    res.writeHead(200,{'Content-Type': 'text/html'});

    if( typeof global.sayhello !== 'undefined' ) {
        res.end(global.sayhello)
    } else {
        res.end('No content here...')
    }
})

server.listen(3000, "localhost");