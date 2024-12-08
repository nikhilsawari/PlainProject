
class Person {
    private name: string;
    public age: number

    constructor(name: string, age: number) {
        this.name = name,
        this.age = age
    }

    // chaging(myname) {
    //     this.name = myname
    // }
}

let p1 = new Person("nikhl", 22)

console.log(p1.name)            //name not accessible outside own class