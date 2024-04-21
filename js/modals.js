const modalShadow = document.querySelector(".modal__shadow");
const modalBoxAll = document.querySelectorAll(".modal__box");
const modalBtnCloseAll = document.querySelectorAll(".modal__btn-close");

const showModal = (modal) => {
	modalShadow.classList.add("modal__shadow--z-index-visible");
	modalShadow.classList.add("modal__shadow--visible");

	modal.classList.add("modal__box--z-index-visible");
	modal.classList.add("modal__box--visible");
};

const hideModal = (modal) => {
	setTimeout(() => {
		modalShadow.classList.remove("modal__shadow--z-index-visible");
	}, 300);
	modalShadow.classList.remove("modal__shadow--visible");

	modalBoxAll.forEach((box) => {
		setTimeout(() => {
			box.classList.remove("modal__shadow--z-index-visible");
		}, 300);
		box.classList.remove("modal__box--visible");
	});
};

modalShadow.addEventListener("click", () => {
	hideModal();
});

modalBtnCloseAll.forEach((btn) => {
	btn.addEventListener("click", () => {
		hideModal();
	});
});
