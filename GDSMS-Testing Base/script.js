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

    function sendQuestion() {
        let question = document.getElementById("userQuestion").value;
        let fileInput = document.getElementById("screenshotUpload");
        
        if (question.trim() === "") {
            alert("Please enter a question before sending.");
            return;
        }
    
        let file = fileInput.files[0]; 
        let message = `📝 Question: ${question}`;
        
        if (file) {
            message += ` 📷 (Screenshot attached: ${file.name})`;
        }
    
        alert("Your question has been sent!\n\n" + message);
    
        // Clear input fields after sending
        document.getElementById("userQuestion").value = "";
        fileInput.value = "";
    }
    

    // FAQ Question Toggle
    const questionBtns = document.querySelectorAll(".question-btn");

    questionBtns.forEach((btn) => {
        btn.addEventListener("click", function () {
            const answer = this.nextElementSibling;
            answer.style.display = answer.style.display === "block" ? "none" : "block";
        });
    });
});

//leftbar
document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.querySelector(".menu-btn");
    const sidebar = document.querySelector(".sidebar");

    menuBtn.addEventListener("click", function () {
        sidebar.classList.toggle("active");
    });

    // Close Sidebar when clicking outside
    document.addEventListener("click", function (event) {
        if (!sidebar.contains(event.target) && !menuBtn.contains(event.target)) {
            sidebar.classList.remove("active");
        }
    });

    // Turn Off Button (Quit the Site)
    document.querySelector(".turn-off-btn").addEventListener("click", function () {
        window.close(); // Only works if allowed by browser
    });

    // Log Out Button (Redirect to Login Page)
    document.querySelector(".logout-btn").addEventListener("click", function () {
        window.location.href = "login.html"; // Change to your login page
    });
});


const bannerContainer = document.querySelector(".banner-container");
let index = 0;
const totalBanners = document.querySelectorAll(".banner-card").length;
const visibleBanners = 1; // Show 2 banners at a time

function loopBanners() {
    index += visibleBanners;
    if (index >= totalBanners) {
        index = 0; // Reset to first banners
    }
    const moveX = -index * 1000; // Shift banners by 1000px
    bannerContainer.style.transform = `translateX(${moveX}px)`;
}

// Auto-scroll every 3 seconds
setInterval(loopBanners, 3000);

document.addEventListener("DOMContentLoaded", function () {
    const scrollContainers = document.querySelectorAll(".scrollable");

    scrollContainers.forEach((container) => {
        let isScrolling = false;

        setInterval(() => {
            if (!isScrolling) {
                container.scrollBy({ left: 220, behavior: "smooth" });
                if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
                    container.scrollTo({ left: 0, behavior: "smooth" });
                }
            }
        }, 3000);

        container.addEventListener("mouseenter", () => isScrolling = true);
        container.addEventListener("mouseleave", () => isScrolling = false);
    });
});
