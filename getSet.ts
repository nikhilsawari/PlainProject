
class office {
    private _name : string;
    private _no: number

    // constructor(name: string, no: number){
    //     this._name = name;
    //     this._no = no
    // }

    get getname() {
        return this._name;
    }
    
    set setname(value: string){
        this._name = value
    }

}

// let o = new office("sd", 3)         //if param constructor is defined
let o = new office()
o.setname = "sdcsd"
console.log(o.getname)
