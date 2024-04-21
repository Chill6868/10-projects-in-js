const blockView = document.querySelector(".block-view");

window.addEventListener("load", () => {
	if (window.innerWidth < 1920) {
		blockView.classList.add("block-view--visible");
	} else {
		blockView.classList.remove("block-view--visible");
	}
});

window.addEventListener("resize", () => {
	if (window.innerWidth < 1920) {
		blockView.classList.add("block-view--visible");
	} else {
		blockView.classList.remove("block-view--visible");
	}
});
