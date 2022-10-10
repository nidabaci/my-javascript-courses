// Promises are JavaScript objects that represent the eventual result of an asynchronous operation.
// Promises can be in one of three states: pending, resolved, or rejected.
// A promise is settled if it is either resolved or rejected.
// We construct a promise by using the new keyword and passing an executor function to the Promise constructor method.
// setTimeout() is a Node function which delays the execution of a callback function using the event-loop.
// We use .then() with a success handler callback containing the logic for what should happen if a promise resolves.
// We use .catch() with a failure handler callback containing the logic for what should happen if a promise rejects.
// Promise composition enables us to write complex, asynchronous code that’s still readable. We do this by chaining multiple .then()‘s and .catch()‘s.
// To use promise composition correctly, we have to remember to return promises constructed within a .then().
// We should chain multiple promises rather than nesting them.
// To take advantage of concurrency, we can use Promise.all().

const inventory = {
    sunglasses: 1900,
    pants: 1088,
    bags: 1344
  };
  
  // Write your code below:
  const myExecutor = (resolve, reject) => {
      if (inventory.sunglasses > 0) {
          resolve('Sunglasses order processed.');
      } else {
          reject('That item is sold out.');
      }
  };
  
  const orderSunglasses = () => {
      return new Promise(myExecutor);
  };
  
  const orderPromise = orderSunglasses();
  
  console.log(orderPromise);                      