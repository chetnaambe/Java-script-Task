var elem = document.querySelectorAll(`.elem`)

elem.forEach(function(val){


//    console.log(val.childNodes) 
 val.addEventListener(`mouseenter`,function(){
   val.childNodes[3].style.opacity  =1
 })
 val.addEventListener(`mouseleave`,function(){
   val.childNodes[3].style.opacity  =0
 })

 val.addEventListener(`mousemove`,function(dets){
   val.childNodes[3].style.left = dets.x+"px"
    //  val.childNodes[3].style.top= dets.y+"px"
 })
})











// elem1.addEventListener(`mousemove`,function(dets){
//     eleimg.style.left = dets.x+"px"
//     eleimg.style.top = dets.y+"px"
// })

// elem1.addEventListener(`mouseenter`,function(dets){
//     eleimg.style.opacity = 1
// })

// elem1.addEventListener(`mouseleave`,function(dets){
//     eleimg.style.opacity = 0
// })