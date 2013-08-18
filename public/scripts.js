var currentTime = new Date();

currentTime = currentTime.getHours();

if (currentTime <= 6 || currentTime >= 20) {
  document.querySelector('html').classList.add('night');
}