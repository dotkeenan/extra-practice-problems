function isPrime(val){

  //test if number is prime
  for(var i=2; i < val; i++){
    if(val % i === 0){
      return false;
    }
  }
  return true;
}

function sumPrimes(arr) {
  var answer = 0;

  //loop through all numbers from 2 to input value
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] === 1) continue
      //sum only prime numbers, skip all others
      if(isPrime(arr[j])){
        answer += arr[j];
      }

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
