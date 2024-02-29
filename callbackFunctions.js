//Callback function

setTimeout(function () {
  console.log("Timer");
}, 2000);
function x(y) {
  console.log("Hi");
  y();
}
x(function y() {
  console.log("Y");
});
