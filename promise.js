// Callback Hell
// Inversion of Control
// const cart = ["shirt", "kurta", "pant"];
// createOrder(cart, function (orderId) {
//   proceedToPayment(orderId);
// });

// const promise = createOrder(cart);
// // this line return a promise... promise is nothing but a empty object... promise obj will be filed data automatically  after whatever async time it takes..
// promise.then(function (orderId) {
//   proceedToPayment(orderId);
// });

// Deep

// Promise is an object which represent eventual completion or failure of an asynchronous operation
// const GITHUB_API = "https://api.github.com/users/saikatms";
// const user = fetch(GITHUB_API);
// console.log(user);
// user.then(function (data) {
//   console.log(data);
// });

const user = {
  data: "saikat",
};
user.data = "ss";
console.log(user);
