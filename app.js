// import functions and grab DOM elements
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

button.addEventListener('click', () => {
    const fieldValue = additionField1.valueAsNumber;
    const fieldValue2 = additionField2.valueAsNumber;
    const sum = fieldValue + fieldValue2

    addResults.textContent = sum;

})

button2.addEventListener('click', () => {
    const fieldValue = subtractionField1.valueAsNumber;
    const fieldValue2 = subtractionField2.valueAsNumber;
    const sum = fieldValue - fieldValue2

    subtractResults.textContent = sum;


})


button3.addEventListener('click', () => {
    const fieldValue = multiplicationField.valueAsNumber;
    const fieldValue2 = multiplicationField2.valueAsNumber;
    const sum = fieldValue * fieldValue2

    subtractResults.textContent = sum;
})

















// initialize state

// set event listeners to update state and DOM

