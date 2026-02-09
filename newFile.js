//what is callstack?
//callstack is a data structure that keeps track of the function calls in a program. 
//It is used to keep track of the order of function calls and to manage the execution of the program. 
// When a function is called, it is added to the callstack, and when it returns, it is removed from the callstack. 
// The callstack is also used to manage the scope of variables and to handle exceptions.
const a=()=>{
    b();
    console.log("Function A");
};
const b=()=>{
    console.log("Function B");
};

a();

const login = async()=>{
    await checkHeader();
    await checkpassword();
}