var currentTime = new Date();

currentTime = currentTime.getHours();

console.log(currentTime);

if (currentTime < 6 && currentTime > 20) {
  document.querySelector('html').classList.add('night');
}