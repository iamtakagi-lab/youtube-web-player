const urlInput = document.getElementById("url");
const playButton = document.getElementById("play");
const player = document.getElementById("player");
const qualitySelectbox = document.getElementById("quality")

const play = () => {
  const url = urlInput.value
  const quality = qualitySelectbox.value
  const streamUrl = `https://ytwp.iamtakagi.net/stream?url=${url}&quality=${quality}`
  player.src = streamUrl
}

playButton.addEventListener("click", () => {
  play();
});