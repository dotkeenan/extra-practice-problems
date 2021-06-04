const getDays = (date1, date2) => {
  const date1Milli = Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate())
  const date2Milli = Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate())
  const daysPassed = Math.abs(date1Milli-date2Milli) / (1000 * 60 * 60 * 24)
  // alternative solution that uses Date.parse() but read that prase() is not good?
  // const daysPassed = Math.abs(Date.parse(date1)-Date.parse(date2)) / (1000 * 60 * 60 * 24)
  return daysPassed
}

module.exports = getDays
