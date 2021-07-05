

const bodyColor = document.querySelector("body");

function windowSize() {
    const innerWidth = window.innerWidth;
  if (innerWidth <= 600) {
    bodyColor.style.backgroundColor = "skyblue";
  } else if(innerWidth > 600 && innerWidth <= 1200)
  { bodyColor.style.backgroundColor = "purple";
  } else {
    bodyColor.style.backgroundColor = "yellow";
  }
}

window.addEventListener("resize", windowSize);