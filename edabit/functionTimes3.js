function product(arg1) {
  let res1 = arguments[0];
  let res2 = arguments[1];
  return function (args2) {
    res1 *= arguments[0];
    res2 *= arguments[1];
    return function (args3) {
      res1 *= arguments[0];
      res2 *= arguments[1];
      return res1 + res2
    }
  }
}

module.exports = product;

/*
I had never seen a function called with multiple sets of arguments before
i.e function(1,2)(3,4)(5,6) like how the jest test is set up.

After looking it up, this is done when inside the function, it returns another
function, and that function returns another function.

Above, you can see you don't define the function like:
function(arg1)(arg2)(arg3)
You instead return an anonymous function definition with another parameter, and
that function, although a definition, gets called immediately.  And will only work
with the 2nd parameter if it is called with a 2nd argument set.

*/
