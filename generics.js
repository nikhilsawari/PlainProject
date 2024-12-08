//functions
function funto(arg) {
    console.log(arg);
}
funto("shjdjcv");
funto(12); //no need to difine type but good practice
funto(true);
function getIntrf(obj) {
    console.log(obj.name + " " + obj.age + " " + obj.id);
}
getIntrf({ name: "cs", age: 22, id: true });
//class
var createVal = /** @class */ (function () {
    function createVal(key) {
        this.key = key;
    }
    return createVal;
}());
var c = new createVal(3);
var c1 = new createVal("nsdc");
console.log(c.key, c1.key);
