const handleBillSplitter = () => {
	const inputAll = document.querySelectorAll("input");
	const inputAmount = document.querySelector("#amount-to-pay");
	const inputPeople = document.querySelector("#number-of-people");
	const inputTip = document.querySelector("#tip");
	const btnCount = document.querySelector(".btn-count");
	const outputText = document.querySelector(".billsplitter__output-text");
	const outputSum = document.querySelector(".billsplitter__output-sum");

	const checkInputValues = () => {
		let errorCount = 0;
		let result;

		inputAll.forEach((input) => {
			const inputBox = input.closest(".input__box");
			const inputErrorText = inputBox.querySelector(".input__error-text");

			if (input.value == "") {
				errorCount++;
				inputBox.classList.add("input__box--error");
				inputErrorText.classList.add("input__error-text--visible");
			}

			input.addEventListener("input", () => {
				inputBox.classList.remove("input__box--error");
				inputErrorText.classList.remove("input__error-text--visible");
			});
		});

		inputAll.forEach((input) => {
			const inputBox = input.closest(".input__box");
			const inputErrorText = inputBox.querySelector(".input__error-text");

			input.addEventListener("input", () => {
				inputBox.classList.remove("input__box--error");
				inputErrorText.classList.add("input__error-text--hide-animation");
				inputErrorText.classList.remove("input__error-text--visible");
			});
		});

		if (errorCount > 0) {
			result = false;
		} else {
			result = true;
		}

		return result;
	};

	btnCount.addEventListener("click", () => {
		const result = checkInputValues();

		if (result) {
			if (inputTip.value != "none") {
				outputSum.textContent = (
					(inputAmount.value * inputTip.value) /
					inputPeople.value
				).toFixed(2);
			} else {
				outputSum.textContent = (inputAmount.value / inputPeople.value).toFixed(
					2
				);
			}
			outputText.classList.add("billsplitter__output-text--hide-animation");
			outputText.classList.add("billsplitter__output-text--visible");
		} else {
			setTimeout(() => {
				outputText.classList.remove(
					"billsplitter__output-text--hide-animation"
				);
			}, 300);
			outputText.classList.remove("billsplitter__output-text--visible");
		}
	});
};
