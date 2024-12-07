

//tupple valie is fixed
//array is a dynamic

let person: [string, number] = ['nikhl', 22]
let user1: [string, number, boolean] = ['smane', 123, true]

console.log(user1[1])

let data:[string, number][] = [['mu', 100], ['nu', 200]]    //array of tuple

console.log(data[0][1])                                     //printing ssecond value of first tupul of array

let cust: [string, number] = ['apn', 22]

cust.push('vpn', 33);                           // after declairing we can add new values in same sequence
console.log(cust)