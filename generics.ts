//functions
function funto<T>(arg:T): T{
    console.log(arg)
    
}

funto("shjdjcv")
funto<number>(12)               //no need to difine type but good practice
funto<boolean>(true)

//interface
interface intrf<T> {
    name: string;
    age: number;
    id: T
}

function getIntrf(obj: intrf<boolean>){
    console.log(obj.name+" "+obj.age+" "+obj.id)

}

getIntrf({name:"cs", age: 22, id: true})


//class
class createVal<T> {
    constructor(public key: T){}
}

let c = new createVal<number>(3)
let c1 = new createVal<string>("nsdc")
console.log(c.key, c1.key)