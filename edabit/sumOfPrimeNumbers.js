const isPrime = val => {
  for (let i = 2; i < val; i++) {
    if (val % i === 0) return false;
  }
  return true;
}

const sumPrimes = arr => {
  let answer = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) continue;
    if (isPrime(arr[i])) answer+= arr[i]
  }
  return answer;
}

module.exports = sumPrimes;

/*
create a helper function named isPrime that checks if a number is prime.
-to do this, iterate over values between 2 and the number in question, and
if the number % value === 0, then its not prime.
Return false is no, true if yes.

create a storage for the running total of the sum, named answer.
create a loop that iterates over the length of the arr. the array starts at 0.
within the loop:
make a quick check if arr[i] is 1.  if it is, continue to the next iteration, since
1 % 1 === 0, however 1 is NOT a prime number.

if when calling isPrime() with the value of the current iteration of arr is true,
then add and assign arr[i] to 'answer'.

return answer

*/
