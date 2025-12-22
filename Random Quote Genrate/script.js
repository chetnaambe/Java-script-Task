var btn = document.querySelector(`button`)
var main = document.querySelector(`main`)

var arr = [`Living Constructively`,`Creating Creativity`,`Let the forest heal you`,`Grasping Gratitude`,`Founding Our Purpose.`]
 
btn.addEventListener(`click`,function(){
  var h1 =  document.createElement(`h1`)
  var a = Math.floor(Math.random()*arr.length)
  
var x = Math.random()*80
var y = Math.random()*90
var r  = Math.random()*360
var scl = Math.random()*3
  h1.innerHTML = arr[a]
  h1.style.position  = `absolute`
  h1.style.fontSize = `80px`
  h1.style.left = x+`%`
    h1.style.top =y+`%`
      h1.style.rotate = r +`deg`
      h1.style.scale = scl 


 main.appendChild(h1)
}) 