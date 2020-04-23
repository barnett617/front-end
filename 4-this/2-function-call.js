function func () {
    console.log(this);
    console.log(this === globalThis);
    // true
}
func();

// node
// Object [global] {
//     global: [Circular],
//     clearInterval: [Function: clearInterval],
//     clearTimeout: [Function: clearTimeout],
//     setInterval: [Function: setInterval],
//     setTimeout: [Function: setTimeout] { [Symbol(util.promisify.custom)]: [Function] },
//     queueMicrotask: [Function: queueMicrotask],
//     clearImmediate: [Function: clearImmediate],
//     setImmediate: [Function: setImmediate] {
//       [Symbol(util.promisify.custom)]: [Function]
//     }
//   }

// browser

// Window {parent: Window, opener: null, top: Window, length: 0, frames: Window, …}