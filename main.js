// Previous Buttom
let previous = document.querySelector(".previous");
// Next Button
let next = document.querySelector(".next");
// Images
let images = Array.from(document.querySelectorAll(".images img"));
let imagesNumber = images.length;
// Create UL
let ul = document.createElement("ul");
ul.setAttribute("id", "indictor-id");
let slideNumber = document.querySelector(".slide-number");
let bullets = document.querySelector(".bullets");
// Create Indictors
for (let i = 1; i <= imagesNumber; i++) {
  let li = document.createElement("li");
  li.textContent = i;
  li.setAttribute("data-index", i);
  ul.appendChild(li);
  bullets.appendChild(ul);
}

// Select UL
let indictorUL = document.getElementById("indictor-id");
let lies = document.querySelectorAll("ul li");

var currentSlide = 1;
// let count = 0;

previous.addEventListener("click", prev);
next.addEventListener("click", after);

function after() {
  currentSlide++;
  checker();

 
}
function prev() {
  currentSlide--;
  checker();
  

  
}

function checker() {
  // Set Slide Number
  slideNumber.textContent = `Slide ${currentSlide} of ${imagesNumber}`;
  deleteActive();
  // Current Slide And Add Class Active
  images[currentSlide - 1].classList.add("active");
  lies[currentSlide - 1].classList.add("active");
  // Check the current Slide number is the first
  if(currentSlide == 1) {
    previous.classList.add("disabled");
  } else {
    previous.classList.remove("disabled")
  }
   // Check the Current Slide number is the last
   if(currentSlide === imagesNumber) {
    next.classList.add("disabled");
  } else {
    next.classList.remove("disabled")
  }
}
lies.forEach((li) => {
  li.addEventListener("click", function () {
    currentSlide = parseInt(this.getAttribute("data-index"));
    checker();
  })
})

checker();
function deleteActive() {
  images.forEach((img) => {
    img.classList.remove("active");
  });
  lies.forEach((li) => {
    li.classList.remove("active");
  });
}
