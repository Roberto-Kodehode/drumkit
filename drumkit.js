// Define the base folder for sound files
const soundFolder = "sounds/";

// List of drum sound objects, each containing a key and the corresponding sound file name
const soundList = [
  { key: "q", fileName: "clap.wav" },
  { key: "w", fileName: "hihat.wav" },
  { key: "e", fileName: "kick.wav" },
  { key: "r", fileName: "openhat.wav" },
  { key: "t", fileName: "ride.wav" },
  { key: "y", fileName: "snare.wav" },
  { key: "u", fileName: "tink.wav" },
  { key: "i", fileName: "tom.wav" },
];

// Get the container element for the drum kit buttons
const drumkitContainer = document.getElementById("drumkit");

// Function to create a drum button and add click event listener to play the sound
function drum(folder, fileInfo) {
  const button = document.createElement("button");
  button.textContent =
    fileInfo.key.toUpperCase() +
    " - " +
    fileInfo.fileName.replace(".wav", "").toUpperCase();

  const sound = new Audio(folder + fileInfo.fileName);

  button.addEventListener("click", () => playSound(sound));

  return button;
}

// Create an array of drum buttons using the drum function and the soundList array
const drumkitElements = soundList.map((soundInfo) =>
  drum(soundFolder, soundInfo)
);

// Append the drum buttons to the drumkitContainer
drumkitContainer.append(...drumkitElements);

// Add keydown event listener to play the corresponding sound when a key is pressed
window.addEventListener("keydown", (event) => {
  const soundFile = soundList.find((soundInfo) => soundInfo.key === event.key);

  if (!soundFile) return;

  const sound = new Audio(soundFolder + soundFile.fileName);
  playSound(sound);
});

// Function to play the sound (resets the currentTime to replay the sound instantly)
function playSound(audioElement) {
  audioElement.currentTime = 0;
  audioElement.play();
}
