const playButton = document.getElementById('playButton');
const myAudio = document.getElementById('myAudio');

playButton.addEventListener('click', () => {
  if (myAudio.paused) {
    myAudio.currentTime = 0; // Restart from beginning
    myAudio.play();
  } else {
    myAudio.pause();
  }
});
