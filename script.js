let img1 = document.getElementById("image1");
let dev1 = document.getElementById("website1");
let img3 = document.getElementById("image3");

img1.onclick = imageButton1;
img3.onclick = imageButton3;

function imageButton1() {
	dev1.style.visibility = "hidden";
}

function imageButton3() {
	window.location.href = "https://finalprojectmattiz.netlify.app";
}
