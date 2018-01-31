const manhattan = require('./manhattan');

describe('manhattan', () => {
  test('should return a Promise', () => {
    expect(manhattan).toBeInstanceOf(Promise);
  });
  test('should resolve to \'MANHATTAN\'', () => {
    expect(manhattan).resolves.toBe('MANHATTAN');
  });
});

