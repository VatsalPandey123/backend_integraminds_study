// // import add , multiply , div from './utils.js';
// import add from './utils.js';
// const output = add(2,3);
// console.log("output:", output);

const fetchData = new Promise((resolve, reject) =>{
    const success = false;

    if(success){
        resolve("Data fetched Successfully");
        console.log("data fetched")
    }else {
        reject("No data found");
        console.log("data is not fetched");
    }
});

fetchData
    .then((message)=>{
        console.log(message);
    })
    .catch((err)=>{
    console.log(err);
})