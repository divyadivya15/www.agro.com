document.addEventListener("DOMContentLoaded", function(){

console.log("Website Loaded");

// Scroll animation
const elements = document.querySelectorAll(".fade-up");

window.addEventListener("scroll", () => {
    elements.forEach((el) => {
        const top = el.getBoundingClientRect().top;
        if(top < window.innerHeight - 50){
            el.classList.add("show");
        }
    });
});

// Click event
document.querySelectorAll(".product-card").forEach(card => {
    card.addEventListener("click", () => {
        alert("Product details coming soon!");
    });
});

// Bootstrap carousel
var myCarousel = document.querySelector('#productSlider');

if(myCarousel){
    new bootstrap.Carousel(myCarousel, {
        interval: 2000,
        ride: 'carousel',
        pause: false
    });
}

// ✅ AUTO SLIDER FIX
let slides = document.querySelectorAll('.slide');
let index = 0;

if(slides.length > 0){
    setInterval(() => {
        slides[index].classList.remove('active');
        index = (index + 1) % slides.length;
        slides[index].classList.add('active');
    }, 3000);
}

});

document.addEventListener("DOMContentLoaded", function(){

let slides = document.querySelectorAll('.slide');
let index = 0;

if(slides.length > 0){

    setInterval(() => {

        let next = (index + 1) % slides.length;

        // add next first (important)
        slides[next].classList.add('active');

        // remove current after small delay
        setTimeout(() => {
            slides[index].classList.remove('active');
            index = next;
        }, 300);

    }, 3000);

}

});


const track = document.getElementById("scrollTrack");

// stop animation on click
document.querySelectorAll(".product-card").forEach(card => {
    card.addEventListener("click", () => {
        track.style.animationPlayState = "paused";
    });
});





/* about */




function toggleContent() {
  const content = document.getElementById("moreContent");
  const btn = document.getElementById("viewBtn");

  if (content.style.display === "block") {
    content.style.display = "none";
    btn.innerText = "View More";
  } else {
    content.style.display = "block";
    btn.innerText = "View Less";
  }
}


/*exports*/



/* TAB FUNCTION */
function showTab(event, tabId) {

  // hide all tabs
  let contents = document.querySelectorAll(".tab-content");
  contents.forEach(c => c.classList.remove("active"));

  // remove active button
  let tabs = document.querySelectorAll(".tab");
  tabs.forEach(t => t.classList.remove("active"));

  // show selected tab
  document.getElementById(tabId).classList.add("active");

  // active button highlight
  event.currentTarget.classList.add("active");
}

// Hiring Form
document.getElementById("hiringForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Application submitted successfully!");
});

// Contact Form
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Message sent successfully!");
});


//products

document.querySelectorAll('.dropdown-toggle').forEach(function(el) {
  el.addEventListener('click', function (e) {
    e.preventDefault(); // page-ku pogama stop pannum
    let menu = this.nextElementSibling;
    menu.classList.toggle('show');
  });
});
