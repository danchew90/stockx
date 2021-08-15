const subBtn = document.querySelector(".mBtn"),
  mSub = document.querySelector(".mSub");
const ham = document.querySelector(".hamBtn"),
  mNav = document.querySelector(".mNavWrap"),
  nav = document.querySelector(".mNavWrap"),
  first = ham.querySelector("span:first-child"),
  second = ham.querySelector("span:nth-child(2)"),
  last = ham.querySelector("span:last-child");

subBtn.addEventListener("click", function () {
  mSub.style.transitionDuration = "500ms";
  mSub.classList.toggle("mShow");
});

function hamEvent() {
  let close = document.getElementById("mClose");
  if (!close) {
    ham.style.right = "40%";
    ham.style.transitionDuration = "500ms";

    first.style.transform = "translateY(8px)" + "rotate(45deg)";
    first.style.background = "white";
    second.style.opacity = 0;
    last.style.transform = "translateY(-10px)" + "rotate(-45deg)";
    last.style.background = "white";
    ham.id = "mClose";
    nav.style.transitionDuration = "500ms";
    nav.style.marginLeft = "50%";
    document.querySelector(".searchBtn").style.transitionDuration = "500ms";
    document.querySelector(".searchBtn").style.right = "50%";
  } else {
    ham.style.right = "10px";
    ham.style.transitionDuration = "500ms";
    first.style.transform = "translateY(0)" + "rotate(0)";
    first.style.background = "black";
    second.style.opacity = 1;
    last.style.transform = "translateY(0)" + "rotate(0)";
    last.style.background = "black";
    document.querySelector(".hamBtn").removeAttribute("id");
    nav.style.transitionDuration = "500ms";
    nav.style.marginLeft = "100%";
    document.querySelector(".searchBtn").style.transitionDuration = "500ms";
    document.querySelector(".searchBtn").style.right = "00%";
  }
}

ham.addEventListener("click", hamEvent);
