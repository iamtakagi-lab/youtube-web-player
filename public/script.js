const urlInput = document.getElementById("url");
const playButton = document.getElementById("play");
const player = document.getElementById("player");

const play = () => {
  const qualitySelectbox = document.getElementById("quality")
  const url = urlInput.value
  const quality = qualitySelectbox.value
  const streamUrl = `https://ytwp.iamtakagi.net/stream?url=${url}&quality=${quality}`
  console.log(streamUrl)
  player.src = streamUrl
}

playButton.addEventListener("click", () => {
  play();
});
