document.addEventListener("DOMContentLoaded", () => {
    // Mobile menu toggle
    const menuIcon = document.querySelector(".ri-menu-3-fill");
    const navLinks = document.querySelector(".nav-part2");
    const signInButton = document.querySelector(".nav button");
    const overlay = document.getElementById("overlay");
    const formContainer = document.getElementById("signInForm");

    // Toggle the navigation menu
    menuIcon.addEventListener("click", () => {
        const isVisible = navLinks.style.display === "flex";
        navLinks.style.display = isVisible ? "none" : "flex";
    });

    // Show the Sign-In form
    signInButton.addEventListener("click", () => {
        formContainer.style.display = "block";
        overlay.style.display = "block";
    });

    // Close the Sign-In form when clicking outside
    overlay.addEventListener("click", () => {
        formContainer.style.display = "none";
        overlay.style.display = "none";
    });

    // Close the Sign-In form when clicking "Cancel"
    formContainer.querySelector(".cancel").addEventListener("click", () => {
        formContainer.style.display = "none";
        overlay.style.display = "none";
    });

    // Handle form submission
    formContainer.querySelector("form").addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Sign-In form submitted!");
        formContainer.style.display = "none";
        overlay.style.display = "none";
    });
});
