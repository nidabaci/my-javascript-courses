// const {checkInventory} = require('./library.js');

// const order = [['sunglasses', 1], ['bags', 2]];

// // Write your code below:
// function handleSuccess(resolvedValue){
//   console.log(resolvedValue);
// };

// function handleFailure(rejectionReason){
//   console.log(rejectionReason);
// };

// checkInventory(order).then(handleSuccess, handleFailure);

// const {checkInventory} = require('./library.js');

// const order = [['sunglasses', 1], ['bags', 2]];

// const handleSuccess = (resolvedValue) => {
//   console.log(resolvedValue);
// };

// const handleFailure = (rejectReason) => {
//   console.log(rejectReason);
// };

// // Write your code below:
// checkInventory(order)
// 	.then(handleSuccess)
// 	.catch(handleFailure);

// const {checkInventory, processPayment, shipOrder} = require('./library.js');

// const order = {
//   items: [['sunglasses', 1], ['bags', 2]],
//   giftcardBalance: 79.82
// };

// checkInventory(order)
// .then((resolvedValueArray) => {
//   // Write the correct return statement here:
//  return processPayment(resolvedValueArray);
// })
// .then((resolvedValueArray) => {
//   // Write the correct return statement here:
//   return shipOrder(resolvedValueArray);
// })
// .then((successMessage) => {
//   console.log(successMessage);
// })
// .catch((errorMessage) => {
//   console.log(errorMessage);
// });

const {checkInventory, processPayment, shipOrder} = require('./library.js');

const order = {
  items: [['sunglasses', 1], ['bags', 2]],
  giftcardBalance: 79.82
};

// Refactor the code below:

checkInventory(order)
.then((resolvedValueArray) => {
  return processPayment(resolvedValueArray);
})
.then((resolvedValueArray) => {
  return shipOrder(resolvedValueArray);
})
.then((successMessage) => {
  console.log(successMessage);
});