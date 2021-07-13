const numberOfOccurrences = (obj) => {

}

module.exports = numberOfOccurrences;

/*
create an empty object named 'res'
loop over the object with a for...in loop

If res doesn't contain the the current iterations value,
add the current iteration as a key, and the number 1, as a value, to 'res'.

note: the argument object has alphabet as keys, and the values are the
words I want to count.  I don't care about 'obj's keys.  Only the values,
so in the for..in loop, access the values with obj[key]


If res DOES contain the current iteration's property already,
increment that value in 'res'.

return res.

*/
