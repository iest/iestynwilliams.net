document.addEventListener("DOMContentLoaded", function(event) {
  var currentTime = new Date();

  currentTime = currentTime.getHours();

  if (currentTime <= 8 || currentTime >= 20) {
    document.querySelector('html').classList.add('night-mode');
  }
});