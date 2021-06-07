const heavy = (r, h) => {
  // volume = Math.pi * Math.pow(r, 2) * h
  let res = Math.PI * Math.pow(r, 2) * h
  //convert cm^3 to dm^3
  let resAsDm = res/1000
  // round and format the number
  return Number(resAsDm.toFixed(2))
}

module.exports = heavy;
