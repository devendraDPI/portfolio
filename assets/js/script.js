// Selecting the fixed-bottom-right element
var fixedBottomRight = document.querySelector('.fixed-bottom-right');

// Function to handle scroll events
function handleScroll() {
    var scrollPosition = window.scrollY;
    var showScrollThreshold = 400;

    // Adjusting opacity and pointer events based on scroll position
    fixedBottomRight.style.opacity = scrollPosition > showScrollThreshold ? '1' : '0';
    fixedBottomRight.style.pointerEvents = scrollPosition > showScrollThreshold ? 'auto' : 'none';
}

// Adding scroll event listener to window
window.addEventListener('scroll', handleScroll);

// Adding click event listener to fixedBottomRight element
fixedBottomRight.addEventListener('click', function (e) {
    e.preventDefault();

    // Smooth scrolling to the top of the page
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});