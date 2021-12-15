const v11 = new Vector(4,5,6);
const v22 = new MVector(4,5,6);

const va1 = new Vector(1,2,Math.PI);
const va2 = new MVector(1,2,Math.PI);

console.time();
for (let i = 0; i < 1000000; i++) {
  const x = va1.mul(10).add(v11).mul(Math.random()).mul(Math.E).scale(2);
  x.add(v11);
}
console.timeEnd();

console.time();
for (let i = 0; i < 1000000; i++) {
  const x = va2.mul(10).add(v22).mul(Math.random()).mul(Math.E).scale(2);
  x.add(v22);
}
console.timeEnd();

console.warn(0)

console.time();
for (let i = 0; i < 1000000; i++) {
  const x = va1.mul(10).add(v11).mul(Math.random()).mul(Math.E).scale(2);
  x.add(v11);
}
console.timeEnd();

console.time();
for (let i = 0; i < 1000000; i++) {
  const x = va2.mul(10).add(v22).mul(Math.random()).mul(Math.E).scale(2);
  x.add(v22);
}
console.timeEnd();

console.warn(0)


const vb1 = new Vector(1,2,Math.PI);
const vb2 = new MVector(1,2,Math.PI);

console.time();
for (let i = 0; i < 1000000; i++) {
  const x = vb1.mul(10).add(v11).mul(Math.random()).mul(Math.E).scale(2);
  x.add(v11);
}
console.timeEnd();

console.time();
for (let i = 0; i < 1000000; i++) {
  const x = vb2.mul(10).add(v22).mul(Math.random()).mul(Math.E).scale(2);
  x.add(v22);
}
console.timeEnd();

console.warn(0)


console.time();
for (let i = 0; i < 1000000; i++) {
  const x = vb1.mul(10).add(v11).mul(Math.random()).mul(Math.E).scale(2);
  x.add(v11);
}
console.timeEnd();

console.time();
for (let i = 0; i < 1000000; i++) {
  const x = vb2.mul(10).add(v22).mul(Math.random()).mul(Math.E).scale(2);
  x.add(v22);
}
console.timeEnd();
