const possibleBonus = (a, b) => {
  if (a >= b || (b-a) > 6) return false;
  return true;
}

module.exports = possibleBonus
