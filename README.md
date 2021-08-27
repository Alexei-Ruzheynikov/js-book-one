# js-book-one

Справочник Javascript. Никольский. Дубовик.

# Конспект

родительский объект.дочерний объект.свойство
родительский объект.дочерний объект.метод

родительский объект можно опускать и дочерний, например window - это родительский, при вызове alert, можем опустить.

Объекты объектной модели: event,
history,
navigator,
location,
screen,
document(дочерние классы: all,
anchors,
elements,
forms,
images,
links,
scripts,
styleSheets
)

Объект window - представляет сам браузер. Основные свойства:
defaultStatus, status, parent, self, top, opener, closed, screenLeft, screenTop, clientInformation. Основные события:
onload, onunload, onscroll, onresize, onblur, onfocus. Основные методы: alert(),confirm(),prompt(), showModalDialog(), open(), close(),blur(),focus(),navigate(URL),stop(),resizeBy(x,y),resizeTo(width,height), moveBy(x,y),scrollBy(x,y),scrollTo(x,y),setTimeout()

Метод open():
var окно = window.open(URL,имя окна,свойства);
Свойства: left, top, width, height,fullscreen, resizable, location, menubar, scrollbars, status, titlebar, toolbar.

Другие методы объекта window касающиеся таймеров:
clearTimeOut(таймер), setInterval(), clearInterval(интервал),

Объект navigator - для получения информации о браузере. Свойства объекта navigator содержит много информации:
appName,
appCodeName,
appVersion,
appMinorVersion,
userAgent,
cpuClass,
platform,
systemLanguage,
browserLanguage,
userLanguage,
onLine,
cookieEnabled

Объект screen - информация о мониторе пользователя. Свойства:
width,
height,
availWidth,
availHeight,
colorDepth.

Объект location - строка адреса пользоватлеьского агента - представляет информацию о url адресе текущей странице. Свойства:
href,
protocol,
port,
host,
hostname,
pathname,
search,
hash.
Методы location:
assign(),
reload(),
replace().

Объект history - доступ к истории браузера, то есть к списку ранее просмотренных веб страниц. Свойство length - содержит размер списка истории. Методы:
go(номер),
back(),
forward().

Объект document предоставляет доступ к элементам документа. Свойства:
activeElement,
documentElement,
body,
title,
URL,
referrer,
parentWindow,
cookie,
readyState,
location,
selection,
fileCreatedDate,
fileModifiedDate,
fileUpdatedDate,
lastModified,
filesize,
bgColor,
fgColor,
linkColor,
alinkColor,
vlinkColor.
Методы document:
write(текст),
writeln(текст),
getElementById(id элемента),
getElementByName(название элемента),
elementFromPoint(x,y).
Основные свойства элементов:
all,
id,
className,
sourceIndex,
tagName,
parentElement,
length,
height и width,
clientHeight и clientWidth,
clientLeft,
clientTop,
offsetHeight и offsetWidth,
offsetLeft,
offsetParent,
innerText,
outerText,
innerHTML,
outerHTML,
scrollHeight и scrollWidth,
scrollLeft и scrollTop.
Методы общие для всех элементов:
getAdjiancentText,
insertAdjancentHtml,
getAttribute,
setAttribute,
removeAttribute,
clearAttributes(),
contains(имя).

Объект style: доступ к таблице стилей -
color = color,
font-size = fontSize,

Объект selection: выделение текста:
Если выбран текст то свойство type объекта selection содержит значение Text, если ничего, то None.
Методы: clear(), empty().

Проверим поддерживает ли браузер Cookies клиента
if(navigator.cookieEnabled){
// Можем работать с Cookies
}

Установить Cookies можно так:
document.cookie = "Имя = значение; expires=Дата; domain = имя домена; path=Путь; secure"
Дату указывать в формате:
Mon, 01 Mar 2021 00:00:01 GMT
По истечению этой даты Cookie будет удален. Получить дату в этом формате можно с помощью метода setTime() и метода toGMTString():
let dt = new Date();
dt.setTime(dt.getTime()+36000); Время жизни 10 часов
let Exp_Date = d.toGMTString(); Конечная дата
