// Which of the following is useful for awaiting multiple promises where all are required but none depend on each other to execute?
// ANSWER: PROMISE.ALL()

// What will this code print to the console?

async function myFunction() { 
    return 'hello world';
  }
   
  myFunction()
  .then((resolvedValue) => {
    console.log(resolvedValue);
  })

//  ANSWER: HELLO WORLD

// True or False: the async...await syntax has functionality that cannot be accomplished by native promises.
// FALSE

// Given that firstPromise(), secondPromise(), and thirdPromise() do not depend on each other to execute, what isn’t ideal about the provided code?
async function threePromises() {
    let first = await firstPromise();
    let second = await secondPromise(); 
    let third = await thirdPromise();
    console.log(first, second, third);
  }

// ANSWER: Using await halts the execution...


// What purpose does the async keyword serve?
// A keyword which indicated an asynchronous func

// Which of the following is NOT a benefit of the async...await syntax?
// It causes promises to resolve faster

// What purpose does the await keyword serve?
// Is an operatior used inside an async function...


// What does the function example() return?
async function example() { }

// ANSWER: A promise