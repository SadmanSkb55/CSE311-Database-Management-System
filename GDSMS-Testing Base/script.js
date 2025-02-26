// Toggle Mobile Menu
document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    });

    // Dark Mode Toggle
    const modeToggle = document.getElementById("mode-toggle");
    const body = document.body;

    modeToggle.addEventListener("click", () => {
        body.classList.toggle("dark-mode");
        modeToggle.textContent = body.classList.contains("dark-mode") ? "☀" : "🌙";
    });

    // Chat Toggle Functionality
    const chatBtn = document.querySelector(".live-chat");
    const chatPopup = document.querySelector(".chat-popup");
    const closeChatBtn = document.querySelector(".close-chat");

    chatBtn.addEventListener("click", function () {
        chatPopup.style.display = chatPopup.style.display === "block" ? "none" : "block";
    });

    closeChatBtn.addEventListener("click", function () {
        chatPopup.style.display = "none";
    });

    // FAQ Question Toggle
    const questionBtns = document.querySelectorAll(".question-btn");

    questionBtns.forEach((btn) => {
        btn.addEventListener("click", function () {
            const answer = this.nextElementSibling;
            answer.style.display = answer.style.display === "block" ? "none" : "block";
        });
    });
});
