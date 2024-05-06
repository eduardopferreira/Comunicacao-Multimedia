const onGoing = "./images/onGoing/";
const imageExtension = "png"; // Extension of your image files
const imageCount2 = 248; // Number of images you have

const videoInicial = document.getElementById("onGoing");

// Function to preload images
function preloadImages() {
  for (let i = 1; i <= imageCount; i++) {
    const img = new Image();
    img.src = `${recipeDisplay}${i
      .toString()
      .padStart(4, "0")}.${imageExtension}`;
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

// Start updating the video with images
updateOnGoing();
