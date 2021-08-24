// способ определение класса - объявление класса
// class Human {
//   constructor(year, hname) {
//     this.year = year;
//     this.hname = hname;
//   }
// }

//безымяный
// var Human = class {
//   constructor(year, hname) {
//     this.year = year;
//     this.hname = hname;
//   }
// };
// console.log(Human.name);

//именованный
// var Den = class Human2 {
//   constructor(year, hname) {
//     this.year = year;
//     this.hname = hname;
//   }
// };
// console.log(Den.name);

// class Human {
//   constructor(year, hname) {
//     this.year = year;
//     this.hname = hname;
//   }
//   static displayName = "Человек";
// }
// const p1 = new Human(1983, "Den");
// console.log(Human.displayName);

// class Human {
//   scream() {
//     return this;
//   }
//   static listen() {
//     return this;
//   }
// }
// let obj = new Human();
// obj.scream();
// let scream = obj.scream;
// scream();
// Human.listen();
// let listen = Human.listen;
// listen();

// Свойства экземпляра должны быть определены в конструкторе
// class Box {
//   constructor(height, width) {
//     this.height = height;
//     this.width = width;
//   }
// }

// class Human {
//   constructor(name) {
//     this.name = name;
//   }
//   speak() {
//     console.log(`${this.name} говорит.`);
//   }
// }
// class vasya extends Human {
//   constructor(name) {
//     super(name);
//   }
//   speak() {
//     console.log(`${this.name} говорит.`);
//   }
// }
// let v = new vasya("Василий");
// v.speak();

// Создать новый объект можно с помощью функции-конструктора Object
// var Human = new Object();
// Human.firstname = "John";
// Human.lastname = "Doe";
// Human.getFullName = function () {
//   var fname = this.firstname + this.lastname;
//   return fname;
// };
// window.alert(Human.firstname);
// window.alert(Human.lastname);
// window.alert(Human.getFullName());

//Другой мспособ создания объекта- с использованием фигурных скобок
// var Human = {
//   firstname: "John",
//   lastname: "Doe",
//   getFullName: function () {
//     var fname = this.firstname + this.lastname;
//     return fname;
//   }
// }

//Создаем пустой объект
// var empty_obj = {};

//Пример - создаем 1 объект и 2 ссылки на него
// var ob1 = ob2 = {};

//Создаем два одинаковых объекта, которые будут использоваться раздельно
// var o1 = {};
// var o2 = {};

//Функции конструкторы удобно использовать, если нужно инициализировать несколько подобных объектов
// function Human(firstname, lastname) {
//   this.firstname = firstname;
//   this.lastname = lastname;
//   this.getFullName = function () {
//     var fname = this.firstname + this.lastname;
//     return fname;
//   };
// }
// var John = new Human("John", "Doe");
// var Ivan = new Human("Ivan", "Ivanov");

//Цикл for in позволяет пройтись по всем свойствам объекта
// for (var P in John) {
//   document.write(P + " = " + John[P]);
// }

// Оператор in позволяет проверить существования свойства в объекте
// if ("firstname" in John) window.alert(John.firstname);

// проверить наличие метода можно указав его имя без скобок
// if (John.getFullName) window.alert("getFullName exists");

// Оператор instanceof позволяет проверить принадлежность экземпляра классу
// if (typeof John == "object" && John instanceof Human)
//   window.alert("John - экземпляр Human");

// удаление свойства
// delete Ivan.lastname;

// Пример прототипа
// function Human(firstname, lastname) {
//   this.firstname = firstname;
//   this.lastname = lastname;
// }
// Human.prototype.getFullName = function () {
//   var fname = this.firstname + this.lastname;
//   return fname;
// };
// var John = new Human("john", "Doe");
// document.write(John.getFullName());
// var Ivan = new Human("Ivan", "Ivanov");
// document.write(Ivan.getFullName());

//Функция определена внутри пространства имен
// var MyLibrary = {};
// MyLibrary.DecodeString = function () {
//   document.write("Test");
// };
// MyLibrary.DecodeString();

// Доступ по ссылке для удобства к пространству имен
/*1)создаем пространство имен
2)создаем ссылку на пространство имен
3)используем ссылку $(чтобы не переписывать весь код , когда вам нужно реализвоать подобные функции на разных сайтах) */
// var nitcenter = {};
// var $ = nitcenter;
// $.DecodeString();
