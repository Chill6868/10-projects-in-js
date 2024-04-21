const handleFormValidation = () => {
	const inputAll = document.querySelectorAll("input");
	const inputUsername = document.querySelector("input#username");
	const inputPassword = document.querySelector("input#password");
	const inputPasswordRepeat = document.querySelector("input#password-repeat");
	const inputMail = document.querySelector("input#mail");

	const mailRegExp =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;
	let errorCount;

	const btnClear = document.querySelector(".btn-clear");
	const btnSend = document.querySelector(".btn-send");

	const modalSuccessful = document.querySelector(
		".modal-form-sended-successful"
	);

	const showError = (input) => {
		const errorText = input.parentElement.querySelector(".input__error-text");
		const errorInput = input.parentElement;
		errorText.classList.add("input__error-text--hide-animation");
		errorText.classList.add("input__error-text--visible");
		errorInput.classList.add("input__box--error");
	};

	const hideError = (input) => {
		const errorText = input.parentElement.querySelector(".input__error-text");
		const errorInput = input.parentElement;
		setTimeout(() => {
			errorText.classList.remove("input__error-text--hide-animation");
		}, 300);
		errorText.classList.remove("input__error-text--visible");
		errorInput.classList.remove("input__box--error");
	};

	const checkInputs = () => {
		errorCount = 0;

		if (inputUsername.value.length < 3) {
			showError(inputUsername);
			errorCount++;
		} else {
			hideError(inputUsername);
		}

		if (inputPassword.value.length < 6) {
			showError(inputPassword);
			errorCount++;
		} else {
			hideError(inputPassword);
		}

		if (
			inputPasswordRepeat.value != inputPassword.value ||
			inputPasswordRepeat.value == ""
		) {
			showError(inputPasswordRepeat);
			errorCount++;
		} else {
			hideError(inputPasswordRepeat);
		}

		if (!mailRegExp.test(inputMail.value)) {
			showError(inputMail);
			errorCount++;
		} else {
			hideError(inputMail);
		}

		if (errorCount == 0) {
			showModal(modalSuccessful);
		}
	};

	btnSend.addEventListener("click", () => {
		checkInputs();
	});

	btnClear.addEventListener("click", () => {
		inputAll.forEach((input) => {
			hideError(input);
			input.value = "";
		});
	});

	inputAll.forEach((input) => {
		input.addEventListener("keypress", (e) => {
			if (e.key === "Enter") {
				checkInputs();
			}
		});
	});
};
