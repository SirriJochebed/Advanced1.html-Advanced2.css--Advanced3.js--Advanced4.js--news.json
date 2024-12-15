// Dynamic Year Display in Footer
document.getElementById("year").innerText = new Date().getFullYear();

// Dynamic News Loading
const news = [
    "News item 3",
    "News item 4",
    "News item 5",
    "News item 6",
    "News item 7",
    "News item 8"
];

// Append news items dynamically
const newsList = document.getElementById("news-list");
news.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    newsList.appendChild(li);
});

// Form Validation
const contactForm = document.getElementById("contact-form");
contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const emailInput = document.getElementById("email");
    if (emailInput.value.includes("@")) {
        alert("Thank you for contacting us!");
    } else {
        alert("Please enter a valid email address.");
    }
});