const onGoing = "./images/onGoing/";
const recipeDisplay = "./images/recipeDisplay/"; // Path to your images folder
const bolo = "./images/bolo/";
const onigiri = "./images/onigiri/";
const panqueca = "./images/panqueca/";
const guisado = "./images/guisado/";
const imageExtension = "png"; // Extension of your image files
const imageCount = 120; // Number of images you have
const imageCount1 = 300; // Number of images you have
const imageCount2 = 248; // Number of images you have

const videoInicial = document.getElementById("onGoing");
const videoToalha = document.getElementById("image");
const videoBolo = document.getElementById("bolo");
const videoOnigiri = document.getElementById("onigiri");
const videoPanqueca = document.getElementById("panqueca");
const videoGuisado = document.getElementById("guisado");

// Function to preload images
function preloadImages() {
  for (let i = 1; i <= imageCount; i++) {
    const img = new Image();
    img.src = `${recipeDisplay}${i
      .toString()
      .padStart(4, "0")}.${imageExtension}`;
  }
  for (let i = 1; i <= imageCount1; i++) {
    const img = new Image();
    img.src = `${bolo}${i.toString().padStart(4, "0")}.${imageExtension}`;
  }
  for (let i = 1; i <= imageCount1; i++) {
    const img = new Image();
    img.src = `${onigiri}${i.toString().padStart(4, "0")}.${imageExtension}`;
  }
  for (let i = 1; i <= imageCount1; i++) {
    const img = new Image();
    img.src = `${panqueca}${i.toString().padStart(4, "0")}.${imageExtension}`;
  }
  for (let i = 1; i <= imageCount1; i++) {
    const img = new Image();
    img.src = `${guisado}${i.toString().padStart(4, "0")}.${imageExtension}`;
  }
  for (let i = 1; i <= imageCount2; i++) {
    const img = new Image();
    img.src = `${onGoing}${i.toString().padStart(4, "0")}.${imageExtension}`;
  }
}

function updateOnGoing() {
  let currentImageIndex = 52;
  let incrementing = true;

  function changeImage() {
    videoInicial.src = `${onGoing}${currentImageIndex
      .toString()
      .padStart(4, "0")}.${imageExtension}`;

    if (incrementing) {
      currentImageIndex++;
      if (currentImageIndex === imageCount2) {
        incrementing = false;
      }
    } else {
      currentImageIndex--;
      if (currentImageIndex === 52) {
        incrementing = true;
      }
    }
  }

  // Set an interval to change images
  setInterval(changeImage, 50); // Change image every 100 milliseconds
}

function updateBackground() {
  let currentImageIndex = 0;
  let incrementing = true;

  function changeImage() {
    videoToalha.src = `${recipeDisplay}${currentImageIndex
      .toString()
      .padStart(4, "0")}.${imageExtension}`;

    if (incrementing) {
      currentImageIndex++;
      if (currentImageIndex === imageCount) {
        incrementing = false;
      }
    } else {
      currentImageIndex--;
      if (currentImageIndex === 0) {
        incrementing = true;
      }
    }
  }

  // Set an interval to change images
  setInterval(changeImage, 50); // Change image every 100 milliseconds
}

// Function to update the video with images
function updateReceitas() {
  let currentImageIndex = 0;
  let incrementing = true;

  function changeImage() {
    videoBolo.src = `${bolo}${currentImageIndex
      .toString()
      .padStart(4, "0")}.${imageExtension}`;
    if (incrementing) {
      currentImageIndex++;
      if (currentImageIndex === imageCount1) {
        incrementing = false;
      }
    } else {
      currentImageIndex--;
      if (currentImageIndex === 0) {
        incrementing = true;
      }
    }
    videoOnigiri.src = `${onigiri}${currentImageIndex
      .toString()
      .padStart(4, "0")}.${imageExtension}`;
    if (incrementing) {
      currentImageIndex++;
      if (currentImageIndex === imageCount1) {
        incrementing = false;
      }
    } else {
      currentImageIndex--;
      if (currentImageIndex === 0) {
        incrementing = true;
      }
    }
    videoPanqueca.src = `${panqueca}${currentImageIndex
      .toString()
      .padStart(4, "0")}.${imageExtension}`;
    if (incrementing) {
      currentImageIndex++;
      if (currentImageIndex === imageCount1) {
        incrementing = false;
      }
    } else {
      currentImageIndex--;
      if (currentImageIndex === 0) {
        incrementing = true;
      }
    }
    videoGuisado.src = `${guisado}${currentImageIndex
      .toString()
      .padStart(4, "0")}.${imageExtension}`;
    if (incrementing) {
      currentImageIndex++;
      if (currentImageIndex === imageCount1) {
        incrementing = false;
      }
    } else {
      currentImageIndex--;
      if (currentImageIndex === 0) {
        incrementing = true;
      }
    }
  }

  // Set an interval to change images
  setInterval(changeImage, 10); // Change image every 100 milliseconds
}

// Start updating the video with images
updateOnGoing();
//updateBackground();
updateReceitas();
