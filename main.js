// var myUniqueVariableName1 = Number.MAX_VALUE;
// alert(myUniqueVariableName1);
// var myUniqueVariableName2 = new Number(1000);
// var str = myUniqueVariableName2.toString();
// console.log(typeof str + " " + str);

// var so = new String("Hello");
// document.write(so.length);

//Возвращает символ строки с указанным номером
// var s = "Hello";
// var x = s.charAt(4);
// alert(x);

//toLowerCase преобразует в нижний регистр
// var myCarName = "Tatra";
// s = myCarName.toLowerCase();
// alert(s);

//toUpperCase преобразует в верхний регистр
// var myCarName = "Tatra";
// s = myCarName.toUpperCase();
// alert(s);

//substr(начало фрагмента,длина) (Если второй параметр пропущен, будет возвращено все до конца строки)
// var S = "Hello, dummy";
// console.log(S.substr(0, 5));
// console.log(S.substr(7, 3));

// substring( начало фрагмента, конец фрагмента) (Последний символ в подстркоу не считается)
// var S = "Hello, dummy";
// console.log(S.substring(4, 9));

// indexOf - возвращает номер позиции вхождения подстроки в текущей строке, lastIndexOf - возвращает номер позиции последнего вхождения подстроки в стркое
// var S = "Hello, dummy";
// console.log(S.indexOf("llo"));
// console.log(S.lastIndexOf("l"));

// split - разделяет строку на подстроку с помощью разделителя и возвращает массив
// var s = "Hello, dummy";
// var m = s.split(", ");
// console.log(m[0]);
// console.log(m[1]);
// console.log(m);

//пример использования length в массиве
// var m = new Array(1, 2, 3);
// document.write(m.length + "<br>");
// for (var i = 0, c = m.length; i < c; i++) {
//   document.write(m[i] + "<br>");
// }

//push - добавляет элементы в конец массива, возвращает новую длину массива
// var m = [1, 2, 3];
// m.push(4, 5);
// console.log(m + " " + m.length);

//unshift - добавляет элементы в начало массива
// var m = [1, 2, 3];
// m.unshift(4, 5);
// console.log(m);

//concat - озвращае массив полученный в результате объединения текущего массива и списка элементов
// var m1 = new Array(1, 2, 3);
// var m2 = [];
// m2 = m.concat(4, 5);
// console.log(m1 + " " + m2);

// join объединяет  элементы массива в строку, разделяя их заданным разделителем
// var massiv = new Array(5, 6, 7);
// console.log(massiv.join(" "));

// shift - возвращает  первый элемент массива и удаляет его из массива

//pop - выталкивает последний элемент массива и удаляет его из массива

//sort - для сортировки массива, по умолчанию(числа - по возрастанию, символы по алфавиту)

// reverse - переворачивает массив, элементы в массиве в обратном порядке

//slice(начало, конец) Возвращает срез массива от индекса начаал до индекса конца, если второй индекс не задан - то до конца
// var m1 = new Array(1, 2, 3, 4, 5, 6);
// var m2 = m1.slice(1, 3);
// alert(m2);

// toString преобразует массив в строку, элементы указываются через запятую

// функция sort соритровка
// function my_unique_sort(first, second) {
//   var x = first.toLowerCase();
//   var y = second.toLowerCase();
//   if (x > y) return 1;
//   if (x < y) return -1;
//   return 0;
// }
// var mass = [" One", "two9", "open"];
// mass.sort(my_unique_sort);
// console.log(mass.join(", "));

//Многомерные массивы можно создавать поэлементно
// var m = [];
// m[0] = [];
// m[1] = [];
// m[0][0] = 1;
// m[0][1] = 2;
// m[0][2] = 3;
// m[1][0] = 1;
// m[1][1] = 2;
// m[1][2] = 3;

// Или использовать перечисление
// var m = new Array(new Array("1", "2", "3"), new Array("3", "2", "1"));
// alert(m);

//Ассоциативный массив
// var m = new Array();
// m["one"] = 1;
// m["two"] = 2;
// for (let n in m) {
//   console.log(n + " = " + m[n]);
// }

// Есть 4 баннера, выводим их рандомно, баннеры с названием banner0.jpg
// var nu = Math.floor(Math.random() * 5.9999);
// document.write('<img src="banner' + nu + '.jpg">');

// function sumArgs() {
//   var r = 0;
//   for (var i = 0; i < arguments.length; i++) r = r + arguments[i];
//   return r;
// }
// console.log(sumArgs(1, 2, 3));

// function getStrMonth(m) {
//   var d = new Date();
//   var monthArray = [
//     "Янв",
//     "Фев",
//     "Мар",
//     "Апр",
//     "Май",
//     "Июн",
//     "Июл",
//     "Авг",
//     "Сен",
//     "Окт",
//     "Ноя",
//     "Дек",
//   ];
//   var currentMonth = d.getMonth();
//   if (m < 0 || m > 11) return monthArray[currentMonth];
//   return monthArray[m];
// }
// var d = new Date();
// console.log(getStrMonth(d.getMonth()));

// let reg = RegExp("abc[de]");
// let Str = "abc, abcd, abce, abcf";
// console.log(Str.search(reg));

// let reg = new RegExp("abc[de]", "g");
// let Str = "abc, abcd, abce, abcf";
// let m = [];
// m = Str.match(reg);
// for (var i = 0, c = m.length; i < c; i++) console.log(m[i] + " ");
// let s = Str.replace(reg, "match");
// console.log(s);
