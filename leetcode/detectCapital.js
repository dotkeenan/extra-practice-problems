/* description
We define the usage of capitals in a word to be right when one of the following cases holds:

All letters in this word are capitals, like "USA".
All letters in this word are not capitals, like "leetcode".
Only the first letter in this word is capital, like "Google".
Given a string word, return true if the usage of capitals in it is right.



Example 1:

Input: word = "USA"
Output: true
Example 2:

Input: word = "FlaG"
Output: false
*/
var detectCapitalUse = function(word) {
    const allCaps = /^[A-Z]+$/g
    const noCaps = /^[a-z]+$/g
    const normCaps = /^[A-Z][a-z]+$/
    return allCaps.test(word) || noCaps.test(word) || normCaps.test(word)
};
/*
create 3 regular expressions:
one that must be all uppercase from start to finish
one that must be all lowercase from start to finish
one that must start with a capital letter, and the rest must be lowercase.

return the result of testing 'word' against all 3 regular expressions with logical or
operator. (even if 1 is true, return true.  else return false)
*/
