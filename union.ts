type Point = {
  x: number;
  y: number;
};

function createPoint(pt: Point) {
  console.log(`Point created at (${pt.x}, ${pt.y})`);
}

createPoint({ x: 10, y: 5 });
