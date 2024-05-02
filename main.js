// 1- birinchi
//   let a = +prompt("");
//   let n = +prompt("");
//   function power() {
//     let result = 1;

//     for (let i = 0; i < n; i++) {
//       result *= a;
//     }

//     return result;
//   }

//   let result = power(a, n);
//   console.log(result);
// 2 - ikkinchi;
// {
//   let a = +prompt("birinchi sonni kiriting");
//   let b = +prompt("ikkinchi sonni kiriting");
//   function power() {
//     let arfimitik = (a + b) / 2;
//     let geometrigi = Math.sqrt(a * b);
//     return [arfimitik, geometrigi];
//   }
//   let sum = power(a, b);
//   console.log("birinchi son ");
//   console.log("ikkinchi son");
//   console.log("arfimitik" + sum[2]);
//   console.log("geometrigi" + sum[4]);
// }
// 2 ikkinchi
// let a = +prompt("birinchi sonin kiriting ");
// let b = +prompt("ikkinchi sonin kiriting");
// function maqk() {
//   let arfimitigi = (a + b) / 2;
//   let geiometrigi = Math.sqrt(a * b);
//   return [arfimitigi, geiometrigi];
// }
// let yigindi = maqk(a, b);
// console.log("birinchi son" + a);
// console.log("ikkinchi son" + b);
// console.log("arfimitigi" + [yigindi]);
// console.log("geiometrigi" + [yigindi]);
// 3-UCHINCHI
// let n = +prompt(" sonni kiriting");
// function sign(a) {
//   if (n < 0) {
//     return -1;
//   } else if (n >= 0) {
//     return 1;
//   } else {
//     return 0;
//   }
// }
// console.log(sign(10));
// 4 chi masala
// let a = 1;
// let b = -6;
// let c = 9;
// let x = 0;
// function numberOfRoots(a, b, c) {
//   let x = a * b + c - 0;
//   let d = b * b - 4 * a * c;
//   console.log(d)  // 0ga teng;
//   console.log(x) // 3ga teng
// }
// numberOfRoots(a, b, c);
// 5 chi msala
// let r = 1;
// function areaCircle(r) {
//   let pi = Math.PI;
//   let S = pi * r * r;
//   return S;
// }
// console.log(areaCircle(5));
// 6 chi masala
// let a = +prompt("soni kiriting");
// let b = +prompt(" soni kiriting");
// function sumRange(a, b) {
//   if (a > b) {
//     return 0;
//   } else {
//     return a + b;
//   }
// }
// console.log(sumRange(a, b));

// 7 chi masala
// let a = 1;
// let b = 2;
// let c = prompt("");
// function calc(a, b, c) {
//   if (c == "*") {
//     let d = a * b;
//     console.log(d);
//   } else if (c == "/") {
//     let d = a / b;
//     console.log(d);
//   } else if (c == "+") {
//     let d = a + b;
//     console.log(d);
//   } else if (c == "-") {
//     let d = a - b;
//     console.log(d);
//   }
// }
// calc(a, b, c);
// 8 masala
// let k = +prompt("soni kiriting");
// function isEven(params) {
//   if (k % 2 === 0) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }
// isEven(k);
// 9-masala
// function sortABC(a, b, c) {
//   let smallest = Math.min(a, b, c);
//   let largest = Math.max(a, b, c);
//   let middle = a + b + c - smallest - largest;
//   console.log(smallest, middle, largest);
// }

// Test
// sortABC(10, 5, 8); // Natija: 5, 8, 10
// 10 masala
// let k = +Power("soni kiriting");
// let n = +Power("soni kiriting");

// function isEven(params) {
//   if (k % 2 === 0) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
//   if (n / 1 == 1) {
//   }
// }
// isEven(k, n);
