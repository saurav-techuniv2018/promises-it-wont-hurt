const main = require('./main');

describe('main', () => {
  describe('should call then callback once', () => {
    test('when valid json string is passed', () => {
      const jsonString = `{
        'name': 'Michael'
      }`;

      const thenCallback = jest.fn();
      main(jsonString, thenCallback, null).then(() => {
        expect(thenCallback.mock.calls.length).toBe(1);
      })
        .catch();
    });
    test('when invalid json string is passed', () => {
      const jsonString = `\\{
        'name': 'Michael'
      }`;

      const catchCallback = jest.fn();
      main(jsonString, null, catchCallback).then(() => {
        expect(catchCallback.mock.calls.length).toBe(1);
      }).catch();
    });
  });
  describe('should call then callback with correct argument', () => {
    test('when valid json string is passed', () => {
      const jsonString = `{
        'name': 'Michael'
      }`;

      const thenCallback = jest.fn();
      main(jsonString, thenCallback, null).then(() => {
        expect(thenCallback.mock.calls[0][1]).toEqual({
          name: 'Michael',
        });
      }).catch();
    });
    test('when invalid json string is passed', () => {
      const jsonString = `\\{
        'name': 'Michael'
      }`;

      const catchCallback = jest.fn();
      main(jsonString, catchCallback, null).then(() => {
        expect(catchCallback.mock.calls[0][1]).toBe('Unexpected token \\ in JSON at position 0');
      }).catch();
    });
  });
});

