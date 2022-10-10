//1. What value is printed to the console?
const asyncHello = new Promise((resolve, reject) => { 
    setTimeout(resolve, 1000, 'Hello!'); 
}); 
console.log(typeof asyncHello);
// ANSWER: Object

//2. True or False: promise1 and promise2 both produce the same output.
const examplePromise1 = new Promise((resolve, reject) => { reject('Uh-oh!') });
const examplePromise2 = new Promise((resolve, reject) => { reject('Uh-oh!') });
 
// const onFulfill = value => {console.log(value)};
// const onReject = reason => {console.log(reason)};
 
const promise1 = examplePromise1.then(onFulfill, onReject);
const promise2 = examplePromise2.then(onFulfill).catch(onReject);
// ANSWER: TRUE

//3. What state will this promise be in after 0 seconds?
const examplePromise = () => {
    return new Promise((resolve, reject) => {
      if (true) {
        setTimeout( () => resolve('success'), 3000);
      } else {
        setTimeout( () => resolve('failed'), 5000);
      }
    });
  };
//   ANSWER: PENDING

//4. True or False: The .then() method returns a Promise.
// ANSWER: TRUE

//6. What is the fulfilled value of Promise.all()?
// ANSWER: AN ARRAY

//7. Which of the executor function’s parameters is called if the asynchronous task completes successfully?
const example = new Promise( (function1, function2) => { ___ } );
// ANSWER: FUNCTION 1


// 8. What is the value of the argument that is passed to the onReject()?
let onFulfill = value => {console.log(value)};
let onReject = reason => {console.log(reason)};
 
const promise =  new Promise( (resolve, reject) => {
  if (false) {
    resolve('success value');
  } else {
    reject();
  }
});
 
promise.then(onFulfill, onReject);
// ANSWER: undefined

//9. Which one of the following is NOT a state that a Promise resolves to?
// ANSWER: Undefined

// How many parameters does a Promise constructor take?
// ANSWER: 1

// What will be printed to the console after running the code provided?
let link = state => {
    return new Promise(function(resolve, reject) {
      if (state) { 
        resolve('success'); 
      } else { 
        reject('error');
      }
    });
  }
   
  let promiseChain = link(true);
   
  promiseChain
  .then( data => {  
     console.log(data + " 1");
     return link(true);
  })
  .then( data => {
     console.log(data+ " 2");
     return link(true);
  });

//   ANSWER: success 1 success 2