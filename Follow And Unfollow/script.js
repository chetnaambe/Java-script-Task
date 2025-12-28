


// console.log(outer.childNodes[2]);



// var allElem = document.querySelectorAll(`.elem`)

// allElem.forEach(function(elem){
//     elem.childNodes[3].addEventListener(`click`,function(){
//        elem.innerHTML = `Remove friend`
//     });
// })



var allBtn = document.querySelectorAll(`button`)

            allBtn.forEach(function(elem){

                elem.addEventListener(`click`,function(){
                       if(elem.innerHTML == `Follow`){
                        elem.innerHTML = `Unfollow`
                       }
                       else{
                        elem.innerHTML = `Follow`
                       }
                })
            });

