// 1-mashq
let arr = [1,2,3];
let res = arr.map(x=>x*x);
console.log(res);
// 2-mashq
let arr = [4,1,7];
console.log(Math.min(...arr));
// 3-mashq
let arr = [1,2,2,3];
let res = [...new Set(arr)];
console.log(res);
// 4-mashq
let s = "hello";
console.log(s.includes("e"));
// 5-mashq
let n = 6;
let a = 0, b = 1;

for(let i=0;i<n;i++){
  console.log(a);
  let temp = a + b;
  a = b;
  b = temp;
}
