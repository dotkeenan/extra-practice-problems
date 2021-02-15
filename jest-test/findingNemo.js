function findNemo(sentence) {
  const nemoIndex = sentence.split(' ').indexOf('Nemo') + 1
  return sentence.split(' ').includes('Nemo') ? `I found Nemo at ${nemoIndex}!` : `I can't find Nemo :(`
}

module.exports = findNemo
