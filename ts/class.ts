// easy constructor
class Employee {
    fullName: string;
    constructor(firstName: string, lastName: string) { }
}
var employee = new Employee('zhu', 'zhu');
employee.fullName = "zhuzhu";

// super
class Person {
    userName: string;
    constructor(paramVal: string) {
        this.userName = paramVal;
    }
    getPersonInfo(age: number = 120): string {
        return this.userName;
    }
}

class Student1 extends Person {
    constructor(username: string) {
        super(username);
    }
    getPersonInfo(age = 100) {
        var superMsg = super.getPersonInfo(age);
        return this.userName + '=====' + age + '======' + superMsg;
    }
}

class Student2 extends Person {
    constructor(username: string) {
        super(username);
    }
    getPersonInfo(age = 180) {
        var superMsg = super.getPersonInfo(age);
        return this.userName + '=====' + age + '======' + superMsg;
    }
}

var student1 = new Student1('zhuzhu');
var student2 = new Student2('haha');
console.log(student1.getPersonInfo());
console.log(student2.getPersonInfo(10));

// public private
class MyAnimal {
    private name: string;
    constructor(private theName: string) {
        this.name = theName;
    }
    getMsg(name: string): string {
        return this.name = name;
    }
}

class Rhino extends MyAnimal {
    constructor() {
        super("犀牛");
    }
    getMsg(name: string): string {
        return name;
    }
}

class Employees {
    public name: string;
    constructor(theName: string) {
        this.name = theName;
    }
}

var employ = new Employees('nihao');
console.log(employ.name);

class Greeter {
    static standardGreeting = "Hello, there";
    greeting: string;
    greet() {
        if (this.greeting) {
            return "Hello, " + this.greeting;
        }
        else {
            return Greeter.standardGreeting;
        }
    }
}
var greeter1: Greeter;
greeter1 = new Greeter();
console.log(greeter1.greet());
var greeterMaker: typeof Greeter = Greeter;
greeterMaker.standardGreeting = "Hey there!";
var greeter2: Greeter = new greeterMaker();
console.log(greeter2.greet());