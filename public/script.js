const urlInput = document.getElementById("url");
const playButton = document.getElementById("play");
const player = document.getElementById("player");

const play = () => {
  const url = urlInput.value
  const streamUrl = `https://ytwp.iamtakagi.net/stream?url=${url}`
  player.src = streamUrl
}

playButton.addEventListener("click", () => {
  play();
});