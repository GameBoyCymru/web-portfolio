// Typing Text using the Typed.js library

var typed = new Typed('#typing-text', {
    strings: ['Teaching Assistant.', 'Childcare Assistant.', 'C++ Programmer.',
        'Web Developer.', 'Gamer.', 'Cyber Security Student.'],
    typeSpeed: 50,
    backSpeed: 30,
    backDelay: 2000,

    loop: true
});


/*------------------------------------------------------------*/


// Page Navigation

// Open and close the quick settings menu
const settingsButton = document.querySelector('.settings');
const closeSettings = document.querySelector('.settings-close');
const quickSettings = document.querySelector('.quick-settings');

settingsButton.addEventListener('click', () => {
    quickSettings.classList.remove('none');
    quickSettings.classList.remove('hide');
});

closeSettings.addEventListener('click', () => {
    quickSettings.classList.add('hide');
});

// Open and close the navigation menu
const navButton = document.querySelector('.nav-btn');
const closeNav = document.querySelector('.nav-close');
const navSettings = document.querySelector('.quick-nav');

navButton.addEventListener('click', () => {
    navSettings.classList.remove('none');
    navSettings.classList.remove('hide');
});

closeNav.addEventListener('click', () => {
    navSettings.classList.add('hide');
});

// Close quick settings and quick navigation if clicked outside
document.addEventListener('click', (event) => {
    // Close quick settings if clicked outside
    if (!quickSettings.contains(event.target) && !settingsButton.contains(event.target)) {
        quickSettings.classList.add('hide');
    }

    // Close quick navigation if clicked outside
    if (!navSettings.contains(event.target) && !navButton.contains(event.target)) {
        navSettings.classList.add('hide');
    }
});


/*------------------------------------------------------------*/


// Update screen title based on scroll position

// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section.content-box");  // Get all sections
    const screenTitle = document.querySelector(".screen-title");    // Get the screen title

    // Function to update the screen title based on the active section
    function updateScreenTitle() {
        let maxVisibleArea = 0;
        let activeSection = null;

        // Iterate through each section and calculate the visible area
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            const visibleArea = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);

            // Update the active section if the visible area is greater than the current max visible area
            if (visibleArea > maxVisibleArea) {
                maxVisibleArea = visibleArea;
                activeSection = section;
            }
        });

        // Update the screen title based on the active section title
        if (activeSection) {
            if (activeSection.id === "intro") {
                screenTitle.textContent = "Home";
            } else {
                screenTitle.textContent = activeSection.querySelector(".title").textContent;
            }
        }
    }

    // Initial update
    updateScreenTitle();

    // Update on scroll
    window.addEventListener("scroll", updateScreenTitle);
});



