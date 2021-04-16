const objectToArray = (object) => {
  const res = [];
  for (const key in object) {
    res.push([key, object[key]])
  }
  console.log(res)
  return res;
}

module.exports = objectToArray

/*
create a storage to store all the invidual arrays named 'res'
each array will be a pairing of its key and its value

iterate over the object and push the key and value into an array,
then push that array into 'res'

return res
*/
