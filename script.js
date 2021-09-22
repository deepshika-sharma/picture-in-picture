const video = document.getElementById("video");
const startBtn = document.getElementById("start-btn");
const stopBtn = document.getElementById("stop-btn");

//Prompt user to select video stream, pass to video element, then play
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    video.srcObject = mediaStream;
    video.onloadedmetadata = () => {
      video.play();
    };
  } catch (err) {
    console.error("Something went wrong! " + err);
  }
}

// Start button Event Listener
startBtn.addEventListener("click", async () => {
  // Disable button
  startBtn.disabled = true;
  startBtn.hidden = true;
  stopBtn.hidden = false;

  // Start Picture in Picture
  await video.requestPictureInPicture();

  // Reset button
  startBtn.disabled = false;
});

// Stop button Event Listener
stopBtn.addEventListener("click", () => {
  if ("pictureInPictureEnabled" in document) {
    document.exitPictureInPicture();
    startBtn.hidden = false;
    stopBtn.hidden = true;
  }
});

// onLoad
selectMediaStream();
