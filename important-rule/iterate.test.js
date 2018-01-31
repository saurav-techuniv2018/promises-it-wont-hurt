const iterate = require('./iterate');

describe('iterate', () => {
  describe('should return undefined', () => {
    test('when Infinity is passed', () => {
      expect(iterate(Infinity)).toBe(undefined);
    });
  });

  describe('should return argument plus one ', () => {
    test('when a number is passed', () => {
      expect(iterate(8)).toBe(9);
    });
  });
});

