// // import add , multiply , div from './utils.js';
// import add from './utils.js';
// const output = add(2,3);
// console.log("output:", output);

// const fetchData = new Promise((resolve, reject) =>{
//     const success = false;

//     if(success){
//         resolve("Data fetched Successfully");
//         console.log("data fetched")
//     }else {
//         reject("No data found");
//         console.log("data is not fetched");
//     }
// });

// fetchData
//     .then((message)=>{
//         console.log(message);
//     })
//     .catch((err)=>{
//     console.log(err);
// })
const sample = async ()=>{
    console.log("Started");

    await fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(response => response.json())
    .then((json) => console.log(json))

    console.log("Finished");
};
console.log("sample ~ started 1");
 sample();
 console.log("sample ~ started 2");

const os = require("os");


const http = require('http');

const memory = os.freemem();

const server = http.createServer((req, res) => {

    const requesturl = req.url;
    console.log("requesturl : ", requesturl);

    const requestMethod = req.method;
    console.log("requestMethod : ", requestMethod);

    if (requesturl === "/home") {
        console.log("this is home page");
        res.end("Welcome to Home Page");
    }

    else if (requesturl === "/about") {
        console.log("this is About page");
        res.end("Welcome to About Page");
    }

    else if (requesturl === "/memo") {
        console.log("this is memo page");
        console.log(memory);
        //res.end("Welcome to memo Page");
        res.end(`memory ${memory}`);
    }

    else {
        res.end("404 Page Not Found");
    }
});

const port = 3000;
server.listen(port);

console.log("Server running at http://localhost:3000");
 