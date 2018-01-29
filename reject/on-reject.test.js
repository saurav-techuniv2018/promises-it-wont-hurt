const onReject = require('./on-reject');


describe('onReject', () => {
  test('should call setTimeout once', () => {
    jest.useFakeTimers();
    onReject.then(undefined, () => {
      expect(setTimeout).toHaveBeenCalledTimes(1);
    });
  });
  test('should call setTimeout with duration as 300', () => {
    jest.useFakeTimers();
    onReject.then(undefined, () => {
      expect(setTimeout.mock.calls[0][1]).toBe(300);
    });
  });
  test('should reject promise for reason as \'REJECTED!\'', () => {
    onReject.then(undefined, (reason) => {
      expect(reason.message).toBe('REJECTED!');
    });
  });
  test('should reject with an error object', () => {
    onReject.then(undefined, (reason) => {
      expect(reason).toBeInstanceOf(Error);
    });
  });
});

