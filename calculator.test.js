
const expect = require('chai').expect;
const Calculator = require('./calculator.js');

describe('calculator.js with initial value 100', () => {
  it('should return 105', () => {
    const calcu = new Calculator(100);
    const result = calcu.add(5).number;
    expect(result).to.equal(105);
  });
  it('should return 95', () => {
    const calcu = new Calculator(100);
    const result = calcu.substract(5).number;
    expect(result).to.equal(95);
  });
  it('should return 500', () => {
    const calcu = new Calculator(100);
    const result = calcu.multiply(5).number;
    expect(result).to.equal(500);
  });
  it('should return 20', () => {
    const calcu = new Calculator(100);
    const result = calcu.divide(5).number;
    expect(result).to.equal(20);
  });
  it('should return 100', () => {
    const calcu = new Calculator(10);
    const result = calcu.square(2).number;
    expect(result).to.equal(100);
  });
  it('should return 10', () => {
    const calcu = new Calculator(100);
    const result = calcu.squareRoot().number;
    expect(result).to.equal(10);
  });
  it('should return 314', () => {
    const calcu = new Calculator(10);
    const result = calcu.circleArea().number;
    expect(result).to.equal(314);
  });
  it('should return 62', () => {
    const calcu = new Calculator(10);
    const result = Math.floor(calcu.circleRound().number);
    expect(result).to.equal(62);
  });
  it('should return 113.04', () => {
    const calcu = new Calculator(10);
    const result = calcu.add(10).substract(2).square(2).squareRoot()
      .circleRound().number;
    expect(result).to.equal(113.04);
  });
});
