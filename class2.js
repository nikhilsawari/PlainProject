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
var user = /** @class */ (function () {
    function user(name, age) {
        this.name = name,
            this.age = age;
    }
    return user;
}());
var MyUser = /** @class */ (function (_super) {
    __extends(MyUser, _super);
    function MyUser(name, age, height) {
        var _this = _super.call(this, name, age) || this;
        _this.height = height;
        return _this;
    }
    return MyUser;
}(user));
var u = new user("Nikhiklk", 22);
var u1 = new MyUser("nik", 23, 6);
console.log(u.name);
console.log(u1.name);
console.log(u1.height);
