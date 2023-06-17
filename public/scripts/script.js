let loader = document.getElementById("preloader");
window.addEventListener("load", function () {
	// setTimeout(() => {
	loader.style.display = "none";
	// }, 2000);
});

function isElementVisible(element) {
	var rect = element.getBoundingClientRect();
	var viewportHeight =
		window.innerHeight || document.documentElement.clientHeight;
	var viewportWidth = window.innerWidth || document.documentElement.clientWidth;

	return (
		rect.top <= viewportHeight &&
		rect.bottom >= 0 &&
		rect.left <= viewportWidth &&
		rect.right >= 0
	);
}

function reveal() {
	var reveals = document.querySelectorAll(".reveal");

	for (var i = 0; i < reveals.length; i++) {
		if (isElementVisible(reveals[i])) {
			reveals[i].classList.add("active");
		} else {
			reveals[i].classList.remove("active");
		}
	}
}

window.addEventListener("scroll", reveal);
