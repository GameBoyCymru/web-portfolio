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

//  Makes the first two letters of each word bold

// let isBold = false;   // Sets the default state to false

// // Bold the first two letters of each paragraph
// function toggleBoldText() {
//   // Get all the paragraph elements on the page
//   const paragraphs = document.querySelectorAll('p');

//   // Iterate through each paragraph element
//   paragraphs.forEach(paragraph => {
//     // Split the text into words
//     const words = paragraph.innerText.split(' ');

//     // Iterate through each word and toggle bold styling
//     const formattedWords = words.map(word => {
//       if (word.length >= 2) {
//         const boldText = isBold ? word : `<b>${word.substring(0, 2)}</b>${word.substring(2)}`;
//         return boldText;
//       }
//       return word;
//     });

//     // Join the formatted words back into a string
//     const formattedText = formattedWords.join(' ');

//     // Set the inner HTML of the paragraph with the formatted text
//     paragraph.innerHTML = formattedText;
//   });

//   // Toggle the state
//   isBold = !isBold;

//   // Update the button text
//   const buttonText = isBold ? 'Revert to Normal' : 'Make Bold';
//   document.getElementById('boldButton').innerText = buttonText;
// }


// let boldButton = document.getElementById('boldTextToggle');

// boldButton.addEventListener('click', boldTextToggle);

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




// Get all sections and screen title
const sections = document.querySelectorAll('.container');
const screenTitle = document.querySelector('.screen-title');

// Function to update screen title based on scroll position
function updateScreenTitle() {
    let closestSection = sections[0]; // Initialize with the first section

    sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const currentClosestRect = closestSection.getBoundingClientRect();

        // Check if the current section is closer to the top of the viewport
        if (Math.abs(rect.top) < Math.abs(currentClosestRect.top)) {
            closestSection = section;
        }
    });

    // Update the screen title with the closest section's title
    screenTitle.textContent = closestSection.querySelector('h1').textContent;
}

// Listen for scroll events and update screen title
document.addEventListener('scroll', updateScreenTitle);

/*
------------------------------------------------------------
*/