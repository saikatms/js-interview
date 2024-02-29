// function x() {
//   console.log("Namaste");
// }

// function y(x) {
//   x();
// }

// y(x());

const area = function (radius) {
  return Math.PI * radius * radius;
};

let redius = [1, 2, 3, 4];
Array.prototype.calculate = function (logic) {
  let output = [];
  for (let i = 0; i < this.length; i++) {
    output.push(logic(this[i]));
  }
  return output;
};

console.log(redius.calculate(area));
