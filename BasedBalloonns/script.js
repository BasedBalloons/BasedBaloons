// script.js - Based Balloons Interactivity

document.addEventListener("DOMContentLoaded", function () {
  const jazzAudio = new Audio("audio/jazz.mp3");
  jazzAudio.loop = true;
  jazzAudio.volume = 0; // Start muted

  const soundbar = document.getElementById("soundbar");
  const soundIcon = document.getElementById("sound-icon");
  const volumeSlider = document.getElementById("volume-slider");

  // Click toggles play/pause (unless it's the slider)
  soundbar.addEventListener("click", (e) => {
    if (e.target === volumeSlider) return;

    if (jazzAudio.paused) {
      jazzAudio.play();
      if (volumeSlider.value > 0) {
        soundIcon.src = "icons/sound-on.apng";
      }
    } else {
      jazzAudio.pause();
      soundIcon.src = "icons/sound-muted.apng";
    }
  });

  // Volume slider control
  volumeSlider.addEventListener("input", () => {
    const volume = volumeSlider.value / 100;
    jazzAudio.volume = volume;

    if (volume === 0) {
      soundIcon.src = "icons/sound-muted.apng";
    } else {
      soundIcon.src = "icons/sound-on.apng";
      if (jazzAudio.paused) jazzAudio.play();
    }
  });
});


