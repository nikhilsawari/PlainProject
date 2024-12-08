class user {
    public name: string;
    public age: number

    constructor(name, age) {
        this.name = name,
        this.age = age
    }
}

class MyUser extends user {
    public height: number;

    constructor(name: string, age: number, height: number) {
        super(name, age);
        this.height = height;
        
    }
}

let u = new user("Nikhiklk", 22);
let u1 = new MyUser("nik", 23, 6)

console.log(u.name)
console.log(u1.name)
console.log(u1.height)