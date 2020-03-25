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
    statues.sort(function sortNumber(a, b) {  return a - b;})
    let min = statues[0];
    let max = statues[statues.length -1];
    let diff = max - min;
    return diff - statues.length + 1
}
