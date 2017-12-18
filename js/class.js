var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// easy constructor
var Employee = /** @class */ (function () {
    function Employee(firstName, lastName) {
    }
    return Employee;
}());
var employee = new Employee('zhu', 'zhu');
employee.fullName = "zhuzhu";
// super
var Person = /** @class */ (function () {
    function Person(paramVal) {
        this.userName = paramVal;
    }
    Person.prototype.getPersonInfo = function (age) {
        if (age === void 0) { age = 120; }
        return this.userName;
    };
    return Person;
}());
var Student1 = /** @class */ (function (_super) {
    __extends(Student1, _super);
    function Student1(username) {
        return _super.call(this, username) || this;
    }
    Student1.prototype.getPersonInfo = function (age) {
        if (age === void 0) { age = 100; }
        var superMsg = _super.prototype.getPersonInfo.call(this, age);
        return this.userName + '=====' + age + '======' + superMsg;
    };
    return Student1;
}(Person));
var Student2 = /** @class */ (function (_super) {
    __extends(Student2, _super);
    function Student2(username) {
        return _super.call(this, username) || this;
    }
    Student2.prototype.getPersonInfo = function (age) {
        if (age === void 0) { age = 180; }
        var superMsg = _super.prototype.getPersonInfo.call(this, age);
        return this.userName + '=====' + age + '======' + superMsg;
    };
    return Student2;
}(Person));
var student1 = new Student1('zhuzhu');
var student2 = new Student2('haha');
console.log(student1.getPersonInfo());
console.log(student2.getPersonInfo(10));
// public private
var MyAnimal = /** @class */ (function () {
    function MyAnimal(theName) {
        this.theName = theName;
        this.name = theName;
    }
    MyAnimal.prototype.getMsg = function (name) {
        return this.name = name;
    };
    return MyAnimal;
}());
var Rhino = /** @class */ (function (_super) {
    __extends(Rhino, _super);
    function Rhino() {
        return _super.call(this, "犀牛") || this;
    }
    Rhino.prototype.getMsg = function (name) {
        return name;
    };
    return Rhino;
}(MyAnimal));
var Employees = /** @class */ (function () {
    function Employees(theName) {
        this.name = theName;
    }
    return Employees;
}());
var employ = new Employees('nihao');
console.log(employ.name);
var Greeter = /** @class */ (function () {
    function Greeter() {
    }
    Greeter.prototype.greet = function () {
        if (this.greeting) {
            return "Hello, " + this.greeting;
        }
        else {
            return Greeter.standardGreeting;
        }
    };
    Greeter.standardGreeting = "Hello, there";
    return Greeter;
}());
var greeter1;
greeter1 = new Greeter();
console.log(greeter1.greet());
var greeterMaker = Greeter;
greeterMaker.standardGreeting = "Hey there!";
var greeter2 = new greeterMaker();
console.log(greeter2.greet());
