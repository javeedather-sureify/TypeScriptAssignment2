"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.multiply = exports.divide = exports.subtract = exports.add = void 0;
function add(a, b) {
    return a + b;
}
exports.add = add;
function subtract(a, b) {
    return a - b;
}
exports.subtract = subtract;
function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return a / b;
}
exports.divide = divide;
function multiply(a, b) {
    return a * b;
}
exports.multiply = multiply;
