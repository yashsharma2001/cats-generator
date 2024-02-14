const generateBtn = document.getElementById("generate-btn");
const catImage = document.getElementById("cat-image");
const catFact = document.getElementById("cat-fact");

function generateCat() {
  fetch("https://api.thecatapi.com/v1/images/search")
    .then((response) => response.json())
    .then((data) => {
      const imageUrl = data[0].url;
      catImage.src = imageUrl;
    });

  fetch("https://meowfacts.herokuapp.com/")
    .then((response) => response.json())
    .then((data) => {
      const factText = data.text;
      catFact.textContent = factText;
    });
}

generateBtn.addEventListener("click", generateCat);

document.addEventListener("DOMContentLoaded", function () {
  generateCat();
});
