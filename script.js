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

console.log(operate("*", 50, 10));