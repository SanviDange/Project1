// FADE ON HOMEPAGE

setTimeout(function() {
  document.getElementById('splash-screen').classList.add('hidden');
  document.getElementById('main-content').classList.remove('hidden');
  document.getElementById('main-content').style.display = 'block'; // Explicitly set display
  document.body.style.overflow = 'auto';
}, 15000);

// IMAGE SWITCH
function removeFilter(image) {
  image.classList.add("noFilter");
}