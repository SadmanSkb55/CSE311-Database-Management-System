document.addEventListener("DOMContentLoaded", () => {
    const toggleSwitch = document.getElementById("theme-toggle");
    const currentTheme = localStorage.getItem("theme") || "light";
    
    document.body.classList.add(currentTheme);
    toggleSwitch.checked = currentTheme === "dark";

    toggleSwitch.addEventListener("change", () => {
        if (toggleSwitch.checked) {
            document.body.classList.replace("light", "dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.body.classList.replace("dark", "light");
            localStorage.setItem("theme", "light");
        }
    });
});


function toggleAboutText() {
    const longDescription = document.querySelector('.long-description');
    const seeMoreButton = document.querySelector('.see-more');

    longDescription.style.display = longDescription.style.display === 'block' ? 'none' : 'block';

    seeMoreButton.textContent = longDescription.style.display === 'block' ? 'See Less' : 'See More';
}

document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault(); 

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        
        document.getElementById('form-response').innerText = 'Thank you for your message, ' + name + '! I will get back to you soon.';
        document.getElementById('form-response').style.color = '#4CAF50'; 

       
        document.getElementById('contact-form').reset();
    } else {
        document.getElementById('form-response').innerText = 'Please fill out all fields!';
        document.getElementById('form-response').style.color = '#ff4d4d'; 
    }
});
