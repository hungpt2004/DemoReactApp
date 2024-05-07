const http = require('http');
const port = '3000';
const host = '127.0.0.1';
const server = http.createServer((req, res) => {
    res.end('Hello FPT UNiversity University')
})
server.listen(port,host,()=>{
    console.log(`Server running at http://${host}:${port}`);
});