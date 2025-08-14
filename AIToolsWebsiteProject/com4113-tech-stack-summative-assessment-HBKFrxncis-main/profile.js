import { getAuth, onAuthStateChanged, updateProfile, updateEmail, updatePassword, signOut } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { auth } from "./firebase-config.js";

// Get form elements
const nameInput = document.getElementById("name-input");
const emailInput = document.getElementById("email-input");
const passwordInput = document.getElementById("password-input");
const profileForm = document.getElementById("profile-form");
const errorMessage = document.getElementById("error-message");
const successMessage = document.getElementById("success-message");
const logoutButton = document.getElementById("logout-button");

// Check if user is logged in and fetch current data
onAuthStateChanged(auth, (user) => {
    if (user) {
        nameInput.value = user.displayName || "";
        emailInput.value = user.email || "";
        emailInput.disabled = true; // Prevent email changes directly
    } else {
        window.location.href = "login.html"; // Redirect if not logged in
    }
});

// Handle Profile Update
profileForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const user = auth.currentUser;
    if (!user) return;

    const newName = nameInput.value;
    const newPassword = passwordInput.value;

    successMessage.innerText = "";
    errorMessage.innerText = "";

    if (newName !== user.displayName) {
        updateProfile(user, { displayName: newName })
            .then(() => successMessage.innerText = "Profile updated successfully!")
            .catch((error) => errorMessage.innerText = error.message);
    }

    if (newPassword) {
        updatePassword(user, newPassword)
            .then(() => successMessage.innerText = "Password updated successfully!")
            .catch((error) => errorMessage.innerText = error.message);
    }
});

// Handle Logout
logoutButton.addEventListener("click", () => {
    signOut(auth).then(() => {
        window.location.href = "login.html";
    }).catch((error) => {
        errorMessage.innerText = error.message;
    });
});
