function concat() {
  const args = [].slice.call(arguments)
  const res = [];
  for (let i = 0; i < args.length; i++) {
    args[i].forEach(x => res.push(x))
    // alternate way to iterate over arguments without having to turn it
    // into a real array:
    // for(let j = 0; j < arguments[i].length; j++) {
    //   res.push(arguments[i][j])
    // }
  }
  return res;
}

module.exports = concat
