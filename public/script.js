const urlInput = document.getElementById("url");
const playButton = document.getElementById("play");
const player = document.getElementById("player");

playButton.addEventListener("click", () => {
  player.src = `https://ytwp.iamtakagi.net/stream?url=${urlInput.value}`
});
