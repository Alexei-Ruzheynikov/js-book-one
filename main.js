function openAlert() {
  window.alert("Привет");
}
// i++ - однострочный комментарий

/* Пример
многострочного
комментария */
// window.alert("Привет, мир!");
// window.alert("Привет, \nмир!");

// if (window.confirm("Нажмите на Ок или Отмена")) {
//   console.log("Вы нажали ок");
// } else {
//   console.log("Вы нажали омтена");
// }

var UName = window.prompt("Как Вас зовут", "Noname");
if (UName == null) {
  alert("Пока");
} else {
  console.log("Привет, " + UName);
}
