const greet = require('./greet');


describe(greet.name, () => {
  test('should call console.log function with \'TIMED OUT!\'', (done) => {
    console.log = jest.fn();
    greet();
    setTimeout(() => {
      expect(console.log).toHaveBeenCalledWith('TIMED OUT!');
      done();
    }, 300);
  });
  test('should call the setTimeout function once', () => {
    jest.useFakeTimers();
    greet();
    expect(setTimeout).toHaveBeenCalledTimes(1);
  });
  test('should call setTimeout with 300 as duration', () => {
    jest.useFakeTimers();
    greet();
    expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 300, 'TIMED OUT!');
  });
});

