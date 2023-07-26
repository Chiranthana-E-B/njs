const { Console } = require('console');

const fs = require('fs');
const { fstat } = require('graceful-fs');

const http = require('http');
const port = process.env.PORT || 3000;
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    console.log(req.url);

    if(req.url == '/'){
        res.statusCode = 200;
        const data = fs.readFileSync('index.html');
        res.end(data.toString());
    }

    else if(req.url == '/about'){
        res.statusCode = 200;
        res.end('<h1> this is about page </h1>');
    }

    else if(req.url == '/hello'){
        res.statusCode = 200;
        res.end('<h1> This is Coding with nodejs </h1> <p> hey are you interested in nodejs please tell me! </p>');
    }
    
    
    else{
        res.statusCode = 404;
        res.end('<h1>server not found</h1>');
    }
    
});
server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});