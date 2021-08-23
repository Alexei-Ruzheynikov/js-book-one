// function map(f, a) {
//   var resFunc = [];
//   var i;
//   for (i = 0; i != a.length; i++) resFunc[i] = f(a[i]);
//   return resFunc;
// }
// var f = function (z) {
//   return z * z * z;
// };
// var nums = [0, 5, 7, 9, 12];
// var cube = map(f, nums);
// console.log(cube);

// let sum = (a, b) => a + b;
// console.log(sum(2, 2));

// function denied() {
//   window.alert("Access Denied!");
// }
// denied();

// function sum(x, y) {
//   return x + y;
// }
// var x = sum(2, 2);
// var a = 10;
// var b = 12;
// var ab = sum(a, b);

//Ссылка на функцию может быть сохранена в переменную
//Имя функции указываем без скобок
//Вызываем функцию denied() по ссылке
// var d = denied;
// d();

// Ссылка на анонимную функцию
// var f = function () {
//   window.alert("Привет");
// };
// f();

//Ссылка на вложенную функцию
// var x = function () {
//   return function () {
//     window.alert("Привет");
//   };
// };
// x()();

// function f_Factorial(x) {
//   if (x == 0 || x == 1) return 1;
//   else return x * f_Factorial(x - 1);
// }
// alert(f_Factorial(4));

// var a = 100;
// var b = 200;
// function f1() {
//   var x = 100;
//   var b = 50;
//   document.write("<br>a = " + a);
//   document.write("<br>b = " + b);
//   document.write("<br>x = " + x);
// }
// f1();
// document.write("<br>");
// document.write("a = " + a);
// document.write("<br>b = " + b);
