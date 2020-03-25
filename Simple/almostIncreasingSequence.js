/* CODESIGNAL

Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing 
no more than one element from the array. Note: sequence a0, a1, ..., an is considered to be a strictly increasing if a0 < a1 < ... < an. 
Sequence containing only one element is also considered to be strictly increasing.

EXAMPLE
- For sequence = [1, 3, 2, 1], the output should be almostIncreasingSequence(sequence) = false. There is no one element in this array 
that can be removed in order to get a strictly increasing sequence.
- For sequence = [1, 3, 2], the output should be almostIncreasingSequence(sequence) = true. You can remove 3 from the array to get the 
strictly increasing sequence [1, 2]. Alternately, you can remove 2 to get the strictly increasing sequence [1, 3].

INPUT/OUTPUT
- [execution time limit] 4 seconds (js)
- [input] array.integer sequence
- [output] boolean: Return true if it is possible to remove one element from the array in order to get a strictly increasing sequence, 
otherwise return false.

CONSTRAINTS:
- 2 ≤ sequence.length ≤ 10^5,
- -10^5 ≤ sequence[i] ≤ 10^5. */

almostIncreasingSequence = sequence => {
    let counter = 0;
    let maxNum = Math.pow(-10,5);
    let max = Math.pow(-10,5);

    sequence.map(num => {
        if(num > maxNum){
            max = maxNum;
            maxNum = num;
        } else if (num > max){
            maxNum = num;
            counter++;
        }else counter++;
    })
    return counter <= 1;
}