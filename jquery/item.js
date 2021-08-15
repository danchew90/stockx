const emptyIcon = document.querySelector("#empty"),
  fullIcon = document.querySelector("#full"),
  icon = document.querySelector(".bookMark>a"),
  bookMark = document.querySelector(".bookMark");

function changeIcon(e) {
  let change = e.path[0].classList.value;

  if (change == "far fa-bookmark") {
    emptyIcon.style.transitionDuration = "500ms";
    fullIcon.style.transitionDuration = "500ms";
    emptyIcon.style.display = "none";
    fullIcon.style.display = "block";
  } else {
    emptyIcon.style.transitionDuration = "500ms";
    fullIcon.style.transitionDuration = "500ms";
    emptyIcon.style.display = "block";
    fullIcon.style.display = "none";
  }
}

bookMark.addEventListener("click", changeIcon);
