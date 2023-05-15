const soundFolder = "sounds/";
// This line of code creates a constant variable named soundFolder and assigns it the value "sounds/".
// This variable is used throughout the program to specify the folder where the drum kit sound files are stored.
// -------------------------------------------------------------------------------------------------------------

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
// This code creates an array called soundList that contains objects representing each drum sound in the kit.
// Each object has two properties: a key property that specifies the key on the keyboard that triggers the sound,
// and a fileName property that specifies the name of the sound file.
// -------------------------------------------------------------------------------------------------------------

const drumkitContainer = document.getElementById("drumkit");
// This code gets a reference to an HTML element with an id of "drumkit" and assigns it to the
// drumkitContainer variable. This element is where the drum kit buttons will be placed on the web page.
// -------------------------------------------------------------------------------------------------------------

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
// This code defines a function called drum() that takes two parameters: folder and fileinfo.
// The folder parameter specifies the folder where the sound files are stored, and the fileInfo parameter is an
// object that contains information about a specific drum sound file. The function creates a button element with
// the name of the sound file as its text content. It also creates an audio element that loads the corresponding
// sound file. When the button is clicked, the function calls the playSound() function with the audio element as
// its parameter to play the sound. The function returns the button element so that it can be added to the
// drum kit container.
// -------------------------------------------------------------------------------------------------------------

const drumkitElements = soundList.map((soundInfo) =>
  drum(soundFolder, soundInfo)
);
// This code uses the map() method to loop through the soundList array and call the drum() function for
// each sound file. The resulting array of button elements is stored in the drumkitElements variable.
// -------------------------------------------------------------------------------------------------------------

drumkitContainer.append(...drumkitElements); // append() method takes an object as an argument and adds it to the end of an existing list
// This code adds the button elements to the drumkitContainer on the web page using the append() method.
// -------------------------------------------------------------------------------------------------------------

window.addEventListener("keydown", (event) => {
  const soundFile = soundList.find((soundInfo) => soundInfo.key === event.key);

  if (!soundFile) return; // Ends if key does not match as assigned in soundlist array.

  const sound = new Audio(soundFolder + soundFile.fileName);
  playSound(sound);
});
// This code adds an event listener to the window object to listen for keydown events.
// When a key is pressed down, the function checks if it corresponds to a valid drum sound file key
// using the find() method. If it does, the function creates an audio element for the corresponding sound file
// and calls the playSound() function to play the sound.
// -------------------------------------------------------------------------------------------------------------

function playSound(audioElement) {
  // Play sound (needs a Audio instance as parameter)
  audioElement.currentTime = 0; // set currentTime to 0 to play sound again instead of waiting for sound to end.
  audioElement.play();
}
