const onGoing = "./images/onGoing/";
const imageExtension = "png"; // Extension of your image files
const imageCount2 = 309; // Number of images you have
let currentImageIndex = 50;
let first = true;

const videoInicial = document.getElementById("onGoing");

const music = document.getElementById("musica");
music.volume = 0.3;

document.addEventListener("scroll", () => {
  console.log("scrolling");
  music.play();
});

// Function to preload images
function preloadImages() {
  for (let i = 1; i <= imageCount2; i++) {
    const img = new Image();
    img.src = `${onGoing}${i.toString().padStart(4, "0")}.${imageExtension}`;
  }
}

const logo = document.getElementById("logo");

// logo.addEventListener("mouseout", () => {
//   initialText.style.display = "none"; // Hide the text initially
//   sombra.style.display = "none"; // Hide the shadow initially
// });

const initialText = document.getElementById("initialText");
initialText.style.display = "none"; // Hide the text initially

const sombra = document.getElementById("sombra");
sombra.style.display = "none"; // Hide the shadow initially

const fadeInText = document.querySelector(".fade-in-text");
fadeInText.style.display = "none"; // Hide the text initially

function updateOnGoing() {
  let incrementing = true;

  function changeImage() {
    videoInicial.src = `${onGoing}${currentImageIndex
      .toString()
      .padStart(4, "0")}.${imageExtension}`;

    if (incrementing) {
      currentImageIndex++;
      if (currentImageIndex === 220) {
        fadeInText.style.display = "block"; // Show the text when currentImageIndex is 240
        logo.addEventListener("mouseover", () => {
          initialText.style.display = "block"; // Show the text when mouse is over the logo
          sombra.style.display = "block"; // Show the shadow when mouse is over the logo
          
          // Reset the animation by removing and re-adding the class
          initialText.style.animation = "none";
          sombra.style.animation = "none";
          
          // Use setTimeout to ensure the animation properties are reset
          setTimeout(() => {
            initialText.style.animation = "fadeIn 2s forwards";
            sombra.style.animation = "fadeIn 2s forwards";
          }, 10); // A short delay to reset the animation
        });
        
        logo.addEventListener("mouseout", () => {
          // Trigger the fade-out animation
          initialText.style.animation = "fadeOut 2s forwards";
          sombra.style.animation = "fadeOut 2s forwards";
          
          // Set a timeout to hide the elements after the fade-out animation completes
          setTimeout(() => {
            initialText.style.display = "none";
            sombra.style.display = "none";
          }, 2000); // Match the duration of the fade-out animation (2s)
        });
      }
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
};
