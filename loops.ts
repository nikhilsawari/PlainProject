
let numArr: number[] = [11, 22, 33, 44]

for (let i = 0; i < numArr.length; i++) {
    const element = numArr[i];
    console.log(numArr[i])
    // break;
}

for(let i of numArr) {
    console.log(i);                 //prints the values of array
}

for(let i in numArr) {
    console.log(i)                  //prints the index in array
    console.log(numArr[i])
}

//while
let p =10;
while(p > 3) {
    p--;
    console.log(p)
}


//do while
do{
p++
console.log(p)
}while(p<=22)