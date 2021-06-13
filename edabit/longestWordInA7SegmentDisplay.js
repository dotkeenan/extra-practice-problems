const longest7SegmentWord = (arr) => {
  const regex = /[kmvwx]/g
  const filtered = arr.filter(x => !x.match(regex))
  if(filtered.length === 0) return '';
  return filtered.reduce((a,b) => a.length < b.length ? b : a)
  // return filtered.sort((a,b) => b.length - a.length)[0]
}

module.exports = longest7SegmentWord;

/*
create a regex for the letters k,m,v,w,x
create a new array, using filter, that stores all words that DONT contain the regex letters
return '' if there are no elements in filtered array.

use a reduce() method to find the first appearing longest word.
return that result.
*/
