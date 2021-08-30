//Меняем язык календаря на русский
$(function () {
  $.datepicker.setDefaults({
    closeText: "Закрыть",
    prevText: "",
    currentText: "Сегодня",
    monthNames: [
      "Январь",
      "Февраль",
      "Март",
      "Апрель",
      "Май",
      "Июнь",
      "Июль",
      "Август",
      "Сентябрь",
      "Октябрь",
      "Ноябрь",
      "Декабрь",
    ],
    monthNamesShort: [
      "Янв",
      "Фев",
      "Мар",
      "Апр",
      "Май",
      "Июн",
      "Июл",
      "Авг",
      "Сен",
      "Окт",
      "Ноя",
      "Дек",
    ],
    dayNames: [
      "воскресенье",
      "понедельник",
      "вторник",
      "среда",
      "четверг",
      "пятница",
      "суббота",
    ],
    dayNamesShort: ["вск", "пнд", "втр", "срд", "чтв", "птн", "сбт"],
    dayNamesMin: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
    weekHeader: "He",
    dateFormat: "dd.mm.yy",
    firstDay: 1,
    isRTL: false,
    showMonthAfterYear: false,
    yearSuffix: "",
  });
});

$(function () {
  //Вызов виджета datapicker - календарь
  $("#date").datepicker();
});

$(function () {
  $("#dialog").dialog();
});

$(function () {
  $("#accordion").accordion();
});

$(function () {
  $("#bar").progressbar({
    value: 0,
    change: function (event, ui) {
      console.log("Событие " + event.type);
    },
    complete: function (event, ui) {
      console.log("Событие " + event.type);
    },
  });
  $("button").click(function () {
    let currentVal = $("#bar").progressbar("option", "value");
    if (currentVal < 100) {
      currentVal = currentVal + 10;
      $("#percent").text(currentVal + "%");
      $("#bar").progressbar("option", "value", currentVal);
    }
  });
});

$(function () {
  $("#tabs").tabs();
});

$(function () {
  var availableCars = ["auto", "aureg", "abcde", "alor"];
  $("#cars").autocomplete({
    source: availableCars,
  });
});

$(function () {
  $("#button1")
    .button()
    .click(function (e) {
      console.log("Нажата кнопка 1");
    });
  $("#button2")
    .button()
    .click(function (e) {
      console.log("Нажата кнопка 2");
    });
});

$(function () {
  $("#menu").menu();
});

//не отрабатывает как горизонтальное меню.
$(document).ready(function () {
  $("#horMenu").menu({ position: { using: setSubMenu } });
  $("#horMenu > li > a > span.ui-icon-carat-d-e")
    .removeClass("ui-icon-carat-l-e")
    .addClass("ui-icon-carat-l-s");
  function setSubMenu(position, elements) {
    var options = {
      of: elements.target.element,
    };
    if (elements.element.element.parent().parent().attr("id") === "horMenu") {
      options.my = "center top";
      options.at = "center bottom";
    } else {
      options.my = "left top";
      options.at = "right top";
    }
    elements.element.element.position(options);
  }
});

$(function () {
  $(document).tooltip();
});

$(function () {
  $("#slider").slider({
    range: true,
    values: [0, 100],
  });
});
$(function () {
  $("#slider2").slider({
    range: "max",
    value: 100,
  });

  $(function () {
    $("#slider3").slider({
      range: "min",
      value: 1,
      min: 0.5,
      max: 2.5,
      step: 0.1,
      slide: function (event, ui) {
        $("#message").css("font-size", ui.value + "em");
      },
    });
  });
});

// $(function () {
//   $("div#a1").effect({
//     effect: "shake",
//     times: 10,
//     distance: 100,
//     duration: 5000,
//     complete: function () {
//       $(this).css("background", "green");
//     },
//   });
//
//   $("div#a1").effect("blind");
//   $("div#a1").effect("bounce");
//   $("div#a1").effect("clip");
//   $("div#a1").effect("drop");
//   $("div#a1").effect("explode");
//   $("div#a1").effect("fade");
//   $("div#a1").effect("fold");
//   $("div#a1").effect("highlight");
//   $("div#a1").effect("puff");
//   $("div#a1").effect("pulsate");
//   $("div#a1").effect("scale");
// $("div#a1").effect("size");
//   $("div#a1").effect("slide");
//   $("div#a1").effect("transfer");
// });

// $(document).ready(function () {
//   $("#but1").click(function () {
//     $("#mycontainer").hide($("#effect1").val(), {}, 1000);
//   });
//   $("#but2").click(function () {
//     $("#mycontainer").show($("#effect1").val(), {}, 1000);
//   });
// });

$(document).ready(function () {
  $("#effect1").change(function () {
    if ($("#effect1").val() === "scale") {
      $("#scalecont").css("display", "block");
      $("#transfercont").css("display", "none");
      $("#sizecont").css("display", "none");
    } else if ($("#effect1").val() === "transfer") {
      $("#transfercont").css("display", "block");
      $("#scalecont").css("display", "none");
      $("#sizecont").css("display", "none");
    } else if ($("#effect1").val() === "size") {
      $("#sizecont").css("display", "block");
      $("#transfercont").css("display", "none");
      $("#scalecont").css("display", "none");
    }
  });
  //
  $("#but1").click(function () {
    var options = {};
    if ($("effect1").val() === "scale") {
      var options = { percent: 50 };
      options.percent = $("#scalepercent").val();
    } else if ($("#effect1").val() === "transfer") {
      var options = { to: "#but1", className: "transfer-effect" };
      options.to = $("#trans1").val();
      options.className = $("#trans2").val();
    } else if ($("#effect1").val() === "size") {
      var options = { to: { width: 200, height: 200 } };
      options.to.width = $("#size1").val();
      options.to.height = $("#size2").val();
    }
    $("#mycontainer").effect($("#effect1").val(), options, 1000);
  });
});
