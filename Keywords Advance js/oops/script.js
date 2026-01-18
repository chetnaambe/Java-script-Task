// Prototype ek shared memory hai jo afford nahi kar sakta example middlile class family on ebike

class Sketch {
    constructor(){
        this.character = "doraemon";
        this.color = "blue";
        this.someFnc = function(){

        };
    }

}
// isko class ke bahar isliye likh hai kyoki ek function ko sabhi object use kar sakte hai    This is a shared memory 

    Sketch.prototype.speak = function(){
console.log("hello");
    }
    Sketch.prototype.walk =function(){
      console.log("hii"); 
    }


let sketch1 =  new Sketch();


// this : ek special keyword jiski value badal jati hia   likhte waqt iski value tay nhai hoti jab ye chalega tab tai hogi

console.log(this);

function abcd(){
    console.log(this);
}
abcd();

// Object ke ander function banane ko method kahte hai


// methid me function banayege to this call karege to window aayega agar isi ko fet aarow function banyege to 

let make = {
    name:"chetna",
    fnc: function(){
      me = ()=>{
            console.log(this);
        }
        me();
    },

};
make.fnc();



//  yaad kese rakhe


// 1 Global me value rahegi this ki  = window


// 2  function me this = window
  function bd(){
    console.log(this);
  }
bd();

// 3   es5 function inside object -> object
let vh ={
    name:"chetna",
    es5:function(){
        console.log(this);
    },
};
vh.es5();



// 4   es6 arrow function inside object -> window
let hdd = {
    es6:()=>{
        console.log(this);
    },
};
hdd.es6();




// 5 es5 function inside es5 function inside object -> window
      let gdvd = {
        bb:function(){
            function vdg(){
                console.log(this);
            }
            vdg();
        },
      };
      gdvd.bb();



// 6 es6 function inside es5 function inside object -> object


 let vd = {
    name:"chetna",
        bsb:function(){
         vdeg = ()=>{
                console.log(this);
            }
            vdeg();
        },
      };
      vd.bsb();





    //   Call , Apply And bind

// ek function mein this ki value window hoti hai, agar aap chaahte ho ki ######    [wo value window naa ho par koi aur objects ho] tab aap use kr sakte hoo call apply bine ka


//  call   : ye function chalata hai and this value set karta hai

let cal = {
    name:"chetna",
};

function bdbd(){
    console.log(this);
}
bdbd.call(cal);

// apply  :  wahi karta hai jo call karta hai and arguments mein pahli value this ki and dosri value array me


let aap = {
    name:"chetna",
};

function ba(a,b,c){
    console.log(this,a,b,c);
}
ba.apply(aap,[12,13,20]);



// bind  : vahi karta hai jo call karta hai ye aapko naya function deta hai

let bi = {
    name:"chetna",
};

function bn(a,b,c){
    console.log(this,a,b,c);
}
let result = bn.bind(aap,10,20,30);
// bind call ki tarah hota hai ye naya function deta hai

result();
