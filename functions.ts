

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

let numberVal = function(): number {
    return 11;
}

let printval = numberVal();
console.log(printval)

let anotherval = function(a: number, b: number) {
    return a+b
}

let takeval = anotherval(1, 4);
console.log(takeval)