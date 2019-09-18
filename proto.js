function func() {}
console.log(func.prototype.__proto__ === Object.prototype) // true
console.log(func.prototype === func.__proto__) // false