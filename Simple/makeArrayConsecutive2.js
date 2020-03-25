/* CODESIGNAL

Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, each statue having an non-negative integer size. 
Since he likes to make things perfect, he wants to arrange them from smallest to largest so that each statue will be bigger than the 
previous one exactly by 1. He may need some additional statues to be able to accomplish that. Help him figure out the minimum number of 
additional statues needed.

EXAMPLE
- For statues = [6, 2, 3, 8], the output should be
makeArrayConsecutive2(statues) = 3.
- Ratiorg needs statues of sizes 4, 5 and 7.

INPUT/OUTPUT
- [execution time limit] 4 seconds (js)
- [input] array.integer statues: An array of distinct non-negative integers.

Guaranteed constraints:
1 ≤ statues.length ≤ 10,
0 ≤ statues[i] ≤ 20. */

function makeArrayConsecutive2(statues) {
    //sort the array numerically
    statues.sort(function sortNumber(a, b) {  return a - b;})
    let min = statues[0]; //smallest number 
    let max = statues[statues.length -1]; //largest number
    let diff = max - min; // find the difference 
    return diff - statues.length + 1 // the amount of numbers in between should be the difference. that's why you take away the length, to find how many are missing. add one so it doesnt take the start as a duplicate 
}
