// Pure Beginner Practice

// 1  eligible for vote or not using user input

let age = prompt("Enter your age");
if(age>=18) console.log("Eligible");
else console.log("Not Eligible");



// Multiplication Table of 6
for (let i = 1; i<=10; i++){
    console.log(`5 * ${i} = ${ 5 * i }`);
}

// count the number that is greater than 8
  let count =0;
for(let g= 1;g<=15;g++){
    if(g>=8){
         count++;
        }
         console.log(`${g} = ${count}`);
}


// user password
let mainPassword = "A12@fg";
let userPassword = prompt("Enter a password");
    if(mainPassword === userPassword){
        console.log("Accesss Status");
    }
    else {
          console.log("not Accesss Status");
    }



    //  Ask user for words until they type “stop”. Count how many times they typed “yes”
// Loop until "stop" is typed. Count "yes".


let word;
let countYes = 0;
   while(true){
word = prompt("Enter a word");
     if(word === "stop"){
        break;
     }
     if(word === "Yes"){
        countYes++;
     }

   }
   
console.log(`You typed "yes" ${countYes} times.`);



// Print numbers divisible by 7 from 1 to 50 Use modulo % and loop.
for(let p = 1 ;p<=50;p++){
if(p%7===0){
    console.log(`${p}`);
}
}


//  Sum of all odd numbers from 1 to 30
let sum= 0;

for(let o = 1; o<=30; o++){
    if(o % 2 === 1){
         sum= sum + o;
    }
   
}
 console.log(sum);



//  Keep asking number until user enters an even number Use while loop. Stop only if input is even.
let evenNo = 0;
while(true){
    let user = prompt("Enter a even");
    if(user % 2 ===0){
        console.log("Even");
    }
    else{
        console.log("Stop");
        break;
    }
}




// Atm
let balance = 1000;

for (let i = 1; i <= 3; i++) {

    let amount = Number(prompt(`Attempt {i}/3: Enter withdrawal amount:`));

    if (amount <= balance) {
        balance -= amount;
        console.log(`Withdrawal successful. Remaining balance: ${balance}`);
    } else {
        console.log("Insufficient balance");
    }
}

console.log(`Final balance: {balance}`);
