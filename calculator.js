

class Calculator {
  // write your code here
  constructor(inputNumber) {
    this.number = inputNumber;
  }

  add(addNumber) {
    this.number = this.number + addNumber;
    return this;
  }

  substract(substractNumber) {
    this.number = this.number - substractNumber;
    return this;
  }

  multiply(multiplyNumber) {
    this.number = this.number * multiplyNumber;
    return this;
  }

  divide(divideNumber) {
    this.number = this.number / divideNumber;
    return this;
  }

  square(powNumber) {
    this.number = this.number ** powNumber;
    return this;
  }

  squareRoot() {
    this.number = Math.sqrt(this.number);
    return this;
  }

  circleArea() { // menghitung luas dimana this.number sebagai radius
    this.number = 3.14 * this.number * this.number;
    return this;
  }

  circleRound() { // mengitung keliling dimana this.number sebagai radius
    this.number = 2 * 3.14 * this.number;
    return this;
  }
}

module.exports = Calculator;

/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/

module.exports = Calculator;
// const calculator = new Calculator(10);
// console.log(calculator.add(10).substract(2).square(2).squareRoot()
//   .circleRound().number);
