const video = document.getElementById("video");
const btn = document.getElementById("btn");

// console.log(video.src);

// Capturing Stream
// async function startCapture() {
//   //   let captureStream = null;
//   try {
//     video.src = await navigator.mediaDevices.getDisplayMedia();
//   } catch (err) {
//     console.error("Error: " + err);
//   }
//   //   return captureStream;
// }

// console.log(video.src);

// Enabling Picture in Picture
// if ("pictureInPictureEnabled" in document) {
//   pipBtn.classList.remove("hidden");
//   pipBtn.disabled = false;

//   pipBtn.addEventListener("click", () => {
//     try {
//       video.requestPictureInPicture();
//       pipBtn.textContent = "Exit Pic in Pic";
//     } catch (error) {
//       console.log("Something went wrong!");
//     }
//   });
// }

// // Closing Picture in Picture
// pipBtn.addEventListener("click", () => {
//   if (document.pictureInPictureElement) {
//     try {
//       document.exitPictureInPicture();
//       pipBtn.textContent = "Enter Pic in Pic";
//     } catch (error) {
//       console.log("Something went wrong!");
//     }
//   }
// });

// onLoad
// startCapture();
