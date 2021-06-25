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

*/
