// function x() {
//   var a = 7;
//   function y() {
//     console.log(a);
//   }
//   // y();
//   return y;
// }
// let z = x();
// console.log(z);
// z();

// Uses of closures:
//   - Module Design Patterns
//   - Currying
//   - Function Like once
//   - Memorize
//   - Maintaining state in async world
//   - setTimeouts
//   - Iterators

// Closure + setTimeout;

// function closureFun() {
//   for (var i = 0; i < 5; i++) {
//     function x(params) {
//       setTimeout(function () {
//         console.log(">>>", params);
//       }, params * 1000);
//     }
//     x(i);
//   }
// }
// closureFun();

function outest() {
  var c = 20;
  function outer(b) {
    function inner() {
      console.log(a, b, c);
    }
    let a = 10;
    return inner;
  }
  return outer;
}
// let a = 100;

var closure = outest()("Hello");
closure();
