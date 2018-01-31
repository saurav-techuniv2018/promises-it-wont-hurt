const thenChaining = require('./then-chaining');

describe('thenChaining', () => {
  describe('first', () => {
    test('should return a Promise object', () => {
      const firstPromise = thenChaining.first();
      expect(firstPromise).toBeInstanceOf(Promise);
    });
    test('should resolve to some value', () => {
      const firstPromise = thenChaining.first();
      expect(firstPromise).resolves.toBe();
    });
  });
  describe('secondPromise', () => {
    test('should return a Promise object', () => {
      const secondPromise = thenChaining.second();
      expect(secondPromise).toBeInstanceOf(Promise);
    });
    test('should resolve to some value', () => {
      const secondPromise = thenChaining.first();
      expect(secondPromise).resolves.toBe();
    });
  });
});
