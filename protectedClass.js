var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var proClass = /** @class */ (function () {
    function proClass(name, age) {
        this.name = name,
            this.age = age;
    }
    proClass.prototype.getName = function () {
        return this.name;
    };
    return proClass;
}());
var newProClass = /** @class */ (function (_super) {
    __extends(newProClass, _super);
    function newProClass(name, age) {
        return _super.call(this, name, age) || this;
    }
    newProClass.prototype.changename = function (newName) {
        return this.name = newName;
    };
    return newProClass;
}(proClass));
var pro = new proClass("nuk", 23);
var newPro = new newProClass("nkk", 44);
console.log(pro.getName());
console.log(newPro.getName());
console.log(newPro.changename("asd"));
