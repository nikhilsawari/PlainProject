// function newFun1() {
//     console.log("hello")
// }
// newFun1()
// function newFun2(value1: number, value2): number {
//     console.log(value1 + value2)
//     return value1 + value2;
// }
// let plus = newFun2(21, 43)
// console.log(plus)
// Anonymous function
var numberVal = function () {
    return 11;
};
var printval = numberVal();
console.log(printval);
var anotherval = function (a, b) {
    return a + b;
};
var takeval = anotherval(1, 4);
console.log(takeval);
