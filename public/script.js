const urlInput = document.getElementById("url");
const playButton = document.getElementById("play");
const player = document.getElementById("player");

playButton.addEventListener("click", () => {
  player.src = `http://localhost:3030/stream?url=${urlInput.value}`
});
