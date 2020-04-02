/* CODESIGNAL

Write a function that reverses characters in (possibly nested) parentheses in the input string. 
Input strings will always be well-formed with matching ()s.

EXAMPLE
- For inputString = "foo(bar)baz", the output should be reverseInParentheses(inputString) = "foorabbaz";
- For inputString = "foo(bar(baz))blim", the output should be reverseInParentheses(inputString) = "foobazrabblim". Because "foo(bar(baz))blim" 
becomes "foo(barzab)blim" and then "foobazrabblim".

INPUT/OUTPUT
- [execution time limit] 4 seconds (js)
- [input] string: A string consisting of lowercase English letters and the characters ( and ). It is guaranteed that all 
parentheses in inputString form a regular bracket sequence.
- [output] string: Return inputString, with all the characters that were in parentheses reversed.

CONSTRAINTS:
0 ≤ inputString.length ≤ 50. */

const reverseInParentheses = str => {

    // if there is no parenthesis, simply return the string because nothing has to happen. If str = '' return ''
    if(!str.includes('(')) return str;

    let subStr = str;
    let revStr = '';

    // While the string includes a '(' save the substring until the next ')'. Add one to index of '(' to move on and not get stuck on the current parenthesis for the while loop. 
    // For example the while statement in the string '(bar(cow))' will catch the first parenthesis '('. subStr now equals 'bar(cow)'. The while condition is still true, so now it returns 'cow)'. There are no more '(' in the substring so continue on to the rest of the code
    // The subString gets updated when the replace method below happens, which triggers the while loop if there are still things left to reverse. When the while loop is no longer true, the while loop stays false, which allows the function to return the string str 
    while(subStr.includes('(')){
    subStr = subStr.substring(subStr.indexOf('(') + 1, subStr.indexOf(')') + 1);
    }

    subStr = '(' + subStr;

    // Take the substring '(bar)' ignore the paranthesis, and reverse the string - making 'rab' 
    revStr = subStr.substring(1, subStr.length - 1).split('').reverse().join('');

    // Within the original string, find and replace the substring '(bar)' with the reverse string 'rab'. This effectively removes all parenthesis, and reverses what needs to be reversed.  
    str = str.replace(subStr, revStr)

    return reverseInParentheses(str);
}