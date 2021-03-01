const derivative = (b,m) => {
  // return (m * b) ** (b -1)
  return (m ** (b-1)) * b
}

module.exports = derivative;
