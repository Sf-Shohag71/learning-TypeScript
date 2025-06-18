// Object Types
function printCoord(pt: { x: number; y: number }) {
  //   console.log(`The coordinate's x value is ${pt.x}`);
  //   console.log(`The coordinate's y value is ${pt.y}`);
}
printCoord({ x: 3, y: 7 });

// Optional Properties
function printOpt(pt: { x: number; y?: number }) {
  //   console.log(`The coordinate's x value is ${pt.x}`);
  // console.log(`The coordinate's y value is ${pt.y}`);
}
printOpt({ x: 3 });

function printFullName(obj: { first: string; last?: string }) {
  //   console.log(obj.last?.toUpperCase());
  if (obj.last !== undefined) {
    console.log(obj.first.toUpperCase() + " " + obj.last.toUpperCase());
  }
}
printFullName({ first: "John", last: "Doe" });
// start from here
