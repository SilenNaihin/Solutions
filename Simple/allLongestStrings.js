/* CODESIGNAL

Given an array of strings, return another array containing all of its longest strings.

EXAMPLE
For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be allLongestStrings(inputArray) = ["aba", "vcd", "aba"].

INPUT/OUTPUT
- [execution time limit] 4 seconds (js)
- [input] array.string inputArray: A non-empty array.
- [output] array.string: Array of the longest strings, stored in the same order as in the inputArray.

CONSTRAINTS:
1 ≤ inputArray.length ≤ 10,
1 ≤ inputArray[i].length ≤ 10. */

allLongestStrings = inputArray => {
    //set array with an empty value so the length isn't undefined
    let largest = [''];

    for(i = 0; i < inputArray.length; i++){
        // if the current strings length is longer than the one in the variable largest, reset the array and push the string to the array
        if(inputArray[i].length > largest[0].length){
            largest = [];
            largest.push(inputArray[i]);
        // if it's the same length, simple add it to the already existing array. 
        } else if(inputArray[i].length == largest[0].length){
            largest.push(inputArray[i]);
        }
    }
    return largest
}