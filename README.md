# js-book-one

Справочник Javascript. Никольский. Дубовик.

# Конспект

Методы объекта Global:
parseInt, parseFloat, eval, isNan, isFinite, escape, unescape, encodeURI, decodeURI.

Объект Number используется для работы с числами. Экземпляр объекта можно создать так:
var объект = new Number(начальное значение)
var z = Number(1000); - это создаем экземпляр объекта

Свойства объекта Number, которые можно использовать без создания экземпляра объекта:
MAX_VALUE, MIN_VALUE, NaN, NEGATIVE_INFINITY, POSITIVE_INFINITIVE

У объекта Number всего два метода:
valueOf(), toString().

Объект string используется для обработки строк. Создаем экземпляр объекта
var объект = new String(строка);
var so = new String('Привет всем');
Но мы уже знаем что строку можно создать так
var s = 'Привет всем'
Разница: тип переменной s будет string, а переменной so - object
К обычным строкам можно применять методы объекта String
var str = 'Hello, world'.toUpperCase();
При использовании toUpperCase тип данных string, будет преобразован в объект объекта String. Объект String является оберткой над типом данных string.

У объекта String - 1 свойство length
var so = new String('Hello');
document.write(so.length);

Методы объекта String:
toString(), valueOf(), charAt(нмоер символа), charCodeAt, fromCharCode(), toLowerCase, toUpperCase(), substr(), substring(),indexOf(), lastIndexOf(), split(), search(), match(), replace()

Объект Array, создание экземпляра объекта
var объект = new Array (размер массива);
var объект = new Array(элементы массива через запятую)
var m = new array(1,2,3);

Свойство length - содержит количество элементов массива.

Методы объекта Array: push, unshift,concat, join,shift,pop,sort,reverse,slice,toString.

Ассоциативный массив позволяет в качестве индексов использовать строки, а не только числа. Методы объекта Array не позволяют отобразить элементы ассоциативного массива. Свойство length также недоступно, поэтому нет возможности перебрать элементы ассоциативного массива в цикле for. Для этого нужен цикл for in

Объект Math - содержит математические функции и константы. Math не требует создания экземпляра объекта

Константы Math: E,LN2,LN10,LOG2E,LOG10E,PI,SQRT2,SQRT1_2
Методы Math: abs(), sin() cos(),tan() asin() acos() atan(), exp()log(),pow(),sqrt(),round(),ceil(),floor(),max() min(),random()

Объект Function позволяет использовать функцию в качестве экземпляра объекта
Имя функции = new Function(аргумент1б аргументN, код)
var sum = new Function('x','y','return x+y')
Обычно использую анонимные функции вместо функции в виде строки
var sum = function(x,y){ return x + y;}
Вызов функции
window.alert(sum(2,2));

В js можно создать функции с произвольным числом аргументов - ему доступен массив arguments, чере зкоторый он может получить доступ к аргументам функции, а также свойство length массива arguments - содержит количество переданных функции параметров.

Несколько способов создать экземпляр объекта Date
var объект = new Date();
var объект = new Date(количество миллисекунд);
мфк объект = new Date(год, месяц, день, часы, мин, с, мс);

Методы Date: toString, toLocaleString(),valueOf(), getDate(), getDay(), getMonth(),getFullYear(), getHouse(), getMinutes(), getSeconds(), getMilliseconds(), getTime()

Объект RegExp
Создание экземпляра:
var объект = new RegExp(регулярное выражение, модификатор);
var объект = регулярное выражение/ можификатор;

Модифиткатор принимает следующие значения: i - поиск без учета регистра, g -глобальный поиск; m -многострочный поиск; gi - глобальный поиск без учета регистра.

https://developer.mozilla.org/ru/docs/Web/Javascript/Guide/regular_expressions
