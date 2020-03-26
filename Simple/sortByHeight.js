/* CODESIGNAL

Some people are standing in a row in a park. There are trees between them which cannot be moved. 
Your task is to rearrange the people by their heights in a non-descending order without moving the trees. People can be very tall!

EXAMPLE
- For a = [-1, 150, 190, 170, -1, -1, 160, 180], the output should be
sortByHeight(a) = [-1, 150, 160, 170, -1, -1, 180, 190].

INPUT/OUTPUT
- [execution time limit] 4 seconds (js)
- [input] array.integer a If a[i] = -1, then the ith position is occupied by a tree. Otherwise a[i] is the height of a person standing 
in the ith position.
- [output] array.integer: Sorted array a with all the trees untouched.

Guaranteed constraints:
1 ≤ a.length ≤ 1000,
-1 ≤ a[i] ≤ 1000. */

function sortByHeight(a) {
    let heights = []; // initialize a place to store heights
    let counter = -1; // initialize a variable to store. starts from -1 because 0 is considered 1 in a 0 based system

    // stores all of the heights inside of the heights variable, and replace all of the instances with height with -2 to be able to reference later
    for(i = 0; i < a.length; i++){
        if(a[i] !== -1){
            heights.push(a[i])
            a.splice(i, 1, -2)
        }
    }

    // sort the heights in order
    heights.sort(function sortNumber(a, b) {  return a - b;})

    // goes through and replaces the placeholder -2's with the heights in order. heights is feeding off of counter and not i because counter only gets invoked when heights is used so index stays accurate
    for(i = 0; i < a.length; i++){
        if(a[i] == -2){
             counter++;
            a.splice(i, 1, heights[counter])
        }
    }

    return a
}
