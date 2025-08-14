import { auth } from "./firebase-config.js"; // ✅ Fix import
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page from refreshing

    const firstname = document.getElementById("firstname-input").value;
    const email = document.getElementById("email-input").value;
    const password = document.getElementById("password-input").value;
    const repeatPassword = document.getElementById("repeat-password-input").value;
    const errorMessage = document.getElementById("error-message");

    console.log("Signup attempt:", { email, password });

    if (!firstname || !email || !password || !repeatPassword) {
        errorMessage.innerText = "All fields are required!";
        console.log("Error: All fields required");
        return;
    }

    if (password !== repeatPassword) {
        errorMessage.innerText = "Passwords do not match!";
        console.log("Error: Passwords do not match");
        return;
    }

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log("User created successfully:", userCredential.user);
            alert("Signup successful! Redirecting...");
            window.location.href = "login.html"; // Redirect after successful signup
        })
        .catch((error) => {
            console.error("Signup error:", error.message);
            errorMessage.innerText = error.message;
        });
});
