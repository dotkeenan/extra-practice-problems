const intWithinBounds = (num1, num2, num3) => {
  return (num1 >= num2) && (num1 < num3) && Number.isInteger(num1)
}

module.exports = intWithinBounds
/*
test whether num1 is within the bounds of num2 and num3
it must be >= num2 but < num3

test whether num1 is an integer // Number.isInteger(num1)
numbers with a decimal place don't work for num1 I guess?

*/
