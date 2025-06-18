// const user = {
//   name: "shohag",
//   age: 27,
// };
// // user.location;
// // let msg = "Hello World";
// console.log(user.name);
var UserAccount = /** @class */ (function () {
    function UserAccount(name, age) {
        this.name = name;
        this.age = age;
    }
    return UserAccount;
}());
var user = new UserAccount("shohag", 27);
// union type
var wrapInArray = function (obj) {
    if (typeof obj === "string") {
        return [obj];
    }
    return obj;
};
function logPoint(p) {
    console.log("x: ".concat(p.x, ", y: ").concat(p.y));
}
var point = { x: 10, y: 20 };
logPoint(point);
// Object Types
function printCoord(pt) {
    console.log("The coordinate's x value is ".concat(pt.x));
    console.log("The coordinate's y value is ".concat(pt.y));
}
printCoord({ x: 3, y: 7 });
// Optional Properties
function printOpt(pt) {
    console.log("The coordinate's x value is ".concat(pt.x));
    console.log("The coordinate's y value is ".concat(pt.y));
}
printOpt({ x: 3 });
