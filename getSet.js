var office = /** @class */ (function () {
    function office() {
    }
    Object.defineProperty(office.prototype, "getname", {
        // constructor(name: string, no: number){
        //     this._name = name;
        //     this._no = no
        // }
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(office.prototype, "setname", {
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    return office;
}());
// let o = new office("sd", 3)         //if param constructor is defined
var o = new office();
o.setname = "sdcsd";
console.log(o.getname);
