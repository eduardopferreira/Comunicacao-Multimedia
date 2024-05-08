const recipeDisplay = "./images/recipeDisplay/"; // Path to your images folder
const guisado = "./images/guisado/";
const imageExtension = "png"; // Extension of your image files
const imageCount = 120; // Number of images you have
const imageCount1 = 300; // Number of images you have

const videoToalha = document.getElementById("image");
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
    img.src = `${guisado}${i.toString().padStart(4, "0")}.${imageExtension}`;
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
  let spinDirection = "right"; // Default spin direction

  function changeImage() {
    videoGuisado.src = `${guisado}${currentImageIndex
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
  //setInterval(changeImage, 10); // Change image every 100 milliseconds

  // Add event listeners for left and right clicks
  videoGuisado.addEventListener("click", function (event) {
    const rect = videoGuisado.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const videoWidth = rect.width;
    const halfVideoWidth = videoWidth / 2;

    if (clickX < halfVideoWidth) {
      spinDirection = "left";
    } else {
      spinDirection = "right";
    }
  });

  // Function to update the spin direction
  function updateSpinDirection() {
    if (spinDirection === "left") {
      videoGuisado.src = `${guisado}${currentImageIndex
        .toString()
        .padStart(4, "0")}.${imageExtension}`;
      if (incrementing) {
        currentImageIndex--;
        if (currentImageIndex === 0) {
          currentImageIndex = imageCount1 - 1;
        }
      } // Adjust the rotation angle as needed
    } else {
      console.log("right");
      videoGuisado.src = `${guisado}${currentImageIndex
        .toString()
        .padStart(4, "0")}.${imageExtension}`;
      if (incrementing) {
        currentImageIndex++;
        if (currentImageIndex === imageCount1) {
          currentImageIndex = 1;
        }
      } // Adjust the rotation angle as needed
    }
  }

  // Set an interval to update the spin direction
  setInterval(updateSpinDirection, 10); // Update spin direction every 10 milliseconds
}

// Start updating the video with images
updateBackground();
updateReceitas();
