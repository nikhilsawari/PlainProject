var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name,
            this.age = age;
    }
    return Person;
}());
var p1 = new Person("nikhl", 22);
console.log(p1.name); //name not accessible outside own class
