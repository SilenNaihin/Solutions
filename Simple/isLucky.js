/* CODESIGNAL

Ticket numbers usually consist of an even number of digits. A ticket number is considered lucky if the sum of the first half of the 
digits is equal to the sum of the second half. Given a ticket number n, determine if it's lucky or not.

EXAMPLE
- For n = 1230, the output should be isLucky(n) = true;
- For n = 239017, the output should be isLucky(n) = false

INPUT/OUTPUT
- [execution time limit] 4 seconds (js)
- [input] integer n: A ticket number represented as a positive integer with an even number of digits.
- [output] boolean: true if n is a lucky ticket number, false otherwise.

CONSTRAINTS:
10 ≤ n < 106.,
-1000 ≤ inputArray[i] ≤ 1000. */

function isLucky(n) {
    let ns = n.toString().split(''); // turn integer into array of strings
    let length = ns.length/2; //each half is half the total length
    let firstHalf = []; //initialize arrays to push to
    let secondHalf = [];

    // iterate through the first half of the values and push each value to the firstHalf array
    for (i = 0; i < length; i++){
        firstHalf.push(ns[i])
    }
    // turn the array of strings into an array of integers to be able to use the reduce method
    let resultFirst = firstHalf.map(function (x) { 
        return parseInt(x);
        });

    // same as above but for the second half
    for (i = length; i < length*2; i++){
        secondHalf.push(ns[i])
    }
    let resultSecond = secondHalf.map(function (x) { 
        return parseInt(x);
        });
    
    // add the integer values in each array 
    let sumFirst = resultFirst.reduce((a, b) => a + b, 0)
    let sumSecond = resultSecond.reduce((a, b) => a + b, 0)

    return sumFirst == sumSecond 
}