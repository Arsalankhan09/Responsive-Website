document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.querySelector("#menuIcon");
    const navLinks = document.querySelector(".nav-part2");
    const signInButton = document.querySelector("#signInBtn");
    const signInForm = document.querySelector("#signInForm");
    const cancelButton = document.querySelector("#cancelBtn");
    const overlay = document.querySelector("#overlay");

    // Toggle the menu on mobile
    if (menuIcon && navLinks) {
        menuIcon.addEventListener("click", () => {
            navLinks.style.display = navLinks.style.display === "flex" ? "none" : "flex";
        });
    }

    // Show the Sign-In form
    if (signInButton) {
        signInButton.addEventListener("click", () => {
            signInForm.style.display = "block";
            overlay.style.display = "block";
        });
    }

    // Hide the Sign-In form
    if (cancelButton) {
        cancelButton.addEventListener("click", () => {
            signInForm.style.display = "none";
            overlay.style.display = "none";
        });
    }

    // Hide the Sign-In form if the overlay is clicked
    if (overlay) {
        overlay.addEventListener("click", () => {
            signInForm.style.display = "none";
            overlay.style.display = "none";
        });
    }
});
