  //    #####     Level 1    #######

// 1   Write a function sayHello() that prints "hello js" 
 
function sayHello(){
    console.log("Hello Js");
 }
 sayHello();


//    2  Create a function `add(a,b)` that return their sum and log the result
  
   function add(a, b){
        return a + b;
  }
  let result =  add(2, 3);
  console.log(result);

// 3  write a function with a default parameter `name = "Guest" that prints "hi <name>"

    function def(name = "Guest"){
                console.log(`Hi ${name}`);
    }
def();

// 4  use rest parameters to make a function that adds unlimited numbers
 
    function unlimited(...nums){
        let adding = 0;
  nums.forEach(function(val){
      adding = adding+val;
  });
  console.log(adding);
    }
    unlimited(1,2,3,4,5,6);

// 5  Create an IIFE That prints "I run Instantly!"
   
    (function(){
        console.log("I run Instantly");
    })
    ();

// 6   Make a nested function where the inner one prints a variable from the outer one.

    function outer(){
        let o = "Hii inner  i am an outer can you access me";
           function inner(){
            console.log(o);
           }
           inner();
    }
    outer();

//  7  create an array 5 fruits. Add one at the end and remove one from the beginning
   
   let fruits = ["Apple", "banana", "pineapple", "cucumber", "Mango"];
            fruits.push("Orange");
                    console.log(fruits);

                    fruits.shift();
                    console.log(fruits);

// 8  Use for loop to print all elements of an array
      
                let number = [1,2,3,4,5,6,7,8,9];
                  for(let i = 0 ; i< number.length; i++){
                    console.log(number[i]);
                  }

//  9  create an object `person ` with keys `name `, age.

     let person = {
        name: "chetna",
        age: 21,
        city: "indore" 
     };

     for (let key in person) {
        console.log(person[key]);
        
}

// 10  Use `SetTimeout()` to log "Times up!" After 2second

 setTimeout(function(){
    console.log("Time is Up!");
 },2000);




//    #####     Level 2    #######


//  1  wtite a higher order function runTwice(fn) that takes another function and execute it two times
   function runTwice(fn){
    fn();
    fn();
   }
  
   runTwice(function(){
    console.log("Hii");
   })

// 2  Create a one pure function that always returns the same output for given input , and one impure function using a blobal scope

function pure(x,y){
console.log(x + y);

}
pure(3,5);
pure(3,5);

let count = 0;
function impure(z){
count++;
console.log(count+z);

}
impure(3);
impure(3);


// 3 Write a function that object destructure inside parameters to extract and print name and age

      function destr({name,age}){
console.log(name,age);
      }
destr({name:"chetna",age:21});


// 4  Demonstrate the diffrence between normal function and arrow function 
 
let demon = {
     name: "chetna",
       fnc:function(){   // normal function
        console.log(this);
    

    // fnc2 : () => {   // Arrow function
    // console.log(this);
    // },    
  
     let fnc3 = ()=>{
        console.log(this);
     }
     fnc3();
    },
   };
   demon.fnc();
//    demon.fnc2();


// 5   Given an array of numbers, use map() to create a new array where each number is squered


   let sim = [1,2,3,4,5,6,7];
   let newsim = sim.map(function(val){
 return val * val;
   });
   console.log(newsim);

// 6 use filter() to get only even numbers from an array

let fil = [1,2,3,4,5,6,7,8,9,10,11,12];
let fillar = fil.filter(function(val){
   return val%2 !== 0;
});
console.log(fillar);


//  7  Use reduce() to find the total salary from an array of numbers [1000,2000,3000];

let salary = [1000,2000,3000];
 let sal = salary.reduce(function(acc, val){
   return acc+val;
},0);
console.log(sal);


// 8  Create an array of names and use some() and every() to test a condition (e.g., all names longer than 3 chars).

//  Some() 

let s = ["chetna","rahul","bhavesh"];
let b = s.some(function(val){
   return val.length>3;
});
console.log(b);


// Every()  

let t = ["chetna","rahul","bhavesh"];
let u = s.every(function(val){
   return val.length>6;
});
console.log(u);


// 9  Create an object user and test the behavior of object.freeze() and object.seal() by adding / changng keys.


// Object.freeze();
let user = {
   name:"Chetna",
   age:21,
   email:"chetna@gmail.com"
};
Object.freeze(user);
user.name = "hbhdb";
console.log(user);



// Object.seal();   
let student = {
   name:"Chetna",
   age:21,
   email:"chetna@gmail.com"
};
Object.seal(student);
student.name = "hbhdb";
console.log(student);


// 10 Create a nested object (user -> address ->  city ->)  and access the city name inside it .

let nested = {
   us :{
      name:"chetna",
      address:{
         city:"bhopal",

      },
   },
}
let {city} = nested.us.address;
console.log(city);

