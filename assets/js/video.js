let screenWidth = window.getComputedStyle(document.body).width;
let video = document.getElementById("background-video");

window.addEventListener("load", () => {
  setVideo();
});

window.addEventListener("resize", () => {
  setVideo();
});

function setVideo() {
  screenWidth = window.getComputedStyle(document.body).width;
  if (video != undefined && parseFloat(screenWidth) < 450) {
    console.log(0);
    video.style.display = "none";
  } else {
        video.style.display = "flex";

  }
}
