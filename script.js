const imagesFolder = "./images/"; // Path to your images folder
const imageExtension = "png"; // Extension of your image files
const imageCount = 240; // Number of images you have

const videoElement = document.getElementById("image");

// Function to preload images
function preloadImages() {
  for (let i = 1; i <= imageCount; i++) {
    const img = new Image();
    img.src = `${imagesFolder}${i
      .toString()
      .padStart(4, "0")}.${imageExtension}`;
  }
}

// Function to update the video with images
function updateVideo() {
  let currentImageIndex = 0;
  let incrementing = true;

  function changeImage() {
    videoElement.src = `${imagesFolder}${currentImageIndex
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

// Start updating the video with images
updateVideo();
