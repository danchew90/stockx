const logBtn = document.querySelector(".btnBox_1"),
  signBtn = document.querySelector(".btnBox_2"),
  log = document.querySelector(".loginForm"),
  sign = document.querySelector(".signForm"),
  close = document.querySelector(".logCloseBtn"),
  mainLog = document.querySelector(".logWrap>li:first-child"),
  mainSign = document.querySelector(".logWrap>li:last-child"),
  logDisplay = document.querySelector(".logDisplay");

function changeBox(e) {
  let action = e.target.className;
  if (action === "btnBox_2") {
    signBtn.style.transitionDuration = "500ms";
    signBtn.classList.add("display");
    logBtn.classList.remove("display");
    sign.classList.add("show");
    log.classList.remove("show");
  } else if (action === "btnBox_1") {
    logBtn.style.transitionDuration = "500ms";
    signBtn.classList.remove("display");
    logBtn.classList.add("display");
    log.classList.add("show");
    sign.classList.remove("show");
  }
}

logBtn.addEventListener("click", changeBox);
signBtn.addEventListener("click", changeBox);
close.addEventListener("click", function () {
  logDisplay.style.transitionDuration = "500ms";
  logDisplay.style.display = "none";
});
mainLog.addEventListener("click", function () {
  logDisplay.style.transitionDuration = "500ms";
  logDisplay.style.display = "block";
  signBtn.classList.remove("display");
  logBtn.classList.add("display");
  log.classList.add("show");
  sign.classList.remove("show");
});
mainSign.addEventListener("click", function () {
  logDisplay.style.transitionDuration = "500ms";
  logDisplay.style.display = "block";
  signBtn.classList.add("display");
  logBtn.classList.remove("display");
  sign.classList.add("show");
  log.classList.remove("show");
});

// password show
const show = document.querySelector(".changeShow"),
  password = document.querySelector(".password");

function showChange(e) {
  let name = e.target.className;
  if (name === "changeShow back") {
    show.classList.remove("back");
    show.style.transitionDuration = "500ms";
    show.style.background = "none";
    show.style.color = "white";
    password.type = "password";
  } else {
    show.classList.add("back");
    show.style.transitionDuration = "500ms";
    show.style.background = "#ffeb85";
    show.style.color = "black";
    password.type = "text";
  }
}

show.addEventListener("click", showChange);

// sign up form

function email_change() {
  // const email = document.join.email.options[document.join.email.selectedIndex].value;
  // const default = document.join.email_change;

  // if(email == "0"){
  //   default.disabled = true;
  //   default.value = "이메일을 선택해 주세요";
  // }

  // if(email == "9"){
  //   default.disabled = false;
  //   default.value = "";
  //   default.focus();
  // }else{
  //   default.disabled = true;
  //   default.value = email;
  // }

  if (
    document.join.email.options[document.join.email.selectedIndex].value == "0"
  ) {
    document.join.email2.disabled = true;

    document.join.email2.value = "이메일을 선택해 주세요";
  }

  if (
    document.join.email.options[document.join.email.selectedIndex].value == "9"
  ) {
    document.join.email2.disabled = false;

    document.join.email2.value = "";

    document.join.email2.focus();
  } else {
    document.join.email2.disabled = true;

    document.join.email2.value =
      document.join.email.options[document.join.email.selectedIndex].value;
  }
}

const mLogBtn = document.querySelector(".mLog_log"),
  mSignBtn = document.querySelector(".mLog_sign");
function mLogLoad() {
  const ham = document.querySelector(".hamBtn"),
    nav = document.querySelector(".mNavWrap"),
    first = ham.querySelector("span:first-child"),
    second = ham.querySelector("span:nth-child(2)"),
    last = ham.querySelector("span:last-child"),
    search = document.querySelector(".searchBtn");

  ham.style.right = "10px";
  ham.style.transitionDuration = "500ms";
  nav.style.transitionDuration = "500ms";
  first.style.transform = "translateY(0)" + "rotate(0)";
  first.style.background = "black";
  second.style.opacity = 1;
  last.style.transform = "translateY(0)" + "rotate(0)";
  last.style.background = "black";
  document.querySelector(".hamBtn").removeAttribute("id");
  nav.style.marginLeft = "100%";
  // logDisplay.style.transitionDuration = "500ms";
  logDisplay.style.display = "block";
  search.style.right = "0%";
}

mLogBtn.addEventListener("click", function () {
  mLogLoad();
  logDisplay.style.transitionDuration = "500ms";
  logDisplay.style.display = "block";
  signBtn.classList.remove("display");
  logBtn.classList.add("display");
  log.classList.add("show");
  sign.classList.remove("show");
});

mSignBtn.addEventListener("click", function () {
  mLogLoad();
  logDisplay.style.transitionDuration = "500ms";
  logDisplay.style.display = "block";
  signBtn.classList.add("display");
  logBtn.classList.remove("display");
  sign.classList.add("show");
  log.classList.remove("show");
});
