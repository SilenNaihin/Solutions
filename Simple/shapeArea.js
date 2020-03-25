/* CODESIGNAL

Below we will define an n-interesting polygon. Your task is to find the area of a polygon for a given n.
A 1-interesting polygon is just a square with a side of length 1. An n-interesting polygon is obtained by taking the n - 1-interesting polygon 
and appending 1-interesting polygons to its rim, side by side. You can see the 1-, 2-, 3- and 4-interesting polygons in the picture below.
https://imgur.com/pQm1wGB

EXAMPLE
- For n = 2, the output should be shapeArea(n) = 5;
- For n = 3, the output should be shapeArea(n) = 13.

INPUT/OUTPUT
- [execution time limit] 4 seconds (js)
- [input ]integer n, Guaranteed constraints: 1 ≤ n < 104.
- [output] integer: The area of the n-interesting polygon.
*/

function shapeArea(n) {
    // base area
    let area = 1;

    // each new shape adds another 4 plus the last one, similar to the fibonnaci sequence. Example: 1, 5, 13, 25, 41. Second diff: 4, 8, 12, 16. n - 1 because iteration is 0 based and length is 1 based.
    for(i = 0; i <= n-1; i++){
        area += i*4
    }
    return area
}