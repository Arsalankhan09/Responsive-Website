const menuIcon = document.querySelector(".ri-menu-3-fill");
const navLinks = document.querySelector(".nav-part2");

menuIcon.onclick = () => {
    navLinks.style.display = navLinks.style.display === "flex" ? "none" : "flex";
};
document.addEventListener("DOMContentLoaded", () => {
    const signInButton = document.querySelector(".nav button");

    // Function to create and display the sign-in form
    signInButton.onclick = () => {
        // Check if the form already exists
        if (document.querySelector("#signInForm")) return;

        // Create the form container
        const formContainer = document.createElement("div");
        formContainer.id = "signInForm";
        formContainer.style.position = "fixed";
        formContainer.style.top = "50%";
        formContainer.style.left = "50%";
        formContainer.style.transform = "translate(-50%, -50%)";
        formContainer.style.backgroundColor = "#fff";
        formContainer.style.padding = "20px";
        formContainer.style.border = "1px solid #ccc";
        formContainer.style.borderRadius = "8px";
        formContainer.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
        formContainer.style.zIndex = "1000";

        // Create the form HTML
        formContainer.innerHTML = `
            <h3>Sign In</h3>
            <form>
                <label for="email">Email:</label><br>
                <input type="email" id="email" placeholder="Enter your email" required><br><br>
                <label for="password">Password:</label><br>
                <input type="password" id="password" placeholder="Enter your password" required><br><br>
                <button type="submit" style="background-color: teal; color: white; border: none; padding: 10px; border-radius: 5px;">Submit</button>
                <button type="button" id="cancelButton" style="background-color: #ccc; color: black; border: none; padding: 10px; border-radius: 5px;">Cancel</button>
            </form>
        `;

        // Append the form to the body
        document.body.appendChild(formContainer);

        // Add functionality to the Cancel button
        document.querySelector("#cancelButton").onclick = () => {
            formContainer.remove();
        };

        // Handle form submission
        formContainer.querySelector("form").onsubmit = (e) => {
            e.preventDefault();
            const email = document.querySelector("#email").value;
            const password = document.querySelector("#password").value;

            if (email && password) {
                alert(`Email: ${email}\nPassword: ${password}`);
                formContainer.remove();
            } else {
                alert("Please fill out all fields.");
            }
        };
    };
});
