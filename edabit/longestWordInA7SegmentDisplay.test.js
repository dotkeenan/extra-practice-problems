const longest7SegmentWord = require('./longestWordInA7SegmentDisplay')
describe('Longest Word in a 7 Segment Display', () => {
  test('1', () => {
    expect(longest7SegmentWord(["knighthood", "parental", "fridge", "clingfilm"])).toBe('parental')
    })
  test('2', () => {
    expect(longest7SegmentWord(["coding", "crackers", "edabit", "celebration"])).toBe('celebration')
    })
  test('3', () => {
    expect(longest7SegmentWord(["velocity", "mackerel", "woven", "kingsmen"])).toBe('')
    })
  test('4', () => {
    expect(longest7SegmentWord(["embarrassment", "perceive", "front"])).toBe('front')
    })
  test('5', () => {
    expect(longest7SegmentWord(["truck", "accessible", "undermine", "unique", "tear", "cat", "avenue", "labour", "goat", "dance", "rise", "scale"])).toBe('accessible')
    })
  test('6', () => {
    expect(longest7SegmentWord(["act", "adjust", "proud", "battery", "tear", "beautiful", "avenue", "thoughtful", "victory", "mobile", "straight"])).toBe('thoughtful')
    })
  test('7', () => {
    expect(longest7SegmentWord(["fair", "tear", "truck"])).toBe('fair')
    })
  test('8', () => {
    expect(longest7SegmentWord(["scale", "pass", "act", "sector", "vain", "scale"])).toBe('sector')
    })
  test('9', () => {
    expect(longest7SegmentWord(["vegetarian", "unique", "sensitivity", "goat", "nature", "attract", "suntan", "mobile", "pillow", "economist", "arrest", "galaxy", "proud", "proud"])).toBe('attract')
    })
  test('10', () => {
    expect(longest7SegmentWord(["vat", "suntan", "murder", "dance", "course", "institution"])).toBe('institution')
    })
  test('11', () => {
    expect(longest7SegmentWord(["adjust", "garlic", "preoccupation", "nature", "garlic", "undermine", "pavement", "payment", "fair", "twin", "expertise", "pillow", "dance", "economist", "establish", "nervous", "sector"])).toBe('preoccupation')
    })
  test('12', () => {
    expect(longest7SegmentWord(["embarrassment", "bell", "obese", "width", "singer", "strikebreaker", "width", "preoccupation", "nervous"])).toBe('preoccupation')
    })
  test('12', () => {
    expect(longest7SegmentWord(["winner", "twin", "establish"])).toBe('establish')
    })
  test('12', () => {
    expect(longest7SegmentWord(["fair", "institution", "vegetarian", "electron", "suntan", "settle", "royalty", "bracket", "conductor", "blade", "camp", "potential", "human body"])).toBe('institution')
    })
  test('12', () => {
    expect(longest7SegmentWord(["width", "straight", "sign", "inspire", "lay", "pavement", "settle", "undermine", "cat", "labour", "adjust", "admire", "scramble", "pavement", "limited", "payment", "withdrawal", "full", "brave"])).toBe('straight')
    })
  test('12', () => {
    expect(longest7SegmentWord(["limited", "arrest", "harm", "tear", "vain", "bracket", "settle", "settle", "spine", "mobile", "potential", "cat", "winner", "tear"])).toBe('potential')
    })
  test('12', () => {
    expect(longest7SegmentWord(["front", "economist", "sector", "camp"])).toBe('sector')
    })
  test('12', () => {
    expect(longest7SegmentWord(["murder", "vain", "fair", "sign", "establish", "flow", "bell", "truck", "winner", "tear", "avenue", "move", "pillow", "murder", "gesture", "garlic", "unique", "brave", "pass", "avenue"])).toBe('establish')
    })
  test('12', () => {
    expect(longest7SegmentWord(["full", "suntan", "strikebreaker", "front", "truck", "vegetarian", "maze", "shine", "potential", "conductor", "width", "economist", "lounge", "pound", "camp", "sensitivity"])).toBe('potential')
    })
  test('12', () => {
    expect(longest7SegmentWord(["party", "width", "sector", "withdrawal", "limited", "victory", "presidency", "pillow", "beautiful", "shine"])).toBe('presidency')
    })
  test('12', () => {
    expect(longest7SegmentWord(["front", "mirror", "shine", "spine", "lay", "obese", "shine", "singer", "straight", "establish", "embarrassment", "admire", "vain", "presidency", "winner", "dance", "inject", "proud", "establish"])).toBe('presidency')
    })
  test('12', () => {
    expect(longest7SegmentWord(["pound", "scramble", "labour", "vegetarian", "obese", "delicate", "dictionary", "act", "nature", "shine"])).toBe('dictionary')
    })
  test('12', () => {
    expect(longest7SegmentWord(["goat", "institution", "move", "twin", "lay", "embarrassment", "labour"])).toBe('institution')
    })
  test('12', () => {
    expect(longest7SegmentWord(["victory", "embarrassment", "truck", "presidency", "maze", "truck"])).toBe('presidency')
    })
  test('12', () => {
    expect(longest7SegmentWord(["accessible", "embarrassment", "embarrassment", "extort", "width", "garlic"])).toBe('accessible')
    })
  test('12', () => {
    expect(longest7SegmentWord(["shine", "admire"])).toBe('shine')
    })
  test('12', () => {
    expect(longest7SegmentWord(["sector", "conductor", "arrest", "inspire", "harm", "grain", "tear", "vat", "shine", "course", "admire", "shine", "attract", "victory"])).toBe('conductor')
    })
  test('12', () => {
    expect(longest7SegmentWord(["rise", "dance", "dance", "undermine", "vain", "blade", "pillow", "economist", "freight", "goat", "pavement"])).toBe('freight')
    })
  test('12', () => {
    expect(longest7SegmentWord(["institution", "pillow", "straight", "suntan", "presidency", "exception", "expertise", "sensitivity"])).toBe('institution')
    })
})
