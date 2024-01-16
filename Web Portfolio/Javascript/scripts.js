
// Typing Text using the Typed.js library

var typed = new Typed('#typing-text', {
  strings: ['Teaching Assistant.', 'Childcare Assistant.', 'C++ Programmer.', 'Web Developer.', 'Gamer.', 'Cyber Security Student.'],
  typeSpeed: 50,
  backSpeed: 30,
  backDelay: 2000,

  loop: true
});


/*
------------------------------------------------------------
*/

let isBold = false; // Sets the default state to false

// Function to set the font style based on the user's preference
function setFontStyle() {
  const body = document.body;
  const storedFontPreference = localStorage.getItem('fontPreference');

  // If there is a stored font preference, apply it
  if (storedFontPreference) {
    body.style.fontFamily = storedFontPreference;
  }

  // Get the checkbox for bold text
  const boldTextCheckbox = document.getElementById('boldTextToggle');

  // Check the stored state of the checkbox
  const storedCheckboxState = localStorage.getItem('checkboxState');

  if (storedCheckboxState) {
    boldTextCheckbox.checked = storedCheckboxState === 'true';
    // Apply the bold text styling based on the checkbox state
    toggleBoldText();
  }
}

// Function to toggle bold text and change the font
function toggleBoldText() {
  // Get the checkbox for bold text
  const boldTextCheckbox = document.getElementById('boldTextToggle');

  // Read the current checkbox state
  const checkboxState = boldTextCheckbox.checked;

  // Change the font of the entire page
  const body = document.body;
  body.style.fontFamily = checkboxState ? 'Comic Sans MS' : 'Poppins';

  // Save the font preference to localStorage
  localStorage.setItem('fontPreference', checkboxState ? 'Comic Sans MS' : 'Poppins');

  // Save the checkbox state to localStorage
  localStorage.setItem('checkboxState', checkboxState);
}

// Call setFontStyle on page load to apply stored font preference and checkbox state
setFontStyle();

// Call toggleBoldText on checkbox change
document.getElementById('boldTextToggle').addEventListener('change', toggleBoldText);




/*
------------------------------------------------------------
*/



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
  if (!quickSettings.contains(event.target) && !settingsButton.contains(event.target)) {
    quickSettings.classList.add('hide');
  }

  if (!navSettings.contains(event.target) && !navButton.contains(event.target)) {
    navSettings.classList.add('hide');
  }
});



/*
------------------------------------------------------------
*/



// Update screen title based on scroll position

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section.content-box");
  const screenTitle = document.querySelector(".screen-title");

  function updateScreenTitle() {
    let maxVisibleArea = 0;
    let activeSection = null;

    sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      const visibleArea = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);

      if (visibleArea > maxVisibleArea) {
        maxVisibleArea = visibleArea;
        activeSection = section;
      }
    });

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



/*
------------------------------------------------------------
*/

