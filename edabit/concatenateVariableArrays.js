function concat() {
  const args = [].slice.call(arguments)
  const res = [];
  for (let i = 0; i < args.length; i++) {
    args[i].forEach(x => res.push(x))
  }
  return res;
}

module.exports = concat
