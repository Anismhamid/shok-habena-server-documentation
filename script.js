// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
	anchor.addEventListener("click", function (e) {
		e.preventDefault();
		document.querySelector(this.getAttribute("href")).scrollIntoView({
			behavior: "smooth",
		});
	});
});

// Highlight current section in sidebar
window.addEventListener("scroll", function () {
	const sections = document.querySelectorAll("h2[id], .endpoint");
	let currentSection = "";

	sections.forEach((section) => {
		const sectionTop = section.offsetTop;
		if (pageYOffset >= sectionTop - 150) {
			currentSection = section.id;
		}
	});

	document.querySelectorAll("#sidebar a").forEach((link) => {
		link.classList.remove("active");
		if (link.getAttribute("href") === `#${currentSection}`) {
			link.classList.add("active");
		}
	});
});
