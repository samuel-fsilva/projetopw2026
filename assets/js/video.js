let sreenWidth = window.getComputedStyle(document.body).width;

window.addEventListener("load", () => {
  if (parseFloat(sreenWidth) < 450) {
    let video = document.getElementById("background-video");
    video.remove();
    let imgs = document.querySelectorAll("img");
    imgs.forEach((img) => {
      console.log(img.src)
    });

    /*dotsImages.forEach(dotImg => {
       dotImg.remove() 
    });*/
  }
});
