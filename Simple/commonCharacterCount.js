/* CODESIGNAL

Given two strings, find the number of common characters between them.

EXAMPLE
For s1 = "aabcc" and s2 = "adcaa", the output should be commonCharacterCount(s1, s2) = 3.
Strings have 3 common characters - 2 "a"s and 1 "c".

INPUT/OUTPUT
- [execution time limit] 4 seconds (js)
- [input] string s1, s2: A string consisting of lowercase English letters.
- [output] integer

CONSTRAINTS:
1 ≤ s1.length < 15,
1 ≤ s2.length < 15. */

function commonCharacterCount(s1, s2) {
    let counter = 0;

    // turn the strings into arrays so I can easily count them
    let s1s = s1.split(""); let s2s = s2.split("");

    // iterate over every element in the first string
    for(i = 0; i < s1s.length; i++){

        // For every element in the first string, iterate over ever element in the second string until you find a match. 
        // Then, add 1 to the counter, remove the value so there's no duplicates, and break to ensure nothing gets counted twice.
        for(q = 0; q < s2s.length; q++){
            if(s1s[i] === s2s[q]){
                counter++;
                s2s.splice(q,1);
                break;
            }
        }
    } 

    return counter;
}