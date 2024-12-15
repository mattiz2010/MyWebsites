let img1 = document.getElementById("image1");
let dev1 = document.getElementById("website1");

img1.onclick = imageButton1; // This should call imageButton1, not imgageButton1

function imageButton1() {
	// Corrected typo here
	dev1.style.visibility = "hidden";
}
