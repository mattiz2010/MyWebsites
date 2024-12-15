let img1 = document.getElementById("image1");
let dev1 = document.getElementById("website1");
let dev2 = document.getElementById("website2");
let dev3 = document.getElementById("website3");
let img3 = document.getElementById("image3");
let img2 = document.getElementById("image2");
let dev4 = document.getElementById("info");
let count = 0;
let body = document.getElementById("body");
let Warning2 = document.getElementById("warning");

img1.onclick = imageButton1;
img2.onclick = imageButton2;
img3.onclick = imageButton3;

Warning2.style.visibility = "hidden";

function imageButton1() {
	dev1.style.visibility = "hidden";
	dev2.style.visibility = "visible";
	count++;
	console.log(count);
	checkCount();
}

function imageButton2() {
	dev1.style.visibility = "visible";
	dev2.style.visibility = "hidden";
	count++;
	console.log(count);
	checkCount();
}

function imageButton3() {
	window.location.href = "https://finalprojectmattiz.netlify.app";
}

function checkCount() {
	if (count >= 10) {
		body.style.backgroundColor = "red";
		dev1.style.visibility = "hidden";
		dev2.style.visibility = "hidden";
		dev3.style.visibility = "hidden";
		dev4.style.visibility = "hidden";
		Warning2.style.visibility = "visible";
	}
}
