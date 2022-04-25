const http = require('http');

const server = http.createServer((req,res) => {
    if(req.url === '/'){
        res.end('Welcome to our home page')
        return
    }
    if(req.url === '/about' ){
        res.end("This is a about page")
        return
    }
    res.end(`
        <h1>OOOPS!</h1>
        <p>^^__^^</p>
        <a href="/">home</a>
    `)
    
})

server.listen(5000)