/* CODESIGNAL

Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

EXAMPLE
- For inputArray = [3, 6, -2, -5, 7, 3], the output should be
adjacentElementsProduct(inputArray) = 21.
- 7 and 3 produce the largest product.

INPUT/OUTPUT
- [execution time limit] 4 seconds (js)
- [input] array.integer inputArray. An array of integers containing at least two elements.

CONSTRAINTS:
2 ≤ inputArray.length ≤ 10,
-1000 ≤ inputArray[i] ≤ 1000. */

function adjacentElementsProduct(inputArray) {
    let final=-1001;
    let finalArray = [];
    for(i=0; i < inputArray.length -1; i++){
        finalArray.push(inputArray[i] * inputArray[i+1]);
    };
    for(i=0; i < finalArray.length; i++){
        if(finalArray[i] > final){
            final = finalArray[i];
        }
    }
    return final
}
