document.addEventListener("DOMContentLoaded", () => {
    // Dynamic Tab Switching
    const tabs = document.querySelectorAll(".tab-button");
    const content = document.getElementById("tab-content");

    const tabData = [
        { id: 1, text: "Web Design: We build beautiful, functional websites." },
        { id: 2, text: "SEO: Optimize your site for better search rankings." },
        { id: 3, text: "Content Marketing: Drive traffic with great content." },
    ];

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            const tabId = parseInt(tab.dataset.tab);
            const selectedTab = tabData.find(t => t.id === tabId);
            content.innerHTML = <p>${selectedTab.text}</p>;
        });
    });

    // Scroll-to-top Button
    const scrollButton = document.createElement("button");
    scrollButton.textContent = "↑";
    scrollButton.style.position = "fixed";
    scrollButton.style.bottom = "20px";
    scrollButton.style.right = "20px";
    scrollButton.style.display = "none";
    document.body.appendChild(scrollButton);

    window.addEventListener("scroll", () => {
        scrollButton.style.display = window.scrollY > 100 ? "block" : "none";
    });

    scrollButton.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // Newsletter Form Validation
    const form = document.getElementById("newsletter-form");
    const emailInput = document.getElementById("email");

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        if (!emailInput.value.includes("@")) {
            alert("Please enter a valid email address.");
        } else {
            alert("Thank you for subscribing!");
        }
    });
});
// Save Last Selected Tab in Local Storage
tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        localStorage.setItem("selectedTab", tab.dataset.tab);
    });
});

const savedTab = localStorage.getItem("selectedTab");
if (savedTab) {
    const selectedTab = tabData.find(t => t.id === parseInt(savedTab));
    content.innerHTML = <p>${selectedTab.text}</p>;
}

// Light/Dark Mode Toggle
const toggleButton = document.createElement("button");
toggleButton.textContent = "Toggle Dark Mode";
document.body.prepend(toggleButton);

toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("darkMode", document.body.classList.contains("dark-mode"));
});

if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark-mode");
}

// CSS for Dark Mode
document.head.insertAdjacentHTML("beforeend", `
<style>
    .dark-mode {
        background-color: #121212;
        color: #f8f9fa;
    }
</style>
`);

// Modal Popup for Services
content.addEventListener("click", () => {
    const modalHtml = `
        <div class="modal">
            <div class="modal-content">
                <p>More details about the selected service...</p>
                <button class="close-modal">Close</button>
            </div>
        </div>`;
    document.body.insertAdjacentHTML("beforeend", modalHtml);

    document.querySelector(".close-modal").addEventListener("click", () => {
        document.querySelector(".modal").remove();
    });
});