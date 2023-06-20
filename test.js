var a = 5

function test () {
  a = 02
  this.a = 23
  console.log(a)
  console.log(this.a)
  var a
}
test()
console.log(a)
// var a = '1'

// function test() {
//   var a = '2'
//   this.a = '3'
//   console.log(a)
//   // console.log(this.a)
// }
// test()
// new test()
// console.log(a)
