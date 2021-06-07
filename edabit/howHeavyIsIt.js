const heavy = (r, h) => {
  // let res = (Math.PI * Math.pow(r, 2) * h) / 1000
  // return Number(res.toFixed(2))

  // one-liner
  return Number(((Math.PI * Math.pow(r, 2) * h) / 1000).toFixed(2))
}

module.exports = heavy;
