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
