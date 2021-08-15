const btn = document.querySelector(".iconBtn"),
  iconChild = btn.querySelector("i"),
  search = document.querySelector(".searchBox"),
  box = document.querySelector(".searchBox>input");

function moveSearch(e) {
  let name = e.target.className;
  if (name == "fas fa-search dis") {
    iconChild.classList.remove("dis");
    search.style.transitionDuration = "500ms";
    box.style.transitionDuration = "500ms";
    box.style.width = "0px";
    search.style.right = "-0%";
  } else {
    iconChild.classList.add("dis");
    search.style.transitionDuration = "500ms";
    box.style.width = "150px";
    search.style.right = "80%";
  }
}

btn.addEventListener("click", moveSearch);
