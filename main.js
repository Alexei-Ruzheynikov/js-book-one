// При нажатии кнопки добавить слово - введенное в текстовое поле слово будет добавлено в textarea
// function AddWord() {
//   var text1 = document.form1.text1.value;

//   if (text1 == "") {
//     windows.alert("Введите текст");
//     return "";
//   }

//   //Получаем значение textarea
//   var ta1 = document.form1.ta1.value;
//   var result = ta1 + "\n" + text1;

//   // Новое значение textarea
//   document.form1.ta1.value = result;

//   // Очищаем текстовое поле
//   document.form1.text1.value = "";
//   return text1; //Возвращает введенный текст
// }

// let counter = document.form.rg1.length;
// for (let i = 0; i < counter; i++) {
//   if (document.form.rg1.item(i).checked) {
//     console.log(document.forms.rg1.item(i).value);
//     break;
//   }
// }
// К сожалению, пример не работает

// function OnBtnClick() {
//   document.form1.button2.disabled = !document.form1.button2.disabled;
// }

// Функция проверяет правильность введенного email:
// function validateEmail(email) {
//   var re =
//     /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   return re.test(email);
// }
// function checkMail() {
//   var email = document.form1.email.value;
//   if (validateEmail(email)) window.alert("OK");
//   else window.alert("Email неправильный");
// }

// function validateEmail(email) {
//   var re =
//     /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   return re.test(email);
// }
// function check() {
//   var email = document.form1.email.value;
//   if (validateEmail(email)) document.getElementById("span1").innerText = "OK";
//   else document.getElementById("span1").innerText = "Email неправильный";
// }

//функция проверки телефона
// function isValidPhone(Phone) {
//   return /^\+\d{1,2}\(\d{3}\)\d{3}-\d{2}-\d{2}$/.test(Phone);
// }
