interface IUserInfo {
    age: any;
    userName: string;
}

function getUserInfo(user: IUserInfo): string {
    return user.age + "======" + user.userName;
}

var userObj = { age: 10, userName: "zhuzhu" };

// $(function () {
//     console.log(getUserInfo(userObj));
// });

interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
    var newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = newSquare.area * config.width;
    }
    return newSquare;
}

var mySquare1 = createSquare({ color: 'red' });
// var mySquare2 = createSquare({ color1: 'white' });
console.log(mySquare1);
// console.log(mySquare2);

interface searchFunt {
    (source: string, subString: string): boolean;
}

var mySearch: searchFunt;
mySearch = function (source: string, subString: string) {
    var result = source.search(subString);
    if (result == -1) {
        return false;
    } else {
        return true;
    }
}

interface IClock {
    currentTime: Date;
    setTime(d: Date);
}

interface IClock1 {
    new(hour: number, minute: number);
}

class Clock implements IClock {
    currentTime: Date;
    constructor(h: number, m: number) {

    }
    setTime(d: Date) {
        this.currentTime = d;
    }
}

// class Clock1 implements IClock1 {
//     currentTime: Date;
//     constructor(h: number, m: number) { }
// }

// var cs: IClock1 = Clock1;
// var newClock = new cs(7, 30);
// console.log(newClock);

interface inter {
    color: string;
}

interface parentInter {
    sum: number;
}

interface childInter extends inter, parentInter {
    isExtend: boolean;
}

var interObj = <childInter>{};
interObj.color = 'red';
interObj.isExtend = false;
interObj.sum = 20;
console.log(interObj);

// hybrid types
interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}

var c: Counter;
c(10);
c.interval = 5;
c.reset();



