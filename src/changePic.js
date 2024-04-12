export { switchImageForward };
export { switchImageBack };
export { circleClick };
const circle1 = document.querySelector("#circle1");
const circle2 = document.querySelector("#circle2");
const circle3 = document.querySelector("#circle3");

function switchImageForward(forwardBtn, imgEle, parentEle, picArr) {
  forwardBtn.addEventListener("click", (e) => {
    if (imgEle.src === picArr[0]) {
      imgEle.src = picArr[1];
      circle2.style.backgroundColor = "#2e2e2e";
      circle1.style.backgroundColor = "white";
      circle3.style.backgroundColor = "white";
    } else {
      if (imgEle.src === picArr[1]) {
        imgEle.src = picArr[2];
        circle3.style.backgroundColor = "#2e2e2e";
        circle1.style.backgroundColor = "white";
        circle2.style.backgroundColor = "white";
      } else {
        if (imgEle.src === picArr[2]) {
          imgEle.src = picArr[0];
          circle1.style.backgroundColor = "#2e2e2e";
          circle2.style.backgroundColor = "white";
          circle3.style.backgroundColor = "white";
        }
      }
    }
  });
}

function switchImageBack(backBtn, imgEle, parentEle, picArr) {
  backBtn.addEventListener("click", (e) => {
    if (imgEle.src === picArr[0]) {
      imgEle.src = picArr[2];
      circle3.style.backgroundColor = "#2e2e2e";
      circle1.style.backgroundColor = "white";
      circle2.style.backgroundColor = "white";
    } else {
      if (imgEle.src === picArr[2]) {
        imgEle.src = picArr[1];
        circle2.style.backgroundColor = "#2e2e2e";
        circle1.style.backgroundColor = "white";
        circle3.style.backgroundColor = "white";
      } else {
        if (imgEle.src === picArr[1]) {
          imgEle.src = picArr[0];
          circle1.style.backgroundColor = "#2e2e2e";
          circle2.style.backgroundColor = "white";
          circle3.style.backgroundColor = "white";
        }
      }
    }
  });
}

function circleClick(imgEle, picArr) {
  circle1.addEventListener("click", () => {
    imgEle.src = picArr[0];
  });
}
