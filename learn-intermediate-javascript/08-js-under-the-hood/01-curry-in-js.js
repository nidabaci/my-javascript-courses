// Currying is a functional programming technique  we can use to write code
//  that is modular, easy to test, and highly reusable. 
//  Functional programming is a declarative paradigm that emphasizes immutability 
//  and pure functions — meaning the function is side-effect free and 
//  for any given input it will always return the same output.

// Currying simply means evaluating functions with multiple arguments 
// and decomposing them into a sequence of functions with a single argument.

// In other terms, currying is when a function — instead of taking all arguments at one time — 
// takes the first one and returns a new function, 
// which takes the second one and returns a new function, 
// which takes the third one, etc. until all arguments are completed.

// Noncurried version//
const add = (a, b, c)=>{
    return a+ b + c
}
console.log(add(2, 3, 5)) // 10

// Curried version//
const addCurry =(a) => {
    return (b)=>{
        return (c)=>{
            return a+b+c
        }
    }
}
console.log(addCurry(2)(3)(5)) // 10