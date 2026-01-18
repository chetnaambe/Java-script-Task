// Advance oops this, call , bind 

class Sketch {
    constructor(){
        this.character = "doraemon";
        this.color = "blue";
        this.someFnc = function(){

        };
    }

}


    Sketch.prototype.speak = function(){
console.log("hello");
    }
    Sketch.prototype.walk =function(){
      console.log("hii"); 
    }


let sketch1 =  new Sketch();



console.log(this);

function abcd(){
    console.log(this);
}
abcd();


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




  function bd(){
    console.log(this);
  }
bd();


let vh ={
    name:"chetna",
    es5:function(){
        console.log(this);
    },
};
vh.es5();




let hdd = {
    es6:()=>{
        console.log(this);
    },
};
hdd.es6();





      let gdvd = {
        bb:function(){
            function vdg(){
                console.log(this);
            }
            vdg();
        },
      };
      gdvd.bb();





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







let cal = {
    name:"chetna",
};

function bdbd(){
    console.log(this);
}
bdbd.call(cal);




let aap = {
    name:"chetna",
};

function ba(a,b,c){
    console.log(this,a,b,c);
}
ba.apply(aap,[12,13,20]);





let bi = {
    name:"chetna",
};

function bn(a,b,c){
    console.log(this,a,b,c);
}
let result = bn.bind(aap,10,20,30);


result();
