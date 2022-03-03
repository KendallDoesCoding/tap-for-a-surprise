// Open any random song url in the You May Like directory.

const randomSongBtn = document.getElementById("random-button");

const links = [
  "https://bit.ly/suprise-1",
  "https://bit.ly/suprise-2",
  "https://bit.ly/suprise-3",
  "https://bit.ly/suprise-4",
];
let openStuff = function () {
  // get a random number between 0 and the number of links
  var randIdx = Math.random() * links.length;
  // round it, so it can be used as array index
  randIdx = parseInt(randIdx, 10);
  // construct the link to be opened
  var link = links[randIdx];
  // open it in a new window / tab (depends on browser setting)
  window.open(link);
};

randomSongBtn.onClick = openStuff;
