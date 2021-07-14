const combinations = (...args) => {
  const argsArr = args.filter(x => x !== 0)

  return argsArr.reduce((acc, cur) => acc * cur)
}

module.exports = combinations;
