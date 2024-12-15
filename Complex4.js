// Save selected tab in localStorage
const tabs = document.querySelectorAll('.tab-btn');
tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
        localStorage.setItem('selectedTab', tab.dataset.tab);
    });
});

// Load last selected tab
window.addEventListener('load', () => {
    const selectedTab = localStorage.getItem('selectedTab') || 'tab1';
    document.querySelector([data-tab="${selectedTab}"]).click();
});

// Light/Dark mode toggle
const toggle = document.createElement('button');
toggle.id = 'theme-toggle';
toggle.innerText = 'Toggle Theme';
document.body.appendChild(toggle);

toggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
});

// Load saved theme
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
}