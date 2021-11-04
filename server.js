const app = require('express')()
const port = 9999;
const fs = require('fs');
app.get('*', function(req, res) {
    const { url } = req
    switch (url) {
        case '/':
            fs.readFile('./index.html', 'utf-8', function(err, data) {
                res.writeHead(200, { 'Content-Type': 'text/html' })
                res.write(data)
                res.end()
            })
            break;
        case '/1.js':
            //延迟 5s
            fs.readFile("./1.js", "utf-8", function(err, data) {
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                setTimeout(function() {
                    res.write(data);
                    res.end();
                }, 5000);
            })
            break;
        case '/2.js':
            //延迟 10s
            fs.readFile("./2.js", "utf-8", function(err, data) {
                res.writeHead(200, { 'Content-Type': 'text/plain' });
                setTimeout(function() {
                    res.write(data);
                    res.end();
                }, 10000);
            })
            break;
        case '/1.css':
            //延迟 15s
            fs.readFile("./1.css", "utf-8", function(err, data) {
                res.writeHead(200, { 'Content-Type': 'text/css' });
                setTimeout(function() {
                    res.write(data);
                    res.end();
                }, 15000);
            })
            break;
        case '/2.css':
            //延迟 20s
            fs.readFile("./2.css", "utf-8", function(err, data) {
                res.writeHead(200, { 'Content-Type': 'text/css' });
                setTimeout(function() {
                    res.write(data);
                    res.end();
                }, 20000);
            })
            break;
        case '/3.css':
            fs.readFile("./3.css", "utf-8", function(err, data) {
                res.writeHead(200, { 'Content-Type': 'text/css' });
                setTimeout(function() {
                    res.write(data);
                    res.end();
                }, 20000);
            })
            break;
    }
})

app.listen(port)