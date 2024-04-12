import lamarjackson from "./assets/lamarjackson.png";
import joeflacco from "./assets/joeflacco.png";
import markandrews from "./assets/markandrews.png";
import { switchImageForward } from "./changePic.js";
import { switchImageBack } from "./changePic.js";
import { circleClick } from "./changePic.js";

import "./styles/style.css";
export { displayImage };

let picContainer = document.querySelector("#pictureContainer");
const circle1 = document.querySelector("#circle1");

const picArr = [lamarjackson, joeflacco, markandrews];

function displayImage() {
  console.log(picArr);
  const buttonBack = document.createElement("button");
  buttonBack.id = "backBtn";
  buttonBack.textContent = "<";
  picContainer.appendChild(buttonBack);

  const img1 = document.createElement("img");
  img1.id = "lamar";
  img1.src = lamarjackson;
  picContainer.appendChild(img1);
  const buttonForward = document.createElement("button");
  buttonForward.id = "forwardBtn";
  buttonForward.textContent = ">";
  picContainer.appendChild(buttonForward);
  switchImageForward(buttonForward, img1, picContainer, picArr);
  switchImageBack(buttonBack, img1, picContainer, picArr);
  circleClick(img1, picArr);
  circle1.style.backgroundColor = "#2e2e2e";
}
