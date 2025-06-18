// const user = {
//   name: "shohag",
//   age: 27,
// };
// // user.location;
// // let msg = "Hello World";
// console.log(user.name);

// const greet = (person, date) => {
//   console.log(`Hello ${person}, today is ${date}`);
// };
// greet("shohag", 16);

interface User {
  name: string;
  age: number;
}

class UserAccount {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
const user: User = new UserAccount("shohag", 27);

// union type
const wrapInArray = (obj: string | string[]) => {
  if (typeof obj === "string") {
    return [obj];
  }
  return obj;
};

interface Point {
  x: number;
  y: number;
}

function logPoint(p: Point) {
  console.log(`x: ${p.x}, y: ${p.y}`);
}

const point = { x: 10, y: 20 };
logPoint(point);
