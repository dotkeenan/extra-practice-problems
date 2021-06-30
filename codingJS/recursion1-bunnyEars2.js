/* We have bunnies standing in a line, numbered 1, 2, ... The odd bunnies (1, 3, ..) have the normal 2 ears. The even bunnies (2, 4, ..) we'll say have 3 ears, because they each have a raised foot. Recursively return the number of "ears" in the bunny line 1, 2, ... n (without loops or multiplication).

Examples

bunnyEars2(0) → 0
bunnyEars2(1) → 2
bunnyEars2(2) → 5 */

function bunnyEars2(bunnies){
  if (bunnies === 0) return 0;
  if (bunnies % 2 === 0) return 3 + bunnyEars2(bunnies-1)
  if (bunnies % 2 === 1) return 2 + bunnyEars2(bunnies-1)
}
console.log(bunnyEars2(11))

/*
Not sure how you are supposed to start with figuring out a recursive function.
I started with defining the endpoint of recursion: if bunnies===0, then return 0;
I know that you start with a single input of how many bunnies there are, so I know
that in this situation, I need call bunnyEars2 with bunnies-1 as the argument.
When bunnyEars2(0) eventually gets called, it will return 0, and be able to go back up
through all the recursion and become actual values.

The conditional is just for this particular exercise that says that when the bunnies line up,
every even numbered bunny counts as 3 ears, and every odd counts as 2.

*/
