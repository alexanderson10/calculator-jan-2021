// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { getResult, subResult } from '../utils.js';
const test = QUnit.test;

test('it should return 11 when provided 7 and 4', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 11;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getResult(7, 4);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
test('it should return 13 when provided 7 and 6', (expect) => {
    const expected = 13;
    const actual = getResult(7, 6);
    expect.equal(actual, expected);

})
test('it should return 14 when provided 21 and 7', (expect) => {
    const expected = 14;
    const actual = subResult(21, 7);
    expect.equal(actual, expected);
})
test('it should return 20 when provided 30 and 10', (expect) => {
    const expected = 20;
    const actual = subResult(30, 10);
    expect.equal(actual, expected);
})
