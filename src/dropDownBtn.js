export { dropDown };

function dropDown(BtnID, eleID) {
  BtnID.addEventListener("click", () => {
    if (eleID.style.display === "none") {
      eleID.style.display = "block";
    } else {
      eleID.style.display = "none";
    }
  });

  eleID.addEventListener("mouseout", () => {
    if (eleID.style.display === "none") {
      eleID.style.display = "block";
    } else {
      eleID.style.display = "none";
    }
  });
}
