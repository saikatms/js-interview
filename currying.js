let multiply = function (x, y) {
  console.log(x * y);
};
let multiplyByTwo = multiply.bind(this, 2);
multiplyByTwo(5);

let multiplyByTwoAgain = multiply.bind(this, 2, 3);
multiplyByTwoAgain(5);

let multiplyByTwoPhirse = multiply.bind(this);
multiplyByTwoPhirse(2, 3);

let multiplyByThree = multiply.bind(this, 3);
multiplyByThree(5);

//Function Closure with currying
let multiplyClosure = function (x) {
  return function (y) {
    console.log(x * y);
  };
};
let multiplyByFour = multiplyClosure(4);
multiplyByFour(5);
