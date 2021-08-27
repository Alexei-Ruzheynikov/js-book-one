// function newwopen() {
//   var options = "status = no,toolbar = no";
//   return window.open("http://nit.center", "Сайт издательства", options);
// }

// var chooseButton = document.getElementById("chooseCar");
// var favDialog = document.getElementById("favDialog");
// var outputBox = document.querySelector("output");
// var selectEl = document.querySelector("select");
// var confirmBtn = document.getElementById("confirmBtn");
//открывает диалог favDialog
// chooseButton.addEventListener("click", function onOpen() {
//   if (typeof favDialog.showModal === "function") {
//     favDialog.showModal();
//   } else {
//     alert("Тег <dialog> не поддерживается браузером");
//   }
// });
// selectEl.addEventListener("change", function onSelect(e) {
//   confirmBtn.value = selectEl.value;
// });
// favDialog.addEventListener("close", function onClose() {
//   outputBox.value =
//     favDialog.returnValue + " выбрано -" + new Date().toString();
// });

// устанавливаем таймер
// var timer = setTimeout(функция или выражение, интервал);

// сброс таймера
// clearTimeout(timer);

// Вызов setInterval()
//
// var intr = setInterval(функция или выражение, интервал);

// var clock;
// function Timerstart() {
//   clock = setInterval("DisplayTime();", 1000);
// }
// function DisplayTime() {
//   var d = new Date();
//   var CurrTime = d.getHours() < 10 ? "0" : "";
//   CurrTime += d.getHours();
//   CurrTime += d.getMinutes() < 10 ? ":0" : ":";
//   CurrTime += d.getMinutes();
//   CurrTime += d.getSeconds() < 10 ? ":0" : ":";
//   CurrTime += d.getSeconds();
//   document.getElementById("div1").innerHTML = CurrTime;
// }
// function Timerstop() {
//   clearInterval(clock);
// }

// console.log(navigator.userAgent);

// let  userAgent = navigator.userAgent;
// if (userAgent.indexOf('Explorer') != -1) {
//     код для ie
// }
// if (userAgent.indexOf('Firefox') != -1) {
//     код для firefox
// }
// if (userAgent.indexOf('Opera') != -1) {
//     код для opera
// }
// if (userAgent.indexOf('Chrome') != -1) {
//     код для ie
// }

// if (
//   /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|Play Book|IEMobile|Windows Phone|Kindle|Slick|Opera Mini/i.test(
//     navigator.userAgent
//   )
// ) {
//   console.log("mobile");
// } else {
//   alert("desctop");
// }

// function OnLoad() {
//   var div1 = document.getElementById("div1");
//   div1.style.color = "red";
// }

// function OnClick() {
//   var selText = window.getSelection().toString();
//   console.log(selText);
// }

// function OnClick() {
//   if (window.getSelection) {
//     console.log(window.getSelection().toString());
//   } else {
//     if (document.getSelection.type == "Text") {
//       let r1 = document.selection.createRange();
//       console.log(r1.text);
//       document.selection.empty();
//     } else {
//       console.log("Текст не выбран");
//     }
//   }
// }

// Сайт в качестве домашней сттраницы
// function setAsHomePage(obj) {
//   obj.style.behavior = "url(#default#homepage)";
//   obj.setHomePage("http://nit.center");
//   window.alert("Спасибо!");
//   return false;
// }

//Функции для работы с Cookies(установка, чтение, удаление)
// function getCookie(cname) {
//   var name = cname + "=";
//   var ca = document.cookie.split(";");
//   for (var i = 0; i < ca.length; i++) {
//     var c = ca[i];
//     while (c.charAt(0) == " ") {
//       c = c.substring(1);
//     }
//     if (c.indexOf(name) == 0) {
//       return c.substring(name.length, c.length);
//     }
//   }
//   return "";
// }
// function setCookie(name, value, opts = {}) {
//   opts = {
//     path: "/",
//   };
//   if (opts.expires instanceof Date) {
//     opts.expires = opts.expires.toUTCString();
//   }
//   let updatedCookie =
//     encodeURIComponent(name) + "=" + encodeURIComponent(value);
//   for (let optionKey in opts) {
//     updatedCookie += "; " + optionKey;
//     let optionValue = opts[optionKey];
//     if (optionValue !== true) {
//       updatedCookie += "=" + optionValue;
//     }
//   }
//   document.cookie = updatedCookie;
// }
// устанавливаем Cookies
// setCookie("saved_code", code, { secure: true, "max-age": 60 });
// setCookie("saved_card", card, { secure: true, "max-age": 60 });
//читаем Cookie
// var saved_card = getCookie("saved_card");
//вывдоиим Cookie
// window.alert(saved_card);

// Выдает ошибку code и card не определнеа - не знаю причину
