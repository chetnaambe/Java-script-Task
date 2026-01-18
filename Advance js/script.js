class BiscuitMaker{
     constructor(){
          this.name = "parleg";
           this.price = 5;
           this.quantity = 6;
     }
}
 let biscuit = new BiscuitMaker();   // blank object
 let biscuit1 = new BiscuitMaker();
 let biscuit2 = new BiscuitMaker();


class Bhelpuri{
     constructor(){
          this.price =30;
          this.quantity= "half";
          this.masaala = ["dhaniya", "aalu", "Samosa"]
     }
   pack(){
     console.log("Pack Bhel");
   }
   unpack(){
     console.log("unpack bhel");
   }
}
let bhel = new Bhelpuri();



//  Shared Memory 

class Human{
     constructor(){
          this.name = "abcd";
          this.age = 21;
     }
     }
     Human.prototype.hu = 12;
     Human.prototype.hello = function(){
    console.log("Hello");
     };
     Human.prototype.hii = function(){
          console.log("hey");
     };

     let h1 = new Human();
     let h2 = new Human();
