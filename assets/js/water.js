const smallCaps = document.querySelectorAll(".cup-small");
const liters = document.querySelector(".liters");
const percentage = document.querySelector(".percentage");
const remained = document.querySelector(".remained");

// function that show the cups which has been clicked and Add the `Full` class to fill the cup

const updateBigCup = () => {
  const fullCups = document.querySelectorAll(".cup-small.full").length;
  const totalCups = smallCaps.length;
  if (fullCups === 0) {
    percentage.style.visibility = "hidden";
    percentage.style.height = 0;
  } else {
    percentage.style.visibility = "visible";
    percentage.style.height = `${(fullCups / totalCups) * 33}rem`;
    percentage.innerText = `${(fullCups / totalCups) * 100}%`;
  }
  if (fullCups === totalCups) {
    remained.style.visibility = "hidden";
    remained.style.height = 0;
  } else {
    remained.style.visibility = "visible";
    //250 = small cups liters
    // 2 = the total of liters
    liters.innerHTML = `${2 - (250 * fullCups) / 1000}L`;
  }
};
const highlightCups = (index) => {
  //we check if one of the cups has already full also we check if the next cup does not full, then we decrease the index by 1
  if (
    smallCaps[index].classList.contains("full") &&
    !smallCaps[index].nextElementSibling.classList.contains("full")
  ) {
    index--;
  }
  smallCaps.forEach((cup, i) => {
    if (i <= index) {
      cup.classList.add("full");
    } else {
      cup.classList.remove("full");
    }
  });
  updateBigCup();
};

smallCaps.forEach((cup, index) => {
  cup.addEventListener("click", () => highlightCups(index));
});
