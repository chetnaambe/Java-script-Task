const user = [
   {
    name: "Aarav Sharma",
    profession: "Frontend Developer",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do",
    image: "https://i.pinimg.com/1200x/56/ca/c7/56cac737bf5f53b5c11bc519087da3bc.jpg"
  },
  {
    name: "Neha Verma",
    profession: "UI/UX Designer",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do",
    image: "https://i.pinimg.com/736x/94/a6/57/94a6579a62dacdbf36dc358605766ba4.jpg"
  },
  {
    name: "Rohit Singh",
    profession: "Backend Developer",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do",
    image: "https://i.pinimg.com/736x/e8/04/f6/e804f67d357cf30783f4e0f67cc008ed.jpg"
  },
  {
    name: "Priya Patel",
    profession: "Full Stack Developer",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed do",
    image: "https://i.pinimg.com/1200x/1c/85/2e/1c852ea928150dfcf54c5457dbca0a35.jpg"
  },
  {
    name: "Karan Mehta",
    profession: "Software Engineer",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit sed dor",
    image: "https://i.pinimg.com/1200x/22/e1/ae/22e1aefb58095efc4f134e311c2b587a.jpg"
  }
];

var sum ="";
user.forEach(function(elem){
    sum = sum + `  <div id="card">
            <div class="space"></div>
            <img src="${elem.image}" alt="">
            <h3>${elem.name}</h3>
            <h5>${elem.profession}</h5>
            <p>${elem.description}</p>
            <i id="one"  class="ri-facebook-circle-fill"></i>
            <i id="two" class="ri-instagram-line"></i>
            <i id="three" class="ri-whatsapp-line"></i>
            <i id="four" class="ri-twitter-line"></i>
             <i id="five" class="ri-linkedin-box-fill"></i>
        </div>`
});

var main = document.querySelector(`main`)

main.innerHTML = sum;