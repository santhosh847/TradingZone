let brands = document.querySelectorAll("brand");
for (let brand of brands) {
	brand.classList.add("fw-bold");
}

let loader = document.getElementById("preloader");
window.addEventListener("load", function () {
	// setTimeout(() => {
	loader.style.display = "none";
	// }, 2000);
});

setTimeout(() => {
	loader.style.display = "none";
}, 3000);

function checkVisible(elm) {
	var rect = elm.getBoundingClientRect();
	var viewHeight = Math.max(
		document.documentElement.clientHeight,
		window.innerHeight
	);
	return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
}

function reveal() {
	var reveals = document.querySelectorAll(".reveal");

	for (var i = 0; i < reveals.length; i++) {
		if (checkVisible(reveals[i])) {
			reveals[i].classList.add("active");
		} else {
			reveals[i].classList.remove("active");
		}
	}
}

window.addEventListener("scroll", reveal);
