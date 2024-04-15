const image = document.querySelector(".image");
const textEl = document.querySelector(".parallax");
 

function setTranslate(xPos, yPos, el) {
 el.style.transform = "translate3d(" + xPos + ", " + yPos + "px, 0)";
}


window.addEventListener("DOMContentLoaded", scrollLoop, false);


let xScrollPosition;
let yScrollPosition;


function scrollLoop() {
  xScrollPosition = window.pageXOffset;
  yScrollPosition = window.pageYOffset;
 
  
  setTranslate(0, yScrollPosition * -0.2, image);
  setTranslate(0, yScrollPosition * 0.1, textEl);
 
  
  requestAnimationFrame(scrollLoop);
}











const imgContent = document.querySelectorAll('.img-content-hover');

function showImgContent(e) {
  for(var i = 0; i < imgContent.length; i++) {
    x = e.pageX;
    y = e.pageY;
    imgContent[i].style.transform = `translate3d(${x}px, ${y}px, 0)`;
  }
};

document.addEventListener('mousemove', showImgContent);