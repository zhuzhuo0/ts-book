function getUserInfo(user) {
    return user.age + "======" + user.userName;
}
var userObj = { age: 10, userName: "zhuzhu" };
function createSquare(config) {
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
var mySearch;
mySearch = function (source, subString) {
    var result = source.search(subString);
    if (result == -1) {
        return false;
    }
    else {
        return true;
    }
};
var Clock = /** @class */ (function () {
    function Clock(h, m) {
    }
    Clock.prototype.setTime = function (d) {
        this.currentTime = d;
    };
    return Clock;
}());
var interObj = {};
interObj.color = 'red';
interObj.isExtend = false;
interObj.sum = 20;
console.log(interObj);
var c;
c(10);
c.interval = 5;
c.reset();
