const solution = require('./solution');

describe('solution', () => {
  describe('thenCallback', () => {
    test('should be called 5 times', () => {
      const thenCallback = jest.fn();
      solution(thenCallback, () => { })
        .then(() => {
          expect(thenCallback.mock.calls.length).toBe(5);
        });
    });
    test('should be called with 1, 2, 3, 4, 5', () => {
      const thenCallback = jest.fn();
      solution(thenCallback, () => { })
        .then(() => {
          expect(thenCallback.mock.calls[0][0]).toBe(1);
          expect(thenCallback.mock.calls[0][0]).toBe(2);
          expect(thenCallback.mock.calls[0][0]).toBe(3);
          expect(thenCallback.mock.calls[0][0]).toBe(4);
          expect(thenCallback.mock.calls[0][0]).toBe(5);
        });
    });
  });
  describe('catchCallback', () => {
    test('should be called once', () => {
      const catchCallback = jest.fn();
      solution(() => { }, catchCallback)
        .then(() => {
          expect(catchCallback.mock.calls.length).toBe(1);
        });
    });
    test('should be called with \'OH NOES\'', () => {
      const catchCallback = jest.fn();
      solution(() => { }, catchCallback)
        .then(() => {
          expect(catchCallback.mock.calls[0][0]).toBe('OH NOES');
        });
    });
  });
});

