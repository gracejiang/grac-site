// POGO CODE
var pogo_btn = document.getElementById('pogoBtn');
var pixel_btn = document.getElementById('pixelBtn');

var pogo_img = document.getElementById('pogoImg');
var pixel_body = document.getElementById('pixelBody');
pogo_img.style.display = 'none';
pixel_body.style.display = 'none';

// Debounce the POGO button click event
function debounce(func, delay) {
    let timer;
    return function() {
        clearTimeout(timer);
        timer = setTimeout(func, delay);
    }
}

// Batch style changes for POGO button
function togglePogoImage() {
  if (pogo_img.style.display === 'none') {
      pogo_img.style.display = 'block';
  } else {
      pogo_img.style.display = 'none';
  }
}

function togglePixelBody() {
  if (pixel_body.style.display === 'none') {
    pixel_body.style.display = 'block';
  } else {
    pixel_body.style.display = 'none';
  }
}

// Attach debounced event listener to POGO button
pogo_btn.addEventListener('click', debounce(togglePogoImage, 100));
pixel_btn.addEventListener('click', debounce(togglePixelBody, 100));