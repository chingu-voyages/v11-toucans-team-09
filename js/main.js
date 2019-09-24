// FIXED NAV

const nav = document.querySelector("#page-nav");
const topOfNav = nav.offsetTop;
function fixNav() {
	if (window.scrollY >= topOfNav) {
		document.body.classList.add("fixed-nav");
		document.getElementById("slider").style["padding-top"] = "80px";
	} else {
		document.body.classList.remove("fixed-nav");
	}
}
window.addEventListener("scroll", fixNav);

// SLIDE SHOW

var i = 0; // Start point for time
var images = [];
var time = 3000;

// Image list

images[0] = "images/eating-area.jpg";
images[1] = "images/dinner-table.jpg";
images[2] = "images/meal-dinner-table.jpg";
images[3] = "images/overhead-view-dinning-room.jpg";

// Function to change image slide

function changeImg() {
	document.slide.src = images[i];

	if (i < images.length - 1) {
		i++;
	} else {
		i = 0;
	}
	setTimeout("changeImg()", time);
}

window.onload = changeImg;
