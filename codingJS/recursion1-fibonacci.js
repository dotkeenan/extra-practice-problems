/*
first attempt without recursion
function fibonacci(n){
  const fibNums = [0,1]
  for (let i = 2; i < n; i++) {
    fibNums.push(fibNums[fibNums.length-1] + fibNums[fibNums.length-2])
  }
  return n === 0 ? fibNums[n-1]
} */
