const parsePromised = require('./parse-promised');

describe('parsePromised', () => {
  test('should return a promise', () => {
    expect(parsePromised()).toBeInstanceOf(Promise);
  });
  describe('should resolve with valid object', () => {
    test('when valid json string is passed', () => {
      const jsonString = `{
        "name": "Michael"
      }`;

      expect(parsePromised(jsonString)).resolves.toEqual({
        name: 'Michael',
      });
    });
  });
  describe('should reject with error', () => {
    test('when json string contains invalid characters', () => {
      const jsonString = `\\{
        'name': 'Michael'
      }`;

      expect(parsePromised(jsonString)).rejects.toBeInstanceOf(Error);
    });
  });
});

