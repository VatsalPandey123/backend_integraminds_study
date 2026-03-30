const os = require("os");
const fs = require("fs");
const http = require("http");

const server = http.createServer((req, res) => {

    const requesturl = req.url;
    const requestMethod = req.method;
    const datetime = new Date();
    
    const logMessage = `${datetime} | ${requestMethod} | ${requesturl}\n`;


    if (requesturl === "/log-view") {

        fs.readFile("log.txt", "utf-8", (err, data) => {


            res.writeHead(200, { "Content-Type": "text/plain" });
            res.end(data);
        });

        return; 
    }

  
    fs.appendFile("log.txt", logMessage, (err) => {
        if (err) console.log("Error writing log file");
    });

   
    if (requesturl === "/home") {
        res.end("Welcome to Home Page");
    }

    else if (requesturl === "/about") {
        res.end("Welcome to About Page");
    }

    else if (requesturl === "/memo") {
        const memory = os.freemem() / 1024 / 1024 / 1024;
        res.end(`Free Memory: ${memory.toFixed(2)} GB`);
    }

    else if (requesturl === "/date") {
        res.end(`Current DateTime: ${datetime}`);
    }

    else {
        res.end("404 Page Not Found");
    }

});

const port = 3000;
server.listen(port);

console.log("Server running at http://localhost:3000");