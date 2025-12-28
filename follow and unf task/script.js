let btn = document.querySelector(`button`)

btn.addEventListener(`click`,function(){
    if(btn.innerHTML == `Follow`){
        btn.innerHTML = `Unfollow`
    }
    else{
         btn.innerHTML = `Follow`
    }
})