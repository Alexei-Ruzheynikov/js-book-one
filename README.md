# js-book-one

Справочник Javascript. Никольский. Дубовик.

# Конспект

Пример - в нашем документе есть форма form1 с текстовым полем firstname, обратиться к этому полю можно через коллекцию forms.
document.forms['form1'].firstname.value
Обращение напрямую
document.form1.firstname.value
Обращение к форме по индексу
document.forms[0].firstname.value
Для получения доступа к элементу используется метод getElementById() объекта document
document.getElementById('username').value
Доступ к элементам формы можно получить через коллекцию elements:
document.forms["loginform"].elements["password"].value
document.forms["loginform"].elements[0].value
document.forms[0].elements[0].value

Объект формы обладает следующими свойствами:
action, length, elements, ecoding, method, enctype, name, target.
Методы:
submit(),
reset();
События:
onsubmit,
onreset.

<input type="text">
<input type="password">
Свойства:
value,
defaultValue,
disabled,
form,
maxLength,
name,
readOnly,
type.
Методы:
blur() - событие onblur;
focus() - событие onfocus, onchange
select() - - выделяет текст в поле.

textaera - есть свойство wrap, позволяющее определить режим переноса слов.Свойства принимает следующие значения:
off,
physical,
virtual.

Свойства флажков и переключателей:
checked,
value,
defaultChecked,
disabled,
indeterminate,
form,
name,
type.
Из методов флажки и переключатели поддерживают: blue() и focus(). События: onblur(), onfocus(), onclick().

Работа с кнопками. Свойства:
value,
disabled,
form,
name,
type
Методы: blur(), focus(); События: onblur(), onclick(), onfocus().
