// 1 function

// 1 recursion
function factorial(n){
    if(n === 1 )return 1;
    return n* factorial(n-1);
}
console.log(factorial(5));


//  2  function

function greet(name){
   console.log("Hello " + name);
}
greet ("Sherry");


// variable Hoisting 

console.log(a);
var a = 10;

//  Function Hoisted

sayHello();
function sayHello(){
    console.log("Hello Sheryians.");
}


//  Argument object 

function show(){
    console.log(arguments);
}
show(10,20,30);