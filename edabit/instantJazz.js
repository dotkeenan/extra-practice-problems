const jazzify = (array) => {
  return array.map(x =>  x.includes('7') ? x : x + '7')
}

module.exports = jazzify
