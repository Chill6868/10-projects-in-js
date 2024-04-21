// const iconBoxAll = document.querySelectorAll(".icon-box");
// const iconBoxTextAll = document.querySelectorAll(".icon-box__text");

// const iconBoxNavAll = document.querySelectorAll("nav .icon-box");

// const fixSVGDimensions = () => {
// 	iconBoxAll.forEach((iconBox) => {
// 		const svgElement = iconBox.querySelector("svg");

// 		const iconBoxStyles = window.getComputedStyle(iconBox);
// 		const iconBoxHeight = parseInt(iconBoxStyles.height);
// 		const svgElementDimensions = iconBoxHeight;

// 		svgElement.setAttribute("height", svgElementDimensions);
// 		svgElement.setAttribute("width", svgElementDimensions);

// 		console.log("Naprawiono wymiary ikon SVG.");
// 	});

// 	iconBoxTextAll.forEach((iconBox) => {
// 		const iconBoxSpan = iconBox.querySelector("span");
// 		const iconBoxSpanTextContent = iconBoxSpan.textContent;
// 		iconBoxSpan.innerHTML = `&nbsp;${iconBoxSpanTextContent}`;
// 	});
// };

// const fixNavSVGDimensions = () => {
// 	iconBoxNavAll.forEach((iconBox) => {
// 		const svgElement = iconBox.querySelector("svg");

// 		const iconBoxStyles = window.getComputedStyle(iconBox);
// 		const iconBoxHeight = parseInt(iconBoxStyles.height);
// 		const svgElementDimensions = iconBoxHeight * 1.25;

// 		svgElement.setAttribute("height", svgElementDimensions);
// 		svgElement.setAttribute("width", svgElementDimensions);

// 		console.log("Naprawiono wymiary ikon SVG w nawigacji.");
// 	});
// };

// setTimeout(fixSVGDimensions, 1000);
// setTimeout(fixNavSVGDimensions, 2000);
