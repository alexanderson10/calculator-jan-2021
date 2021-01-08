import { getResult, subResult } from './utils.js';


const additionField1 = document.getElementById('add-input-1')
const additionField2 = document.getElementById('add-input-2')
const button = document.getElementById('add-button')
const addResults = document.getElementById('add-results')
const subtractionField1 = document.getElementById('minus-input1')
const subtractionField2 = document.getElementById('sub-input2')
const subtractResults = document.getElementById('subtract-results')
const button2 = document.getElementById('sub-button')
const multiplicationField = document.getElementById('multipy-input1')
const multiplicationField2 = document.getElementById('multiply-input2')
const button3 = document.getElementById('mult-results')
const multiplyResults = document.getElementById('multiply-results')

export function myClickHandler() {
    const fieldValue = additionField1.valueAsNumber;
    const fieldValue2 = additionField2.valueAsNumber;
    const sum = getResult(fieldValue, fieldValue2);
    addResults.textContent = sum;
}
export function myClickHandler1() {
    const subtraction1 = subtractionField1.valueAsNumber
    const subtraction2 = subtractionField2.valueAsNumber
    const result = getResult(subtraction1, subtraction2)
    subtractResults.textContent = result;
}
export function myClickHandler2() {
    const multiplicationField = document.getElementById('multipy-input1')
    const multiplicationField2 = document.getElementById('multiply-input2')
    const multiplyResults = document.getElementById('multiply-results')
    addResults.textContent = sum;
}