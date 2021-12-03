"use strict";

const generateCatImage = document.querySelector("#generate-image");
const imagePlace = document.querySelector("#image-place");
generateCatImage.addEventListener("click", getCatImages);

async function getCatImages() {
  imagePlace.innerText = "";
  try {
    const res = await fetch("https://api.thecatapi.com/v1/images/search");
    const data = await res.json();
    const catImg = document.createElement("img");
    catImg.src = data[0].url;
    imagePlace.appendChild(catImg);
  } catch (error) {
    console.log(error);
  }
}
