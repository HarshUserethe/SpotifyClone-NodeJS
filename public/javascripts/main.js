if (window.matchMedia("(max-width: 400px)").matches) {
  var userBox = document.querySelector(".user-box>input");
  var times = document.querySelector(".times");
  var inputTwo = document.querySelector(".inputTwo");
  var inputThree = document.querySelector(".inputThree");
  var timestwo = document.querySelector(".times2");
  var outBox = document.querySelector(".login-box");
  var err = document.querySelector("#errMessage");
  var song = document.querySelectorAll(".song");

  userBox.addEventListener("focus", function () {
    document.querySelector(".logo").style.display = "none";
    document.querySelector(".txt>h2").style.display = "none";
    document.querySelector("#or").style.display = "none";
    document.querySelector("#loginbtn").style.display = "none";
    document.querySelector("#lab").style.display = "none";
    err.style.display = "none";
  });

  userBox.addEventListener("blur", function () {
    document.querySelector(".logo").style.display = "initial";
    document.querySelector(".txt>h2").style.display = "flex";
    document.querySelector("#or").style.display = "initial";
    document.querySelector("#loginbtn").style.display = "flex";
    document.querySelector("#lab").style.display = "initial";
    err.style.display = "initial";
  });

  inputTwo.addEventListener("focus", function () {
    document.querySelector(".logo").style.display = "none";
    document.querySelector(".txt>h2").style.display = "none";
    document.querySelector("#or").style.display = "none";
    document.querySelector("#loginbtn").style.display = "none";
    document.querySelector("#lab").style.display = "none";
    err.style.display = "none";
  });

  inputTwo.addEventListener("blur", function () {
    document.querySelector(".logo").style.display = "initial";
    document.querySelector(".txt>h2").style.display = "flex";
    document.querySelector("#or").style.display = "initial";
    document.querySelector("#loginbtn").style.display = "flex";
    document.querySelector("#lab").style.display = "initial";
    err.style.display = "initial";
  });

  inputThree.addEventListener("focus", function () {
    document.querySelector(".logo").style.display = "none";
    document.querySelector(".txt>h2").style.display = "none";
    document.querySelector("#or").style.display = "none";
    document.querySelector("#loginbtn").style.display = "none";
    document.querySelector("#lab").style.display = "none";
    err.style.display = "none";
  });

  inputThree.addEventListener("blur", function () {
    document.querySelector(".logo").style.display = "initial";
    document.querySelector(".txt>h2").style.display = "flex";
    document.querySelector("#or").style.display = "initial";
    document.querySelector("#loginbtn").style.display = "flex";
    document.querySelector("#lab").style.display = "initial";
    err.style.display = "initial";
  });

  times.addEventListener("focus", function () {
    document.querySelector(".logo").style.display = "none";
    document.querySelector(".txt>h2").style.display = "none";
    document.querySelector("#or").style.display = "none";
    document.querySelector("#loginbtn").style.display = "none";
    document.querySelector("#lab").style.display = "none";
    err.style.display = "none";
  });

  times.addEventListener("blur", function () {
    document.querySelector(".logo").style.display = "initial";
    document.querySelector(".txt>h2").style.display = "flex";
    document.querySelector("#or").style.display = "initial";
    document.querySelector("#loginbtn").style.display = "flex";
    document.querySelector("#lab").style.display = "initial";
    err.style.display = "initial";
  });

  timestwo.addEventListener("focus", function () {
    document.querySelector(".logo").style.display = "none";
    document.querySelector(".txt>h2").style.display = "none";
    document.querySelector("#or").style.display = "none";
    document.querySelector("#loginbtn").style.display = "none";
    document.querySelector("#lab").style.display = "none";
    err.style.display = "none";
  });

  timestwo.addEventListener("blur", function () {
    document.querySelector(".logo").style.display = "initial";
    document.querySelector(".txt>h2").style.display = "flex";
    document.querySelector("#or").style.display = "initial";
    document.querySelector("#loginbtn").style.display = "flex";
    document.querySelector("#lab").style.display = "initial";
    err.style.display = "initial";
  });
}

if (window.matchMedia("(min-width: 401px) and (max-width: 600px)").matches) {
  var userBox = document.querySelector(".user-box>input");
  var times = document.querySelector(".times");
  var inputTwo = document.querySelector(".inputTwo");
  var inputThree = document.querySelector(".inputThree");
  var timestwo = document.querySelector(".times2");
  var outBox = document.querySelector(".login-box");
  var err = document.querySelector("#errMessage");
  var song = document.querySelectorAll(".song");

  userBox.addEventListener("focus", function () {
    document.querySelector(".logo").style.display = "none";
    document.querySelector(".txt>h2").style.display = "none";
    document.querySelector("#or").style.display = "none";
    document.querySelector("#loginbtn").style.display = "none";
    document.querySelector("#lab").style.display = "none";
    err.style.display = "none";
  });

  userBox.addEventListener("blur", function () {
    document.querySelector(".logo").style.display = "initial";
    document.querySelector(".txt>h2").style.display = "flex";
    document.querySelector("#or").style.display = "initial";
    document.querySelector("#loginbtn").style.display = "flex";
    document.querySelector("#lab").style.display = "initial";
    err.style.display = "initial";
  });

  inputTwo.addEventListener("focus", function () {
    document.querySelector(".logo").style.display = "none";
    document.querySelector(".txt>h2").style.display = "none";
    document.querySelector("#or").style.display = "none";
    document.querySelector("#loginbtn").style.display = "none";
    document.querySelector("#lab").style.display = "none";
    err.style.display = "none";
  });

  inputTwo.addEventListener("blur", function () {
    document.querySelector(".logo").style.display = "initial";
    document.querySelector(".txt>h2").style.display = "flex";
    document.querySelector("#or").style.display = "initial";
    document.querySelector("#loginbtn").style.display = "flex";
    document.querySelector("#lab").style.display = "initial";
    err.style.display = "initial";
  });

  inputThree.addEventListener("focus", function () {
    document.querySelector(".logo").style.display = "none";
    document.querySelector(".txt>h2").style.display = "none";
    document.querySelector("#or").style.display = "none";
    document.querySelector("#loginbtn").style.display = "none";
    document.querySelector("#lab").style.display = "none";
    err.style.display = "none";
  });

  inputThree.addEventListener("blur", function () {
    document.querySelector(".logo").style.display = "initial";
    document.querySelector(".txt>h2").style.display = "flex";
    document.querySelector("#or").style.display = "initial";
    document.querySelector("#loginbtn").style.display = "flex";
    document.querySelector("#lab").style.display = "initial";
    err.style.display = "initial";
  });

  times.addEventListener("focus", function () {
    document.querySelector(".logo").style.display = "none";
    document.querySelector(".txt>h2").style.display = "none";
    document.querySelector("#or").style.display = "none";
    document.querySelector("#loginbtn").style.display = "none";
    document.querySelector("#lab").style.display = "none";
    err.style.display = "none";
  });

  times.addEventListener("blur", function () {
    document.querySelector(".logo").style.display = "initial";
    document.querySelector(".txt>h2").style.display = "flex";
    document.querySelector("#or").style.display = "initial";
    document.querySelector("#loginbtn").style.display = "flex";
    document.querySelector("#lab").style.display = "initial";
    err.style.display = "initial";
  });

  timestwo.addEventListener("focus", function () {
    document.querySelector(".logo").style.display = "none";
    document.querySelector(".txt>h2").style.display = "none";
    document.querySelector("#or").style.display = "none";
    document.querySelector("#loginbtn").style.display = "none";
    document.querySelector("#lab").style.display = "none";
    err.style.display = "none";
  });

  timestwo.addEventListener("blur", function () {
    document.querySelector(".logo").style.display = "initial";
    document.querySelector(".txt>h2").style.display = "flex";
    document.querySelector("#or").style.display = "initial";
    document.querySelector("#loginbtn").style.display = "flex";
    document.querySelector("#lab").style.display = "initial";
    err.style.display = "initial";
  });
}
