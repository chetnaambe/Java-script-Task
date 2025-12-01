// Level 1

// 1 ask user age and check if eligible to vote

let age = prompt("Enter your age ");

if(age === null){
    console.error("You cancelled it.");
}
else{
    if(age.trim() === ""){
        console.error("Write something it....");
    }
        else{
            age =  Number(age);

                if(isNaN(age)){
                    console.error("Please enter the number");
                }
                else{
                   if(age>=18) console.log("Eligible for vote");
                   else console.log("Not eligible for vote");
                }
        }
}



// 2 Print multiplication table of 5

for(let i = 1; i<=10;i++){
    console.log(`38*${i}  = ${38*i}`);
}


// 3   how many number between 1 and 15 are greater than 8 loop and count conditionally.
let count = 0;
for(let c = 1 ; c<=15; c++){
if(c>=8){
    count++;
   console.log(c);
}

}
console.log(`Total count is : ${count}`);


// 4  Ask user for password and print access status

  let password = "chetna13";
  let pass = prompt("Enter a password");
  if(pass === password){
     console.log("Matched");
  }
  else{
      console.log("Not Matched");
  }

  
//   Level 2
//   let i = 1;
// while(i<11){
//     console.log("hii");
//     i++;
// }


// 1  Allow only 3 attempts to enter correct password

    let attempts = 0;
        let key = "chetna4";
            let passkey = prompt("Enter a password");
                attempts++;

                while (passkey !== key){
                    if(attempts === 3){
                        console.error("Account Locked");
                            break;
                    }
                       let passkey = prompt("Enter a password");
                attempts++;
                }

   // 2  Ask user for words until they type "stop". count how many times they typed "yes"

let word = prompt("Enter a word:");
let yesCount = 0;

while (word !== "stop") {
    if (word === "yes") {
        yesCount++;
    }
    word = prompt("Enter a word:");
}

console.log("You typed 'yes' " + yesCount + " times.");

// 3 Print numbers divisible by 7 from 1 to 50 Use modulo % and loop.

let d = 1;
while(d<=50){
    if(d%7===0){
        console.log(d);
    }
    d++;
}




// 4   Sum of all odd numbers from 1 to 30 Add only odd numbers. Print final sum.

let odd = 1;
     let sum  = 0;
    while(odd<=30){
        if(odd%2==1){
sum = sum +odd;
}
       odd++;
    }
     console.log(sum);

//  5  Keep asking number until user enters an even number Use while loop. Stop only if input is even.
           
    let digit = Number(prompt("Enter a digit"));
     
        while(digit % 2== 0){
            console.log("stop");
            digit++;
         }

// 6   Print only first 3 odd numbers from 1 to 20 Use loop. Stop with break after 3 odd prints.
          let add = 0;
                let no = 1;
             while(no<=20){
                if(no % 2 ===1){
                   console.log(no); 
                    add++;
                 if(add === 3){
                    break;
                    }          
                        }
                        no++;
                    }
 //  7 Ask user 5 numbers. Count how many are positive Use loop + condition + counter.
         
let countPositive = 0;
 for ( let i = 0; i<=5;i++){
let num = Number(prompt("Enetr a number"));
if(num>0){
   countPositive++;
}
 }
console.log("Total positive numbers: " + countPositive);