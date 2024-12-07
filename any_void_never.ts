
//any

// let val1: any = 'sdsed'
// val1 = 3756
// val1 = true

// function returnSomeVal(call :any): any {
//     console.log(call)
// }

// returnSomeVal("sdvjvbskjdv")
// returnSomeVal(35435)
// returnSomeVal(true)


// //void 
// let val2: void;

// val2 = 'sdcdsk'                 // error for void data type
// val2 = 37653
// val2 = undefined

// function myFun(): void {
//     return "sdhjvjsdj";             //error for void return type
//     return;
// }
// myFun()


//never

// let val3: never;

// val3 = 'sdccsdc'        //error for never type
// val3 = 336757263
// val3 = undefined

function myFun2(): never {
    // throw console.error("sdsvsdc sdcs");                //throws error
    while(true){
        console.log("infinite loop")
    }
}
myFun2()