// var m;
// m = [5, 3, 4, 1, 2];
// var months;
// months = [
//   "",
//   "Янв",
//   "Фев",
//   "Мар",
//   "Апр",
//   "Май",
//   "Апр",
//   "Май",
//   "Июн",
//   "Июл",
//   "Авг",
//   "Сен",
//   "Окт",
//   "Ноя",
//   "Дек",
// ];
// num0 = m[0];
// j = m[3];
// m[0] = 7;
// m[5] = 8;
// m[7] = 11;
// alert(m);

// var m = [9, 11, 7, 4, 99, 3, 2, 33, 3];
// min = m[0];
// min_ind = 0;
// document.write("Массив: <br>" + min + " ");
// for (i = 1; i < m.length; i++) {
//   if (m[i] < min) {
//     min = m[i];
//     min_ind = i;
//   } // if
//   document.write(m[i] + " ");
// } // for
// document.write("<br>Минимум: " + min);
// document.write("<br>Индекс: " + min_ind);

var m = [0, 0, 0];
m[0] = [3, 2, 1];
m[1] = [7, 8, 9];
m[2] = [5, 6, 7];
max = m[0][0];
ind = [0, 0];
for (i = 0; i < m.length; i++) {
  for (j = 0; j < m[i].length; j++) {
    if (m[i][j] > max) {
      max = m[i][j];
      ind[0] = i;
      ind[1] = j;
    }
  }
}
document.write("Максимум " + max);
document.write("<br>ind [" + ind[0] + "][" + ind[1] + "]");
