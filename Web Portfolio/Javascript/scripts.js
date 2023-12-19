/*
------------------------------------------------------------
*/



// Typing animation
const texts = ["Teaching Assistant.", "Childcare Assistant.", "C++ Programmer.", "Gamer."];
let textIndex = 0;
let charIndex = 0;
const typingSpeed = 50; // Adjust the speed as needed

function type() {
  const currentText = texts[textIndex];
  if (charIndex < currentText.length) {
    document.getElementById('typing-text').innerHTML = currentText.substring(0, charIndex + 1) + '|'; // Display typing indicator with the current substring
    charIndex++;
    setTimeout(type, typingSpeed);
  } else {
    setTimeout(erase, 1500); // Wait for 1.5 seconds before erasing
  }
}

function erase() {
  if (charIndex > 0) {
    const currentText = texts[textIndex];
    document.getElementById('typing-text').innerHTML = currentText.substring(0, charIndex - 1) + '|';
    charIndex--;
    setTimeout(erase, typingSpeed / 2); // Adjust the speed of erasing
  } else {
    document.getElementById('typing-text').innerHTML = ''; // Remove the typing indicator
    textIndex = (textIndex + 1) % texts.length;
    setTimeout(type, 500); // Wait for 0.5 seconds before typing the next text
  }
}

// Start the typing animation
type();



/*
------------------------------------------------------------
*/



// Bold the first two letters of each paragraph

let isBold = false; // Sets the default state to false

// Bold the first two letters of each paragraph
function toggleBoldText() {
  // Get all the paragraph elements on the page
  const paragraphs = document.querySelectorAll('p');

  // Iterate through each paragraph element
  paragraphs.forEach(paragraph => {
    // Split the text into words
    const words = paragraph.innerText.split(' ');

    // Iterate through each word and toggle bold styling
    const formattedWords = words.map(word => {
      if (word.length >= 2) {
        const boldText = isBold ? word : `<b>${word.substring(0, 2)}</b>${word.substring(2)}`;
        return boldText;
      }
      return word;
    });

    // Join the formatted words back into a string
    const formattedText = formattedWords.join(' ');

    // Set the inner HTML of the paragraph with the formatted text
    paragraph.innerHTML = formattedText;
  });

  // Toggle the state
  isBold = !isBold;
}

// Get the checkbox for bold text
const boldTextCheckbox = document.getElementById('boldTextToggle');

// Add an event listener to the checkbox
boldTextCheckbox.addEventListener('change', toggleBoldText);



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



// Function to toggle dark mode
function toggleDarkMode() {
  // Get the checkbox for dark mode
  const darkModeCheckbox = document.getElementById('darkModeToggle');

  // Determine the theme based on the state of the toggle
  const theme = darkModeCheckbox.checked ? 'dark' : 'light';

  // Update the source of the GitHub stats images
  const profileStatsImage = document.getElementById('profile-stats');
  const languageStatsImage = document.getElementById('language-stats');
  profileStatsImage.src = `https://raw.githubusercontent.com/joshuathomas22/github-stats/master/generated/overview.svg#gh-${theme}-mode-only`;
  languageStatsImage.src = `https://raw.githubusercontent.com/joshuathomas22/github-stats/master/generated/languages.svg#gh-${theme}-mode-only`;


  // Apply dark mode if the checkbox is checked
  if (darkModeCheckbox.checked) {
    document.documentElement.style.setProperty('--primary', '#a39be3');
    document.documentElement.style.setProperty('--secondary', '#7a2268');
    document.documentElement.style.setProperty('--background', 'rgba(6, 5, 20, 0.8)');
    document.documentElement.style.setProperty('--background-image', 'url("./Backgrounds/island-dark.webp")');
    document.documentElement.style.setProperty('--primary-text', '#e7e6f7');
    document.documentElement.style.setProperty('--secondary-text', '#131B23');
    document.documentElement.style.setProperty('--nav-background', 'rgb(6 5 20 / 0.8)');
    document.documentElement.style.setProperty('--nav-text', '#e7e6f7');
    document.documentElement.style.setProperty('--exit-filter', 'invert(100%) sepia(0%) saturate(1513%) hue-rotate(233deg) brightness(107%) contrast(101%)');


  } else {
    // Apply light mode if the checkbox is unchecked
    document.documentElement.style.setProperty('--primary', '#8fffbc');
    document.documentElement.style.setProperty('--secondary', '#a39be3');
    document.documentElement.style.setProperty('--background', 'rgba(6, 5, 20, 0.8)');
    document.documentElement.style.setProperty('--background-image', 'url("./Backgrounds/island-light.webp")');
    document.documentElement.style.setProperty('--primary-text', '#e7e6f7');
    document.documentElement.style.setProperty('--secondary-text', '#131B23');
    document.documentElement.style.setProperty('--nav-background', 'rgb(234 233 253 / 0.8)');
    document.documentElement.style.setProperty('--nav-text', '#131B23');
    document.documentElement.style.setProperty('--exit-filter', 'invert(8%) sepia(14%) saturate(1423%) hue-rotate(169deg) brightness(94%) contrast(94%)');
  }

  // Save the user's preference in local storage
  localStorage.setItem('darkModePreference', darkModeCheckbox.checked);
}

// Get the checkbox for dark mode
const darkModeCheckbox = document.getElementById('darkModeToggle');

// Add an event listener to the checkbox
darkModeCheckbox.addEventListener('change', toggleDarkMode);

// Retrieve the user's preference from local storage (if available)
const savedDarkModePreference = localStorage.getItem('darkModePreference');

// If a preference is saved, apply it
if (savedDarkModePreference !== null) {
  darkModeCheckbox.checked = savedDarkModePreference === 'true';
  toggleDarkMode(); // Update colors based on the saved preference
} else {
  // If no preference is saved, use the system preference
  darkModeCheckbox.checked = window.matchMedia('(prefers-color-scheme: dark)').matches;
}

// Initial call to toggleDarkMode to set initial color scheme
toggleDarkMode();



/*
------------------------------------------------------------
*/



// Function to toggle solid colours
function toggleSolidColours() {
  // Get the checkbox for solid colours
  const solidColoursCheckbox = document.getElementById('solidColoursToggle');

  // check if dark mode is toggled on or off
  const darkModeCheckbox = document.getElementById('darkModeToggle');

  let backgroundColor = solidColoursCheckbox.checked;
  let navBackgroundColor = solidColoursCheckbox.checked;


  if (darkModeCheckbox.checked) {
    // Determine the background color based on the state of the toggle
    backgroundColor = solidColoursCheckbox.checked
      ? 'rgba(6, 5, 20, 1)' // Solid color for background elements
      : 'rgba(6, 5, 20, 0.8)' // Transparent color for background elements

    // Determine the navigation background color based on the state of the toggle
    navBackgroundColor = solidColoursCheckbox.checked
      ? 'rgba(6, 5, 20, 1)' // Solid color for background elements
      : 'rgba(6, 5, 20, 0.8)' // Transparent color for background elements

  }
  else {

    // Determine the background color based on the state of the toggle
    backgroundColor = solidColoursCheckbox.checked
      ? 'rgba(6, 5, 20, 1)' // Solid color for background elements
      : 'rgba(6, 5, 20, 0.8)' // Transparent color for background elements


    // Determine the navigation background color based on the state of the toggle
    navBackgroundColor = solidColoursCheckbox.checked
      ? 'rgb(234 233 253 / 1)' // Solid color for background elements
      : 'rgb(234 233 253 / 0.8)' // Transparent color for background elements
  }






  // Update the background color of body
  document.documentElement.style.setProperty('--background', backgroundColor);

  // Update the nav background
  document.documentElement.style.setProperty('--nav-background', navBackgroundColor);



  // Save the user's preference in local storage
  localStorage.setItem('solidColoursPreference', solidColoursCheckbox.checked);
}

// Get the checkbox for solid colours
const solidColoursCheckbox = document.getElementById('solidColoursToggle');

// Add an event listener to the checkbox
solidColoursCheckbox.addEventListener('change', toggleSolidColours);

// Retrieve the user's preference from local storage (if available)
const savedSolidColoursPreference = localStorage.getItem('solidColoursPreference');

// If a preference is saved, apply it
if (savedSolidColoursPreference !== null) {
  solidColoursCheckbox.checked = savedSolidColoursPreference === 'true';
  toggleSolidColours(); // Update colors based on the saved preference
} else {
  // If no preference is saved, default to solid colours
  solidColoursCheckbox.checked = false;
  toggleSolidColours();
}

