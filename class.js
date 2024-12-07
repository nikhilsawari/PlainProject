var firstClass = /** @class */ (function () {
    function firstClass(sname, id) {
        var _this = this;
        this.displaye = function () {
            console.log(_this.surname + " and " + _this.myId);
        };
        this.surname = sname,
            this.myId = id;
    }
    return firstClass;
}());
var f = new firstClass("awari", 22);
f.displaye();
