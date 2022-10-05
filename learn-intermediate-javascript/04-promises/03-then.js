const {checkInventory} = require('./library.js');

const order = [['sunglasses', 1], ['bags', 2]];

// Write your code below:
function handleSuccess(resolvedValue){
  console.log(resolvedValue);
};

function handleFailure(rejectionReason){
  console.log(rejectionReason);
};

checkInventory(order).then(handleSuccess, handleFailure);