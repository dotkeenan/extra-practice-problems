const areaOfCountry = (name, area) => {
  // const percent = Math.round(((area / 148940000) * 100) / 100);
  const percent = ((area / 148940000) * 100).toFixed(2);
  return `${name} is ${percent}% of the total world's landmass`
}

module.exports = areaOfCountry

/*
arg1 = country name
arg2 = area
and returns area of the country's proportion of the total world's landmass

(russia, 17098242) // 'russia is 11.48% of the total world's landmass')

total world landmass = 148,940,000 [Km^2]
round result to two decimal places

divide total landmass by the area argument.
result will be a decimal
convert to percentage by multiplying by 100.
round result to 2 decimal places.

*/
