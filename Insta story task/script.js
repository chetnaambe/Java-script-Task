var arr = [
    {dp:"https://i.pinimg.com/736x/72/f6/d2/72f6d20a2742f12bd1bf1d6b03f4163f.jpg",story:"https://i.pinimg.com/736x/a2/13/a4/a213a47b4555b3da6a1d46fd8929a486.jpg"

    },
        {dp:"https://i.pinimg.com/1200x/d4/e1/fb/d4e1fb5179f39df14bf780d65ac75fd2.jpg",story:"https://i.pinimg.com/736x/b9/25/a8/b925a8a7f78dbb1335f568f555ddf355.jpg"
        
    },
        {dp:"https://i.pinimg.com/736x/63/6d/55/636d55632ac3c2067144984cb70d8b55.jpg",story:"https://i.pinimg.com/736x/46/90/8c/46908cca63b711e2ef267038116f4f09.jpg"
        
    },
        {dp:"https://i.pinimg.com/1200x/3c/d3/76/3cd3764ff576208a8305732ef8156f0a.jpg",story:"https://i.pinimg.com/736x/79/75/0b/79750b0f2170b912d1923786a13e5c6e.jpg"
        
    },
        {dp:"https://i.pinimg.com/1200x/d4/e1/fb/d4e1fb5179f39df14bf780d65ac75fd2.jpg",story:"https://i.pinimg.com/1200x/67/c8/35/67c8351f8173093cf4bb93ff69478531.jpg"
        
    },
        {dp:"https://i.pinimg.com/736x/62/5a/21/625a21d8face38805078fe2f0467b0f5.jpg",story:"https://i.pinimg.com/1200x/d9/cb/f7/d9cbf7f4c83b77cee1fc2ccdf9ec8a06.jpg"
        
    },
    
]

var stories = document.querySelector(`#stories`)
var clutter = " "
arr.forEach(function(elem,idx){
   clutter += ` <div class="story">
            <img id = "${idx}" src="${elem.dp}" alt="">
           </div>`
})
stories.innerHTML = clutter


stories.addEventListener(`click`,function(dets){
    document.querySelector("#fullscreen").style.display = "block"
    document.querySelector("#fullscreen").style.backgroundImage = `url(${arr[dets.target.id].story})`
    

    setTimeout(function(){
       document.querySelector("#fullscreen").style.display = "none"
    },2000)
});