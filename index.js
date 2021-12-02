const http = require('http')

http.createServer((req, res) => {
    res.write(JSON.stringify({ message: 'I\'m http: Hello World!'}))
    res.end()
}).listen(3000)