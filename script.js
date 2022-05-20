function add(a, b) {
	return a + b;
}

function subtract(a, b) {
	return a - b;
}

function multiply(a, b) {
	return a * b;
}

function divide(a, b) {
	return a / b;
}

function operate(operator, a, b) {
	const operators = ["+", "-", "*", "/"];
	const functions = [add, subtract, multiply, divide];

	for (let i = 0; i < operators.length; i++) {
		if (operators[i] === operator) return functions[i](a, b);
	}
}

const display = document.querySelector(".display");
const digits = document.querySelectorAll(".digit");

function modifyDisplay(event) {
	display.textContent += event.target.textContent;
}

digits.forEach(digit => digit.addEventListener("click", modifyDisplay))