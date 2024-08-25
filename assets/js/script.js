// Selecting the fixed-bottom-right element
let fixedBottomRight = document.querySelector('.fixed-bottom-right');

// Selecting the circle element used for the progress ring
let circle = document.querySelector('.progress-ring__circle');

// Getting the radius of the circle (used to calculate the circumference)
let radius = circle.r.baseVal.value;

// Calculating the circumference of the circle
let circumference = 2 * Math.PI * radius;

// Setting the strokeDasharray property to match the circumference
// This ensures that the entire circle's stroke is evenly divided
circle.style.strokeDasharray = `${circumference} ${circumference}`;

// Initially offsetting the stroke to hide the progress ring
circle.style.strokeDashoffset = circumference;

// Function to update the progress ring based on scroll percentage
function setProgress(percent) {
    // Calculate the stroke offset based on the scroll percentage
    const offset = circumference - (percent / 100) * circumference;

    // Apply the calculated offset to the circle's strokeDashoffset
    circle.style.strokeDashoffset = offset;
}

// Function to handle scroll events
function handleScroll() {
     // Getting the current scroll position
    let scrollPosition = window.scrollY;

    // Threshold to show the fixed button (e.g., show after scrolling 400px)
    let showScrollThreshold = 400;

    // Adjusting opacity and pointer events based on scroll position
    let scrollHeight = document.documentElement.scrollHeight - window.innerHeight;

    // Calculate the total scrollable height of the document
    let scrollProgress = (scrollPosition / scrollHeight) * 100;

    // Adjusting opacity and pointer events based on scroll position
    fixedBottomRight.style.opacity = scrollPosition > showScrollThreshold ? '1' : '0';
    fixedBottomRight.style.pointerEvents = scrollPosition > showScrollThreshold ? 'auto' : 'none';

    // Update the progress ring based on scroll progress
    setProgress(scrollProgress);
}

// Adding scroll event listener to window
// This will trigger the handleScroll function whenever the user scrolls
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