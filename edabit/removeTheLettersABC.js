const removeABC = (str) => {
  return /[abcABC]/.test(str) ? str.replace(/[abcABC]/g, '') : null
}

module.exports = removeABC;
