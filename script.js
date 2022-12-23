// Initialize slider
var slider = document.querySelector('.slider');
var sliderBefore = document.querySelector('.slider-before');
var sliderAfter = document.querySelector('.slider-after');

// Set up event listener for mouse movement on slider
slider.addEventListener('mousemove', function(event) {
  var x = event.clientX;
  var y = event.clientY;

  // Calculate percentage of mouse position on slider
  var percentage = x / this.offsetWidth;

  // Set width of before and after images based on percentage
  sliderBefore.style.width = percentage * 100 + '%';
  sliderAfter.style.width = (1 - percentage) * 100 + '%';
});
