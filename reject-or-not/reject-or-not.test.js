const rejectOrNot = require('./reject-or-not');

describe('rejectOrNot', () => {
  test('should resolve to \'I FIRED\'', () => {
    expect(rejectOrNot).resolves.toBe('I FIRED');
  });
});

