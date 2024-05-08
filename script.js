const onGoing = "./images/onGoing/";
const imageExtension = "png"; // Extension of your image files
const imageCount2 = 309; // Number of images you have
let currentImageIndex = 50;
let first = true;

const videoInicial = document.getElementById("onGoing");

// Function to preload images
function preloadImages() {
  for (let i = 1; i <= imageCount2; i++) {
    const img = new Image();
    img.src = `${onGoing}${i.toString().padStart(4, "0")}.${imageExtension}`;
  }
}

function updateOnGoing() {
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
      if (currentImageIndex === 240) {
        // Assuming you want to loop back to the 50th image
        incrementing = true;
      }
    }
  }
  changeImage();

  // Set an interval to change images
  setInterval(changeImage, 50); // Change image every 100 milliseconds
}

// Start updating the video with images
//updateOnGoing();

onscroll = function () {
  if (first) {
    updateOnGoing();
    first = false;
  }
  console.log("scrolling");
};
