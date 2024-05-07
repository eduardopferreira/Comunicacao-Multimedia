const recipeDisplay = "./images/recipeDisplay/"; // Path to your images folder
const panqueca = "./images/panqueca/";
const imageExtension = "png"; // Extension of your image files
const imageCount = 120; // Number of images you have
const imageCount1 = 300; // Number of images you have

const videoToalha = document.getElementById("image");
const videoPanqueca = document.getElementById("panqueca");

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
    img.src = `${panqueca}${i.toString().padStart(4, "0")}.${imageExtension}`;
  }
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
      if (currentImageIndex === 1) {
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
    videoPanqueca.src = `${panqueca}${currentImageIndex
      .toString()
      .padStart(4, "0")}.${imageExtension}`;
    if (incrementing) {
      currentImageIndex++;
      if (currentImageIndex === imageCount1) {
        currentImageIndex = 1;
      }
    }
  }

  // Set an interval to change images
  setInterval(changeImage, 10); // Change image every 100 milliseconds
}

// Start updating the video with images
updateBackground();
updateReceitas();
