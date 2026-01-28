let clickCount = 0;
const MAX_CLICKS = 8;
let fontSize = 1.2; // Starting rem size
let paddingVertical = 15;
let paddingHorizontal = 30;

// 1. Add your custom image URLs here!
const imageList = [
  "img/confused.gif",
  "img/nailong.gif",
  "img/dog.gif",
  "img/pikachu.gif",
  "img/cat.gif",
  "img/turtle.gif",
  "img/penguin.gif",
  "img/deal.gif",
];

// 2. Add your custom phrases here!
const phrases = [
  "No? Creo que te confundiste de boton amor",
  "Amor el boton es el rosado no el gris",
  "El boton grandote que dice YES, ese es el bueno",
  "Amor creo que te estas confundiendo de boton",
  "El otro, el otro",
  "El boton grandote amor, tu puedes",
  "Amorcito tu puedes, el que dice YES",
  "Let's make a deal, tu le das a si y yo te consentiré till death do us apart",
];

function handleNo() {
  clickCount++;

  const yesBtn = document.getElementById("yesBtn");
  const questionText = document.getElementById("questionText");
  const displayImg = document.getElementById("displayImg");
  const noBtn = document.getElementById("noBtn");

  // Check if we reached the limit
  if (clickCount > MAX_CLICKS) {
    resetGame();
    return;
  }

  // 1. Grow the Yes Button
  fontSize += 0.4;
  paddingVertical += 8;
  paddingHorizontal += 12;
  yesBtn.style.fontSize = `${fontSize}rem`;
  yesBtn.style.padding = `${paddingVertical}px ${paddingHorizontal}px`;

  // 2. Update the Main Text
  const phraseIndex = Math.min(clickCount - 1, phrases.length - 1);
  questionText.innerText = phrases[phraseIndex];

  // 3. Cycle through Images
  const imageIndex = Math.min(clickCount - 1, imageList.length - 1);
  displayImg.src = imageList[imageIndex];
}

function resetGame() {
  const yesBtn = document.getElementById("yesBtn");
  const questionText = document.getElementById("questionText");
  const displayImg = document.getElementById("displayImg");

  // Reset counters
  clickCount = 0;
  fontSize = 1.2;
  paddingVertical = 15;
  paddingHorizontal = 30;

  // Apply reset styles
  yesBtn.style.fontSize = `${fontSize}rem`;
  yesBtn.style.padding = `${paddingVertical}px ${paddingHorizontal}px`;

  // The "Mocking" Reset
  questionText.innerText =
    "Mi amor creo que no le entendiste a la pregunta. Vamos de nuevo. Will you be my Valentines? 💖";
  displayImg.src = "img/pachirisu.gif"; // Back to original or a 'judging' image
}

function handleYes() {
  const overlay = document.getElementById("videoOverlay");
  const video = document.getElementById("successVideo");

  // Show the overlay
  overlay.style.display = "flex";

  // Play the video
  video.play();

  // Optional: You can still change the background content if they close the video
  document.getElementById("mainContainer").innerHTML = `
      <h1>Love you mi princesita 🥰</h1>
      <p>Check the video!</p>
  `;
}

// Function to close the video if they want to go back to the page
function closeVideo() {
  const overlay = document.getElementById("videoOverlay");
  const video = document.getElementById("successVideo");

  video.pause();
  overlay.style.display = "none";
}
