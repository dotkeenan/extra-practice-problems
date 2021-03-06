/* description
Given base and n that are both 1 or more, compute recursively(no loops) the value of base to the n power, so powerN(3, 2) is 9(3 squared).

  Examples

powerN(3, 1) → 3
powerN(3, 2) → 9
powerN(3, 3) → 27
*/
function powerN(base, n) {
  if (n === 1) return base
  return base * powerN(base, n - 1)
}

/*
end condition: if n === 1, return base.  Meaning just multiply by the base
one last time.

recursion: decrease n by 1, each call.
*/
