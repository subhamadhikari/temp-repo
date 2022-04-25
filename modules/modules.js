

const names = require('./modules1')
// const {john,peter,test} = require('./modules1')   //way to deconstruct
const sayHi = require('./modules2')
// const values = require('./modules3')
const {items , human} = require('./modules3')


console.log(names)
sayHi("Subham")
sayHi(names.peter)
sayHi(names.john)
// test()
// console.log(values.human.name)
console.log(items)
console.log(human.passionate)