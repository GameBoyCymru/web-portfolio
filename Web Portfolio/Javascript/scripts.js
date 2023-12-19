
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

