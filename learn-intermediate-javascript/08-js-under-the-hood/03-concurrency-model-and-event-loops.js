// Javascript is a single threaded programming language, which means it has a single call stack and can do one thing at a time.
// The call stack is a mechanism so the interpreter knows its place in a script. 
// When a script calls a function, the interpreter adds it on the top of the call stack. 
// When the current function is finished, the interpreter takes it off the stack (Last In, First Out).

// Event Loop: 
// This is where all these things come together. 
// The event loop simply checks the call stack, and if it is empty 
// (which means there are no functions in the stack) 
// it takes the oldest callback from the callback queue and pushes it into the call stack which eventually executes the callback.