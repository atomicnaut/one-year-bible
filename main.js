// Scroll Down Arrow
document.querySelector("#scroll-down").addEventListener("click", () => {
	window.scrollTo({
		top: document.querySelector("#about").offsetTop - 20,
	});
});

// Nav
const nav = document.querySelector("#nav");
const height = 100;

// Features
const read = document.querySelector("#read");
const listen = document.querySelector("#listen");
const watch = document.querySelector("#watch");
const read_height = read.offsetTop - 100;
const listen_height = listen.offsetTop - 100;
const watch_height = watch.offsetTop - 100;

// Onscroll Function
window.onscroll = function () {
	// Nav
	if (window.scrollY > height) {
		nav.classList.add("scrolled");
	} else {
		nav.classList.remove("scrolled");
	}

	// Features
	if (window.scrollY > read_height) {
		read.style.opacity = "1";
	} else {
		read.style.opacity = "0.2";
	}
	if (window.scrollY > listen_height) {
		listen.style.opacity = "1";
	} else {
		listen.style.opacity = "0.2";
	}
	if (window.scrollY > watch_height) {
		watch.style.opacity = "1";
	} else {
		watch.style.opacity = "0.2";
	}
};
