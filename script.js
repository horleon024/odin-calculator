const operators = ["+", "-", "*", "/"];

function add(a, b) {
	return parseInt(a) + parseInt(b);
}

function subtract(a, b) {
	return parseInt(a) - parseInt(b);
}

function multiply(a, b) {
	return parseInt(a) * parseInt(b);
}

function divide(a, b) {
	if (b == 0) {
		alert("Division by 0 is not allowed");
		return a;
	}
	return parseInt(a) / parseInt(b);
}

function operate(a, operator, b) {
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
	if (display.textContent === "0") display.textContent = event.target.textContent;
	else display.textContent += event.target.textContent;
}

function appendOperator(event) {
	display.textContent += ` ${event.target.textContent} `;
}

function calculatePart(arr, operand) {
	console.log("here");
	const currentIndex = arr.indexOf(operand);
	const tempArr = arr.splice(currentIndex - 1, 3);
	arr.splice(currentIndex - 1, 0, operate(...tempArr));
	return arr;
}

function calculate(event) {
	let arr = display.textContent.split(" ");
	if (arr[2] === "") display.textContent = arr[0]
	else {
		for (let i = 3; i >= 0; i--) {
			while (arr.includes(operators[i])) arr = calculatePart(arr, operators[i]);
		}
	}
	display.textContent = arr[0];
}

function clearDisplay(event) {
	display.textContent = "0";
}

digits.forEach(digit => digit.addEventListener("click", modifyDisplay))

operands.forEach(operand => operand.addEventListener("click", appendOperator));

equalSign.addEventListener("click", calculate);

clearButton.addEventListener("click", clearDisplay);