// Accidentally introducing memory leaks into your application 
// can be as easy as either of these scenarios:

// Adding an event listener but never removing it
// Adding variables to the global object



// To find the source of memory issues, we have to consider questions like:

// From where was memory allocated?
// Why wasn’t some piece of memory garbage collected?
// How is memory usage growing over time?


// Chrome’s Developer Tools, “DevTools”, provides information on how memory is being used.
// There are a few different tools available in the Memory Inspector:

// Heap Snapshot: This tool shows you how memory is distributed among a page’s JavaScript objects and related DOM nodes.
// Allocation instrumentation on timeline: This tool shows JavaScript memory allocations over time, and can be used to isolate memory leaks.
// Allocation sampling: We can use this to record memory allocations using a sampling method. This tool is best for long-running operations.