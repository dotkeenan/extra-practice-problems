const countBoomerangs = (array) => {
  let boomerangCount = 0;
  for (let i = 1; i < array.length - 1; i++) {
    if (array[i-1] === array[i+1] && array[i] !== array[i-1] && array[i] !== array[i+1]) {
      boomerangCount++
    }
  }
  return boomerangCount
}

module.exports = countBoomerangs
