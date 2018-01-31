const index = require('./index');

describe('index', () => {
  test('should call console.log once', () => {
    console.log = jest.fn();
    index()
      .then(() => {
        expect(console.log.mock.calls.length).toBe(1);
      });
  });
  test('should call console.log with \'DR. MANHATTAN\'', () => {
    console.log = jest.fn();
    index()
      .then(() => {
        expect(console.log).toHaveBeenCalledWith('DR. MANHATTAN');
      });
  });
});

