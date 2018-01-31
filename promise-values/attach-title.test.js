const attachTitle = require('./attach-title');

describe('attachTitle', () => {
  test('should add \'DR.\' prefix', () => {
    expect(attachTitle('James')).toBe('DR. James');
  });
  test('should return a string', () => {
    expect(typeof attachTitle('')).toBe('string');
  });
});

