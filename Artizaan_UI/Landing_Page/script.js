// Wait for the DOM content to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    const getStartedButton = document.querySelector('.get-started');

    getStartedButton.addEventListener('click', function() {
        // Redirect the user to the next page when the button is clicked
        window.location.href = 'next_page.html'; // Replace 'next_page.html' with the URL of your next page
    });
    const socialIcons = document.querySelectorAll('.social-icons, .social-icons-f, .social-icons-10');
    socialIcons.forEach(function(icon) {
        icon.addEventListener('mouseover', function() {
            icon.style.transform = 'scale(1.05)';
        });
        icon.addEventListener('mouseout', function() {
            icon.style.transform = 'scale(1)';
        });
    });

    // Add hover effect to frame elements
    const frameElements = document.querySelectorAll('.frame-carpenter, .frame-Plumber, .frame-Painter');
    frameElements.forEach(function(frame) {
        frame.addEventListener('mouseover', function() {
            frame.style.transform = 'scale(1.05)';
        });
        frame.addEventListener('mouseout', function() {
            frame.style.transform = 'scale(1)';
        });
    });
});
