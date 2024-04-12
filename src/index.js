import { dropDown } from "./dropDownBtn";
import { displayImage } from "./displayImg";

const btn1 = document.querySelector(".button");
const showDiv1 = document.querySelector("#list-items");
const btn2 = document.querySelector(".button2");
const showDiv2 = document.querySelector("#list-items2");

dropDown(btn1, showDiv1);
dropDown(btn2, showDiv2);

displayImage();
