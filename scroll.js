var currentSection = 0;

var text = document.getElementById("text");

text.addEventListener("click", (event) => {
  currentSection++;

  if (currentSection > 2) {
    currentSection = 0;
  }
  if (currentSection == 0) {
    var id1 = "section" + 2;
  } else var id1 = "section" + (currentSection - 1);
  var id2 = "section" + currentSection;

  var current = document.getElementById(id1);
  var changing = document.getElementById(id2);

  current.classList.toggle("hidden");
  changing.classList.toggle("hidden");

  console.log(currentSection);
});
