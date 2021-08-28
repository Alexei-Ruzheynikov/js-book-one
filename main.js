//Библиотека jquery, выбираем все элементы *
// $(function () {
//   alert($("*").length);

//   alert($("*", document.body).length);
// });

// $(function () {
//   $("#divInfo").css("border", "3px solid #00f");
// });

// $(function () {
//   $("div").css("border", "3px solid green");
//   $("div").css("margin", "20px");
// });

// $(".text").css("border", "1px solid #f00");

// $(function () {
//   $("div, p.text").css("border", "4px solid red");
// });

// $(function () {
//   $("tr:first").css("background-color", "lightgray");
//   $("tr:last").css("background-color", "red");
//   $("tr:even").css("background-color", "green");
//   $("tr:odd").css("background-color", "yellow");
//   $("td:eq(2)").css("background-color", "yellow");
//   $("td:gt(2)").css("background-color", "yellow");
//   $("td:lt(2)").css("background-color", "yellow");
//   $("td:not(:gt(3))").css("background-color", "yellow");
//   $(":header").css("border", "3px solid #f00");
//   $("div:contains('Hello')").css("text-decoration", "bold");
//   $("p:contains('Hello')").css("text-decoration", "bold");
//   $("td:empty").css("text-decoration", "bold");
//   alert(
//     "К-во видимых элементов..." +
//       $(":visible", document.body).length +
//       "\nК-во скрытых элементов... " +
//       $(":hidden", document.body).length
//   );
//   $("input:disabled").val("disabled");
//   $(":input").css("border", "3px solid red");
//   $(":password").css("border", "3px solid red");
//   function counter() {
//     var n = $("input:checked").length;
//     $("div").text("Выбрано - " + n);
//   }
//   counter();
//   $(":checkbox").click(counter);
// var target = $('a').attr('target');
//   $("a").attr("href", "http://nit.center");
//
//   let href = $("a").attr("href");
//   alert("Текущий адрес: " + href + "\nНовый адрес: http://nit.center");
//   //   $("a").attr("href", "http://nit.center");
//   //   $("a").attr("title", "Щелкни здесь");
//   $("a").attr({
//     href: "http://nit.center",
//     title: "Жми!",
//   });
//   $("a").removeAttr("title");
// });
// $(function () {
//   $("#button1").click(function () {
//     $("div").addClass("cl1");
//   });
//   $("#button2").click(function () {
//     $("div").removeClass("cl1");
//   });
//   $("#button3").click(function () {
//     $("div").toggleClass("cl1");
//   });
//   $("#button4").click(function () {
//     alert($("div").hasClass("cl1"));
//   });
// });

// $(function () {
//   var txt = $("#hello").text();
//   //   var txt = $("#hello").html();
//   $("#hello").html("<b>Привет!</b>");

//   window.alert(txt);
// });

// $(function () {
//   $("#button1").click(function () {
//     let value = $("#inp1").val();
//     console.log(value);
//   });
// });

// $(function () {
//   $("#button1").click(function () {
//     var value = $("input:radio[name=pet]:checked").val();
//     window.alert(value);
//   });
// });

// $(function () {
//   $("#show").click(function () {
//     $("div").show();
//   });
//   $("#hide").click(function () {
//     $("div").hide();
//   });
//   $("#toggle").click(function () {
//     $("div").toggle();
//   });
// });

// $(function () {
//   $("#show").click(function () {
//     $("#text").slideDown(1500);
//   });
//   $("#hide").click(function () {
//     $("#text").slideUp(1500);
//   });
//   $("#toggle").click(function () {
//     $("#text").slideToggle(1500);
//   });
// });

// $(function () {
//   $("#show").click(function () {
//     $("#text").fadeIn(1500);
//   });
//   $("#hide").click(function () {
//     $("#text").fadeOut(1500);
//   });
//   $("#toggle").click(function () {
//     $("#text").fadeToggle(500);
//   });
// });

// $(function () {
//   $("button").one("click", function () {
//     $("p:first").fadeTo("slow", 0.3, function () {
//       console.log("Готово!");
//     });
//   });
// });

// $(function () {
//   $("#right").click(function () {
//     $(".block").animate({ left: "+=50px" }, "slow");
//   });
//   $("#left").click(function () {
//     $(".block").animate({ left: "-=50px" }, "slow");
//   });
//   $("#down").click(function () {
//     $(".block").animate({ top: "+=50px" }, "slow");
//   });
//   $("#up").click(function () {
//     $(".block").animate({ top: "-=50px" }, "slow");
//   });
// });

// $(function () {
//   let old_width = $("div").css("width");
//   window.alert(old_width);
//   let new_width = "110px";
//   $("div").css("width", new_width);
//   window.alert(new_width);
// });

// $(function () {
//   $("button").click(function () {
//     let color = $("input").val();
//     $("div").css("background-color", color);
//   });
// });

// $(function () {
//   $("button:eq(0)").click(function () {
//     $("input").val($("div").width());
//   });
//   $("button:eq(1)").click(function () {
//     $("input").val($("div").height());
//   });
//   $("button:eq(2)").click(function () {
//     $("input").val($("div").innerWidth());
//   });
//   $("button:eq(3)").click(function () {
//     $("input").val($("div").innerHeight());
//   });
//   $("button:eq(4)").click(function () {
//     $("input").val($("div").outerWidth(true));
//   });
//   $("button:eq(5)").click(function () {
//     $("input").val($("div").outerHeight());
//   });
//   $("button:eq(6)").click(function () {
//     $("div").width($("input").val() * 1);
//   });
//   $("button:eq(7)").click(function () {
//     $("div").height($("input").val() * 1);
//   });
// });

// $(function () {
//   $("p").append("<b> мир</b>");
//   $("p").prepend("<b> мир</b>");
// });

// $(function () {
//   $("button").click(function () {
//     $("#bye").appendTo("#msg");
//   });
// });

// $(function () {
//   $(function () {
//     $("p").before("<b>до текста</b>");
//     $("p").after("<b>После текста</b>");
//   });
// });

// wrapInner - обрамляет контент внутри, wrap - обрамляет тэг а, wrapAll - обрамляет все li в ol
// $(function () {
//   $("button").click(function () {
//     $("a").wrapInner("<i></i>").wrap("<li></li>");
//     $("li").wrapAll("<ol></ol>");
//   });
// });

// Метод unwrap - отменяет действие метода wrap
// $(function () {
//   $("#b1").click(function () {
//     $("a").wrapInner("<i></i>").wrap("<li></li>");
//     $("li").wrapAll("<ol></ol>");
//   });
//   $("#b2").click(function () {
//     $("a").unwrap();
//   });
// });

// $(function () {
//   $("p").replaceWith("<div>" + $("p").text() + "</div>");
//   $("<div>").replaceAll("p");
//
//   $("p").click(function () {
//     $(this).replaceWith("<div>" + $(this).text() + "</div>");
//   });
// });

// $(function () {
//   $("#target").contextmenu(function () {
//     alert("Обработчик для .contexmenu() вызван..");
//   });
// });

// Просто пример
// $(function () {
//   function notify() {
//     alert("Привет!");
//   }
//   $("button").on("click", notify);
// });

// $(function () {
//   $("button:first").click(function () {
//     $("#target").load("https://nit.center/test.htm");
//   });
//   $("button:last").click(function () {
//     $("#target").empty();
//   });
// });

// Не сработал
// $(function () {
//     $("button:first").click(function () {
//     $("#target").load("nit.html p:last", function(){
//         alert('Готово!');
//     });
//     $("button:last").click(function () {
//     $("#target").empty();
//     });
// });

//
// <?php
// if($_SERVER['HTTP_X_REQUESTED_WITH'] == 'XMLHttpRequest')
// {
//     if($_POST) {
//         echo 'Login: ' . $_POST['login'] . ', password: ' . $_POST['password'];
//     }
// }
// ?>
// $.post(
//   "post.php",
//   {
//     login: "mark",
//     password: "123456",
//   },
//   function (data) {
//     $("div").text(data);
//   }
// );

$(function () {
  $("button:eq(0)").click(function () {
    $.getScript("script.js");
  });
  $("button:eq(1)").click(function () {
    $.getScript("http://nit.center/ajax/test.js", function () {
      alert("После");
    });
  });
});
