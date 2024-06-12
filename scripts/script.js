// NAVBAR 
var home_page = document.getElementById('home-page');
var about_page = document.getElementById('about-page');
var shelf_page = document.getElementById('shelf-page');
var builds_page = document.getElementById('builds-page');
var home_page_btn = document.getElementById('homePageBtn');
var about_page_btn = document.getElementById('aboutPageBtn');
var builds_page_btn = document.getElementById('buildsPageBtn');
var shelf_page_btn = document.getElementById('shelfPageBtn');

// Batch style changes for navigation buttons
function setActivePage(activeBtn, activePage) {
    // Reset all buttons to default color
    home_page_btn.style.color = '#a0a0a0';
    about_page_btn.style.color = '#a0a0a0';
    builds_page_btn.style.color = '#a0a0a0';
    shelf_page_btn.style.color = '#a0a0a0';
    // Hide all pages
    home_page.style.display = 'none';
    about_page.style.display = 'none';
    builds_page.style.display = 'none';
    shelf_page.style.display = 'none';
    // Set active button color and show active page
    activeBtn.style.color = '#242424';
    activePage.style.display = 'block';
}

home_page_btn.addEventListener('click', function() {
    setActivePage(home_page_btn, home_page);
});

about_page_btn.addEventListener('click', function() {
    setActivePage(about_page_btn, about_page);
});

builds_page_btn.addEventListener('click', function() {
    setActivePage(builds_page_btn, builds_page);
});

shelf_page_btn.addEventListener('click', function() {
    setActivePage(shelf_page_btn, shelf_page);
});

// POGO CODE
var pogo_btn = document.getElementById('pogoBtn');
var pogo_img = document.getElementById('pogoImg');
pogo_img.style.display = 'none';

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

// Attach debounced event listener to POGO button
pogo_btn.addEventListener('click', debounce(togglePogoImage, 100));