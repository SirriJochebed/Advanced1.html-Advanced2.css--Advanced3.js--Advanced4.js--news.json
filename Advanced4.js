// Fetch API for News
fetch("news.json") // Simulated JSON file
    .then(response => response.json())
    .then(data => {
        const newsList = document.getElementById("news-list");
        newsList.innerHTML = ""; // Clear old content
        data.forEach(newsItem => {
            const li = document.createElement("li");
            li.textContent = newsItem.title;
            newsList.appendChild(li);
        });
    });

// Dark Mode Toggle
const toggle = document.createElement("button");
toggle.innerText = "Toggle Dark Mode";
document.body.appendChild(toggle);

toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const isDark = document.body.classList.contains("dark-mode");
    localStorage.setItem("theme", isDark ? "dark" : "light");
});

// Load Saved Theme
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
}