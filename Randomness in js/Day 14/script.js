// var arr = [`chetna`,`Ambe`,`Neha`,`Sumit`,`Ankit`]

// var a = Math.floor(Math.random()*arr.length)
// console.log(arr[a]);



//  Array of object

var array  =  [
    {
          team :`CSK`,
          Primary :`yellow`,
          secondary : `blue`,
          Captain:`MS Dhoni`,
          trophies: 5
    },
    {
            team :`RCB`,
          Primary :`red`,
          secondary : `black`,
          Captain:` Rajat Patidar`,
          trophies: 1
    },
    {
            team :`MI`,
          Primary :`blue`,
          secondary : `gold`,
            Captain:`Hardik Pandya`,
          trophies: 5
    },
     {
            team :`KKR`,
          Primary :`purple`,
          secondary : `gold`,
            Captain:`Ajinkya Rahane`,
          trophies: 3
    },
    {
            team :`SRH`,
          Primary :`orange`,
          secondary : `black`,
            Captain:`Pat Cummins`,
          trophies: 1
    },
     {
            team :`PBKS`,
          Primary :`crimson`,
          secondary : `silver`,
            Captain:`Shreyas Iyer`,
          trophies: 0
    }
]

// console.log(array[1].team);

// var b= Math.floor(Math.random()*array.length)
// console.log(array[b]);


var btn = document.querySelector(`button`)

var h1 = document.querySelector(`h1`)

var main = document.querySelector(`main`)

btn.addEventListener(`click`,function(){
   var winner= array[Math.floor(Math.random()*array.length)]

   h1.innerHTML = `${winner.team}<br>${winner.Captain}<br>${winner.trophies}`
   
   h1.style.backgroundColor = winner.secondary
    main.style.backgroundColor = winner.Primary
})