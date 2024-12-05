// Get the elements
const menuIcon = document.getElementById('menuIcon'); // Mobile menu icon
const navPart2 = document.querySelector('.nav-part2'); // Navigation links container
const signInForm = document.getElementById('signInForm'); // Sign-in form modal
const signInBtn = document.createElement('button'); // Create the "Sign In" button dynamically

// Set properties for the "Sign In" button
signInBtn.innerText = "Sign In";
signInBtn.style.fontSize = "1.1vw";
signInBtn.style.padding = "0.7vw 1.4vw";
signInBtn.style.backgroundColor = "teal";
signInBtn.style.color = "#dadada";
signInBtn.style.border = "none";
signInBtn.style.borderRadius = "2.5px";
signInBtn.style.fontWeight = "600";
signInBtn.id = "signInBtn";

// Add the button to the navigation on desktop
if (window.innerWidth > 600) {
    document.querySelector('.nav-part2').appendChild(signInBtn);
}

// Show or hide the navigation menu on mobile
menuIcon.addEventListener('click', () => {
    navPart2.classList.toggle('active'); // Toggle the active class
});

// Show the sign-in form modal
signInBtn.addEventListener('click', () => {
    signInForm.style.display = 'block'; // Display the sign-in form
});

// Hide the sign-in form modal when clicking the cancel button
signInForm.addEventListener('click', (event) => {
    if (event.target.classList.contains('cancel')) {
        signInForm.style.display = 'none'; // Hide the form
    }
});

// Close the form when clicking outside of it
window.addEventListener('click', (event) => {
    if (event.target === signInForm) {
        signInForm.style.display = 'none'; // Hide the form
    }
});

// Ensure the Sign In button is added to the mobile dropdown
window.addEventListener('resize', () => {
    if (window.innerWidth <= 600) {
        if (!navPart2.contains(signInBtn)) {
            navPart2.appendChild(signInBtn); // Add the button to the dropdown
        }
    } else {
        // Move the button back to its original position for desktop
        if (navPart2.contains(signInBtn)) {
            document.querySelector('.nav-part2').appendChild(signInBtn);
        }
    }
});
// Get the Explore More button and the target section
const exploreMoreBtn = document.querySelector('.content button'); // Assuming the button is in the .content section
const infoSection = document.querySelector('.info-section'); // The section you want to scroll to

// Add click event to the Explore More button
exploreMoreBtn.addEventListener('click', () => {
    infoSection.scrollIntoView({
        behavior: 'smooth', // Smooth scroll animation
        block: 'start'      // Scroll to the top of the target section
    });
});
