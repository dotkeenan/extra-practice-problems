const findNemo = require('./findingNemo')
describe('Finding Nemo', () => {
  test('1', () => {
    expect(findNemo("I am Ne mo Nemo !")).toBe("I found Nemo at 5!")
  });
  test('2', () => {
    expect(findNemo("N e m o is NEMO NeMo Nemo !")).toBe("I found Nemo at 8!")
  });
  test('3', () => {
    expect(findNemo("I am Nemo's dad Nemo senior .")).toBe("I found Nemo at 5!")
  });
  test('4', () => {
    expect(findNemo("Oh, hello !")).toBe("I can't find Nemo :(")
  });
  test('5', () => {
    expect(findNemo("Is it Nemos, Nemona, Nemoor or Garfield?")).toBe("I can't find Nemo :(")
  });
  test('6', () => {
    expect(findNemo("Nemo is a clown fish, he has white and orange stripes. Nemo , come back!")).toBe("I found Nemo at 1!")
  });
})
