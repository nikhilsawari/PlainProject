

class proClass {
    protected name: string;
    protected age: number

        constructor(name: string, age: number) {
            this.name = name,
            this.age = age
        }
        
    public getName() {
        return this.name
    }
}

class newProClass extends proClass {
    
    constructor(name: string, age: number) {
        super(name, age)
    }

    changename(newName: string) {
         return this.name = newName 
    }
}

let pro = new proClass("nuk", 23)
let newPro = new newProClass("nkk", 44)

console.log(pro.getName())
console.log(newPro.getName())
console.log(newPro.changename("asd"))
