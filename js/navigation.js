// // ===========================================================================
// // Navigation on Mobile
// // ===========================================================================

// const navMobile = document.querySelector(".nav-mobile");
// const navMobileBtn = document.querySelector(".hamburger");
// const navMobileMenu = document.querySelector(".nav-mobile__link-box");
// const navMobileMenuItems = document.querySelectorAll(".nav-mobile__link-item");

// navMobileBtn.addEventListener("click", () => {
// 	navMobile.classList.toggle("nav-mobile--active");
// 	navMobileMenu.classList.toggle("nav-mobile__link-box--active");

// 	if (document.body.classList.contains("disable-scroll")) {
// 		document.body.classList.remove("disable-scroll");
// 	} else {
// 		document.body.classList.add("disable-scroll");
// 	}
// });

// navMobileMenuItems.forEach((item) => {
// 	item.addEventListener("click", () => {
// 		navMobile.classList.remove("nav-mobile--active");
// 		navMobileMenu.classList.remove("nav-mobile__link-box--active");
// 		document.body.classList.remove("disable-scroll");
// 	});
// });

// // ===========================================================================
// // Navigation on Desktop
// // ===========================================================================

// const navDesktop = document.querySelector(".nav-desktop");

// document.addEventListener("scroll", () => {
// 	if (scrollY >= 100) {
// 		navDesktop.classList.add("nav-desktop--bg-active");
// 	} else {
// 		navDesktop.classList.remove("nav-desktop--bg-active");
// 	}
// });

const navNormal = document.querySelector(".nav-normal");
const navMini = document.querySelector(".nav-mini");
const btnNavNormalToggle = document.querySelector(".nav-normal__btn-toggle");
const btnNavMiniToggle = document.querySelector(".nav-mini__btn-toggle");
const container = document.querySelector(".container");

const containerEnlarge = () => {
	const containerStyles = window.getComputedStyle(container);
	const containerCurrentWidth = parseInt(containerStyles.width);
	const containerCurrentWidthPx = `${containerCurrentWidth}px`;

	container.style.width = `calc(${containerCurrentWidthPx} + 10vw)`;
};

const containerDecrese = () => {
	const containerStyles = window.getComputedStyle(container);
	const containerCurrentWidth = parseInt(containerStyles.width);
	const containerCurrentWidthPx = `${containerCurrentWidth}px`;

	container.style.width = `calc(${containerCurrentWidthPx} - 10vw)`;
};

btnNavNormalToggle.addEventListener("click", () => {
	navNormal.classList.add("nav-normal--hidden");
	navMini.classList.remove("nav-mini--hidden");
	container.classList.add("container--nav-mini");
	setTimeout(containerEnlarge, 300);
});

btnNavMiniToggle.addEventListener("click", () => {
	containerDecrese();
	navNormal.classList.remove("nav-normal--hidden");
	navMini.classList.add("nav-mini--hidden");
	container.classList.remove("container--nav-mini");
});

// ===========================================================================
// Navigation Buttons
// ===========================================================================

// =============
// Variables
// =============

const btnNavNormal = document.querySelectorAll(".nav-normal .btn-box button");
const btnNavMini = document.querySelectorAll(".nav-mini .btn-box button");

// =============
// Functions
// =============

const btnClickNormal = (e) => {
	const btnClass = e.target.classList[0];

	btnNavNormal.forEach((btn) => {
		btn.classList.remove("btn-item-active");
	});

	btnNavMini.forEach((btn) => {
		btn.classList.remove("btn-item-active");
	});

	btnNavMini.forEach((btn) => {
		if (btn.classList.contains(btnClass)) {
			btn.classList.add("btn-item-active");
		}
	});

	e.target.classList.add("btn-item-active");
};

const btnClickMini = (e) => {
	const btnClass = e.target.classList[0];

	btnNavNormal.forEach((btn) => {
		btn.classList.remove("btn-item-active");
	});

	btnNavMini.forEach((btn) => {
		btn.classList.remove("btn-item-active");
	});

	btnNavNormal.forEach((btn) => {
		if (btn.classList.contains(btnClass)) {
			btn.classList.add("btn-item-active");
		}
	});

	e.target.classList.add("btn-item-active");
};

const pushProject = (section) => {
	container.innerHTML = ``;
	container.innerHTML = section;
};

// =============
// Projects
// =============

const aboutProject = `
<section class="about-project">
<div class="wrapper">
	<div class="text-box">
		<h4 class="text__md"></h4>
		<h2 class="text__xl icon-box">
			<svg xmlns="http://www.w3.org/2000/svg" width="74" height="74" viewBox="0 0 24 24"
				fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
				stroke-linejoin="round"
				class="icon icon-tabler icons-tabler-outline icon-tabler-info-circle">
				<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
				<path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
				<path d="M12 9h.01"></path>
				<path d="M11 12h1v4h1"></path>
			</svg>
			<span>O Projekcie</span>
		</h2>
		<h4 class="text__md">Kilka informacji:</h4>
		<ul class="about-project__ul">
			<li>Strona nie jest responsywna, ponieważ używanie jej na telefonach mija się z celem.</li>
			<li>Wszystkie projekty pochodzą z kursu <a
					href="https://www.udemy.com/course/10-projektow-w-czystym-javascript-cz-1/"
					target="_blank" class="about-project__link">10 projektów w czystym JavaScript</a>
				autorstwa <a href="https://www.youtube.com/@Majek_03" target="_blank"
					class="about-project__link">Majka</a>.</li>
			<li>Projekt powstał z myślą o:
				<ul class="about-project__ul-in-ul">
					<li>Utrwaleniu wiedzy o JS po ukończeniu kursu,</li>
					<li>Próbie napisania kodu tych projektów w jak najlepszy sposób,</li>
					<li>Próbie napisania Single Web Application bez żadnego frameworka (inner.HTML,
						oczywiście 4fun).
					</li>
				</ul>
			</li>
		</ul>
	</div>
</div>
</section>
`;

const drinkSearch = `
<section class="drink-search">
<div class="wrapper">
	<div class="drink-search__container">
		<div class="drink-search__header">
			<h2>DrinkSearch</h2>
			<div class="drink-search__header--shadow"></div>
		</div>
		<div class="drink-search__main-box">
			<div class="input__box">
				<input type="text" id="sought-item">
				<label for="sought-item">Wpisz nazwę szukanego napoju:</label>
			</div>
			<h2>Lista Dostępnych Napojów:</h2>
			<ul class="drink-search__item-box">
				<li class="drink-search__item">Mleko</li>
				<li class="drink-search__item">Piwo</li>
				<li class="drink-search__item">Whisky</li>
				<li class="drink-search__item">Pepsi</li>
				<li class="drink-search__item">Woda gazowana</li>
				<li class="drink-search__item">Sok jabłkowy</li>
				<li class="drink-search__item">Sok pomarańczowy</li>
				<li class="drink-search__item">Sok bananowy</li>
				<li class="drink-search__item">Sok wieloowocowy</li>
				<li class="drink-search__item">Wino czerwone</li>
				<li class="drink-search__item">Wino białe</li>
				<li class="drink-search__item">Woda niegazowana</li>
				<li class="drink-search__item">Energy drink</li>
				<p class="drink-search__item-not-found">Nie znaleziono napoju o podanej nazwie.</p>
			</ul>
		</div>
	</div>
</div>
</section>
`;

const billSplitter = `
<section class="billsplitter">
<div class="wrapper">
	<div class="billsplitter__container">
		<div class="billsplitter__header">
			<h2>BillSplitter</h2>
			<p>Podziel się rachunkiem ze znajomymi!</p>
		</div>
		<div class="billsplitter__main-box">
			<div class="input__container">
				<div class="input__box">
					<input type="number" min="1" id="amount-to-pay">
					<label for="amount-to-pay">Kwota do zapłaty:</label>
					<p class="input__error-text">Podaj kwotę do zapłaty.</p>
				</div>
				<div class="input__box">
					<input type="number" min="1" id="number-of-people">
					<label for="number-of-people">Ilość osób:</label>
					<p class="input__error-text">Podaj ilość osób.</p>
				</div>
				<div class="input__box">
					<select id="tip">
						<option value="none" selected disabled>Wybierz napiwek</option>
						<option value="1.05">5%</option>
						<option value="1.1">10%</option>
						<option value="1.15">15%</option>
						<option value="1.2">20%</option>
					</select>
				</div>
				<button class="btn btn-count">
					<div class="btn__solid"></div>
					<span class="btn__text">Oblicz</span>
				</button>
			</div>
			<p class="billsplitter__output-text">Powinniście się złożyć po <span
					class="billsplitter__output-sum">0</span> zł!</p>
		</div>
	</div>
</div>
</section>
`;

const formValidation = `
<section class="form-validation">
<div class="wrapper">
	<div class="form-validation__container">
		<div class="form-validation__header">
			<h2 class="form-validation__title">Zarejestruj się!</h2>
		</div>
		<div class="form-validation__main-box">
			<div class="input__container">
				<div class="input__box">
					<input type="text" id="username">
					<label for="username">Nazwa użytkownika:</label>
					<p class="input__error-text">Nazwa użytkownika musi składać się z min. 3 znaków.</p>
				</div>
				<div class="input__box">
					<input type="text" id="password">
					<label for="password">Hasło</label>
					<p class="input__error-text">Hasło musi składać się z min. 6 znaków.</p>
				</div>
				<div class="input__box">
					<input type="text" id="password-repeat">
					<label for="password-repeat">Powtórz hasło:</label>
					<p class="input__error-text">Hasła nie pasują do siebie.</p>
				</div>
				<div class="input__box">
					<input type="text" id="mail">
					<label for="mail">E-Mail:</label>
					<p class="input__error-text">Podaj poprawny adres e-mail.</p>
				</div>
				<div class="form-validation__btn-box">
					<button class="btn-clear form-validation__btn btn">
						<div class="btn__solid"></div>
						<div class="btn__text">Wyczyść</div>
					</button>
					<button class="btn-send form-validation__btn btn">
						<div class="btn__solid"></div>
						<div class="btn__text">Wyślij</div>
					</button>
				</div>
			</div>
		</div>
	</div>
</div>
</section>
`;

const magic8Ball = ``;

const stopper = ``;

const myNotes = ``;

const exchangeRateApp = ``;

const wallet = ``;

const timer = ``;

const toDoList = ``;

// =============
// Listeners
// =============

// Buttons Active Class

btnNavNormal.forEach((btn) => {
	btn.addEventListener("click", (e) => {
		btnClickNormal(e);
	});
});

btnNavMini.forEach((btn) => {
	btn.addEventListener("click", (e) => {
		btnClickMini(e);
	});
});

// ====
// Buttons Projects
// ====

// About Project

btnNavNormal[0].addEventListener("click", (e) => {
	pushProject(aboutProject);
});
btnNavMini[0].addEventListener("click", (e) => {
	pushProject(aboutProject);
});

// Search Engine

btnNavNormal[1].addEventListener("click", (e) => {
	pushProject(drinkSearch);
	handleDrinkSearch();
});
btnNavMini[1].addEventListener("click", (e) => {
	pushProject(drinkSearch);
	handleDrinkSearch();
});

// Billsplitter

btnNavNormal[2].addEventListener("click", (e) => {
	pushProject(billSplitter);
	handleBillSplitter();
});
btnNavMini[2].addEventListener("click", (e) => {
	pushProject(billSplitter);
	handleBillSplitter();
});

// Form Validation

btnNavNormal[3].addEventListener("click", (e) => {
	pushProject(formValidation);
	handleFormValidation();
});
btnNavMini[3].addEventListener("click", (e) => {
	pushProject(formValidation);
	handleFormValidation();
});

// Magic 8Ball

btnNavNormal[4].addEventListener("click", (e) => {
	pushProject(magic8Ball);
});
btnNavMini[4].addEventListener("click", (e) => {
	pushProject(magic8Ball);
});

// Stopper

btnNavNormal[5].addEventListener("click", (e) => {
	pushProject(stopper);
});
btnNavMini[5].addEventListener("click", (e) => {
	pushProject(stopper);
});

// MyNotes

btnNavNormal[6].addEventListener("click", (e) => {
	pushProject(myNotes);
});
btnNavMini[6].addEventListener("click", (e) => {
	pushProject(myNotes);
});

// Exchange Rate App

btnNavNormal[7].addEventListener("click", (e) => {
	pushProject(exchangeRateApp);
});
btnNavMini[7].addEventListener("click", (e) => {
	pushProject(exchangeRateApp);
});

// Wallet

btnNavNormal[8].addEventListener("click", (e) => {
	pushProject(wallet);
});
btnNavMini[8].addEventListener("click", (e) => {
	pushProject(wallet);
});

// Timer

btnNavNormal[9].addEventListener("click", (e) => {
	pushProject(timer);
});
btnNavMini[9].addEventListener("click", (e) => {
	pushProject(timer);
});

// ToDo List

btnNavNormal[10].addEventListener("click", (e) => {
	pushProject(toDoList);
});
btnNavMini[10].addEventListener("click", (e) => {
	pushProject(toDoList);
});
