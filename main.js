// var a = 10;
// var b = 5;
// if (a > b) {
//   document.write("a > b");
// }
// if (a > b) {
//   document.write("a > b");
// } else {
//   document.write("b < a");
// }
// if (!(a == b)) {
//   document.write("a != b");
// } else {
//   document.write("a = b");
// }

// var x = 0;
// var y = 1;
// var z;
// if (x != 0) {
//   z = 10 / x;
//   document.write("z= " + z);
// } else if (y != 0) {
//   z = 10 / y;
//   document.write("z = " + z);
// } else document.write("Ошибка! Деление на 0");

// switch (Переменная или выражение) {
//     case Значение1:
//         Оператор1;
//         break;
//     case Значение2:
//         Оператор2;
//         break;
//     default:
//         Оператор;
// }

// var command = window.prompt("Введите действие", "");
// if (command == null) {
//   document.write("Нажата кнопка Отмена");
// } else {
//   switch (parseInt(command)) {
//     case 1:
//       alert("Выбрано действие 1");
//       break;
//     case 2:
//       alert("Выбрано действие 2");
//       break;
//     case 3:
//       alert("Выбрано действие 3");
//       break;
//     case 4:
//       alert("Выбрано действие 4");
//       break;
//   }
// }

// for (var i = 0; i < 10; i++) {
//   document.write(i);
// }

// for (var i = 1; i <= 10; i++) {
//   document.write(i);
// }

// var i = 1;
// while (i < 11) {
//   document.write(i + "<br>");
//   i++;
// }

// i = 1;
// do {
//   document.write(i);
//   i++;
// } while (i < 10);

// for (i = 1; i < 21; i++) {
//   if (i % 2 == 0) continue;
//   else document.write(i + " ");
// }

// for (i = 1; i < 11; i++) {
//   if (i == 5) break;
//   document.write(i + " ");
// }

var j = 1;
while (j < 15) {
  for (var k = 0; k < j; k++) document.write("*");
  document.write("<br>");
  j++;
}
