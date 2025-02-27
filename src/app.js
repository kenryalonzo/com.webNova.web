
// Get the hamburger button and mobile menu
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

// Add event listener to toggle the mobile menu visibility
hamburger.addEventListener('click', function () {
    mobileMenu.classList.toggle('open');
});



// cinquième section
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const carouselImages = document.getElementById('carouselImages');
const totalImages = carouselImages.children.length; // 5 images
let currentIndex = 0;

// Function to move to the next image
function moveToNext() {
    if (currentIndex < totalImages - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; // Reset to the first image
    }
    updateCarousel();
}

// Function to move to the previous image
function moveToPrev() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalImages - 1; // Move to the last image
    }
    updateCarousel();
}

// Function to update carousel position
function updateCarousel() {
    carouselImages.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Event listeners for buttons
nextBtn.addEventListener('click', moveToNext);
prevBtn.addEventListener('click', moveToPrev);


// Sixième section
document.addEventListener('DOMContentLoaded', function () {
    // Select all FAQ items
    const faqItems = document.querySelectorAll('.faq-item');

    // Loop through all the FAQ items
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        const arrow = item.querySelector('.arrow-icon');

        // When a question is clicked
        question.addEventListener('click', function () {
            // Toggle the visibility of the answer
            if (answer.classList.contains('hidden')) {
                answer.classList.remove('hidden');
                answer.classList.add('show');
                // Rotate the arrow when clicked
                arrow.classList.add('rotate');
            } else {
                answer.classList.remove('show');
                answer.classList.add('hidden');
                // Reset the arrow rotation
                arrow.classList.remove('rotate');
            }
        });
    });
});


