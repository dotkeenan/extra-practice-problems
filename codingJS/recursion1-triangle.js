/* description
We have triangle made of blocks. The topmost row has 1 block, the next row down has 2 blocks, the next row has 3 blocks, and so on. Compute recursively (no loops or multiplication) the total number of blocks in such a triangle with the given number of rows.

Examples

triangle(0) → 0
triangle(1) → 1
triangle(2) → 3
*/

function triangle(rows){
  return rows === 0 ? 0 : rows + triangle(rows-1)
}

/*
the number of rows directly correlates to how many blocks are in that last/largest row
using, the number of rows as also the number of blocks in a row makes it easy to keep adding
to keep adding to the previous value of rows in each recursive call.
calling triangle(rows-1) is the value of the row above the current row.
*/
