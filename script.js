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

function operate(a, operator, b) {
	const operators = ["+", "-", "*", "/"];
	const functions = [add, subtract, multiply, divide];

	for (let i = 0; i < operators.length; i++) {
		if (operators[i] === operator) return functions[i](a, b);
	}
}

const display = document.querySelector(".display");
const digits = document.querySelectorAll(".digit");
const operands = document.querySelectorAll(".operand");
const equalSign = document.querySelector(".equals");
const clearButton = document.querySelector(".clear");

function modifyDisplay(event) {
	display.textContent += event.target.textContent;
}

function appendOperator(event) {
	display.textContent += ` ${event.target.textContent} `;
}

function calculate(event) {
	const arr = display.textContent.split(" ");
	display.textContent = operate(...arr);
}

function clearDisplay(event) {
	display.textContent = "";
}

digits.forEach(digit => digit.addEventListener("click", modifyDisplay))

operands.forEach(operand => operand.addEventListener("click", appendOperator));

equalSign.addEventListener("click", calculate);

clearButton.addEventListener("click", clearDisplay);