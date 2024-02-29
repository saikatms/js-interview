const arr = [5, 1, 3, 2, 6];

// map function transform an array

function double(x) {
  return x * 2;
}

function triple(x) {
  return x * 3;
}

const output = arr.map(double);
console.log(output);

// Filter // filter value inside an array
const arr2 = [5, 1, 3, 2, 6];

// filter odd value

const output2 = arr2.filter(isOdd);

function isOdd(x) {
  return x % 2;
}

// Reduce
let arr3 = [6, 2, 5, 4, 8];
function sum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}

const output3 = arr.reduce(function (acc, curr) {
  acc = acc + curr;
  return acc;
}, 0);

// const
