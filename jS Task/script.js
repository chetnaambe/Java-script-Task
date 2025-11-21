// 1  operators question

// a    Arithmetic operator
let a = 12;
let b = 3;

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);


// b    Assignment operator
 let x = 5;
let y = 5;
let z = 5;
let w = 8;

 console.log(x+=2);
 console.log(y-=2);
 console.log(z/=2);
 console.log(w*=2);


//  C  Count  no.

let count = 5;
// count++;
// console.log(count);
 count--;
console.log(count);


// d Comperison operator

console.log(5=="5");
console.log(5==="5");


 if(10>5){
    console.log("hii");
 }


  if(5<20){
    console.log("Hello");
 }


 if(20==10){
    console.log("Welcome");
 }
 else{
    console.log("Not Welcome");
 }



// e Logical operator
console.log((5>3 && 10>8));
console.log((5>3 || 10<8));


// 2  VAriable Hoisting in Javascript

// a  
console.log(c);
var c =10;

// b 
// console.log(d);
// let d = 20;20


// 3  Conditional Operators (if , else , else-if, ternary operator , switch case)

// a 

let age = prompt("Enter your age");
if(age>18) {
   console.log("Adult");
}
else{
    console.log("Minor");
}


//  b

 let marks = prompt("ENter your marks");
 if(marks>=90){
   console.log("A grade");
 }
else if(marks>=75){
   console.log("B grade");
}
else if(marks>=50){
    console.log("C grade"); 
}
else{
     console.log("Fail"); 
}

//  C

let city = prompt("Enter  city");
if(city=="bhopal"){
   console.log("MP");
}
else if(city=="Delhi"){
   console.log("Capital");
}
else{
   console.log("Unknown City");
}


// d   Ternary operator
let score = 40;
(score>35) ? console.log("Pass") : console.log("Fail");

let temperature = 30;
(temperature > 30) ? console.log("Hot") : console.log("Pleasant");


// Switch Case

let day = prompt("Enter a day");
switch(day){
   case 1:
      console.log("Monday");
      break;

       case 2:
      console.log("Tuesday");
      break;

       case 3:
      console.log("Wednesday");
      break;

       case 4:
      console.log("Thusday");
      break;

       case 5:
      console.log("Friday");
      break;

       case 6:
      console.log("Saturday");
      break;

       case 7:
      console.log("Sunday");
      break;
default:
   console.log("Invalid Day");
}


//  logical operator
let ages = 20;
let country = "India";
if(ages>18 && country ==="India"){
   console.log("Eligible for vote");
}
else{
      console.log("Not Eligible");
}
