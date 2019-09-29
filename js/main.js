// FIXED NAV

const nav = document.querySelector('#page-nav')
const topOfNav = nav.offsetTop
function fixNav() {
  if (window.scrollY >= topOfNav) {
    document.body.classList.add('fixed-nav')
    document.getElementById('hero').style['padding-top'] = '44px' //changed from 80 to 45
  } else {
    document.body.classList.remove('fixed-nav')
  }
}
window.addEventListener('scroll', fixNav)

// SLIDE SHOW

//var i = 0; // Start point for time
// var images = [];
// var time = 3000;

// Image list

// images[0] = "images/eating-area.jpg";
// images[1] = "images/dinner-table.jpg";
// images[2] = "images/meal-dinner-table.jpg";
// images[3] = "images/overhead-view-dinning-room.jpg";

// Function to change image slide

// function changeImg() {
// 	document.slide.src = images[i];

// 	if (i < images.length - 1) {
// 		i++;
// 	} else {
// 		i = 0;
// 	}
// 	setTimeout("changeImg()", time);
// }

// window.onload = changeImg;

//Select container with slides
var slideContainer = document.querySelector('.slideContainer')

function addAnimationEventToChild() {
  slideContainer.children[0].addEventListener('animationend', cycleSlides)
}
//removes the first slide to end of the slide list after animation plays
function cycleSlides() {
  var firstSlide = slideContainer.children[0]
  var secondSlide = slideContainer.children[1]

  firstSlide.classList.remove('moveSlide')
  secondSlide.classList.remove('moveSlide')

  firstSlide.remove()
  slideContainer.appendChild(firstSlide)

  firstSlide.removeEventListener('animationend', cycleSlides)
}
// adds animations to first and second slide
function doAnimation() {
  slideContainer.children[0].classList.add('moveSlide')
  slideContainer.children[1].classList.add('moveSlide')
  addAnimationEventToChild()
}
//auto runs the slider
window.setInterval(doAnimation, 6500)
