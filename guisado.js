const recipeDisplay = "./images/recipeDisplay/"; // Path to your images folder
const guisado = "./images/guisado/";
const imageExtension = "png"; // Extension of your image files
const imageCount = 239; // Number of images you have
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

  const recipeGuisado = document.getElementById("recipeGuisado");
  var ispressing = false;
  var originalmouseX;
  var originalmouseY;

  recipeGuisado.addEventListener("mousedown", (event) => {
    event.preventDefault();
    originalmouseX = event.clientX;
    originalmouseY = event.clientY;
    ispressing = true;
  });

  recipeGuisado.addEventListener("mousemove", (event) => {
    if (ispressing) {
      var mouseX = event.clientX;
      var mouseY = event.clientY;
      if (mouseX > originalmouseX) {
        spinDirection = "right";
      } else if (mouseX < originalmouseX) {
        spinDirection = "left";
      }
      originalmouseX = event.clientX;
      originalmouseY = event.clientY;
    }
  });

  recipeGuisado.addEventListener("mouseup", (event) => {
    ispressing = false;
  });

  // Set an interval to change images
  //setInterval(changeImage, 10); // Change image every 100 milliseconds

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
