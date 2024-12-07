

let marketval: any = 123;

let newMarketVal = <number>marketval+100;
console.log(newMarketVal)

let someText = "my name is nikhl"

someText = (someText as string)
console.log(someText)
console.log(someText.length)

let statuss: any = true;
statuss as boolean

if (statuss == true) {
    console.log("true")
}