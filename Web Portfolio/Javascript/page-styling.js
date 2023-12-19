

// Function to toggle dark mode
function toggleDarkMode() {
    // Get the checkbox for dark mode
    const darkModeCheckbox = document.getElementById('darkModeToggle');
    // check if solid colours is toggled on or off
    const solidColoursCheckbox = document.getElementById('solidColoursToggle');

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
        document.documentElement.style.setProperty('--background-image', 'url("./Backgrounds/island-dark.webp")');
        document.documentElement.style.setProperty('--primary-text', '#e7e6f7');
        document.documentElement.style.setProperty('--secondary-text', '#131B23');
        document.documentElement.style.setProperty('--nav-text', '#e7e6f7');
        document.documentElement.style.setProperty('--exit-filter', 'invert(100%) sepia(0%) saturate(1513%) hue-rotate(233deg) brightness(107%) contrast(101%)');

        if (solidColoursCheckbox.checked) {
            document.documentElement.style.setProperty('--background', 'rgba(6, 5, 20, 1)');
            document.documentElement.style.setProperty('--nav-background', 'rgb(6 5 20 / 1)');
        }
        else {
            document.documentElement.style.setProperty('--background', 'rgba(6, 5, 20, 0.8)');
            document.documentElement.style.setProperty('--nav-background', 'rgb(6 5 20 / 0.8)');
        }


    } else {
        // Apply light mode if the checkbox is unchecked
        document.documentElement.style.setProperty('--primary', '#8fffbc');
        document.documentElement.style.setProperty('--secondary', '#a39be3');
        document.documentElement.style.setProperty('--background-image', 'url("./Backgrounds/island-light.webp")');
        document.documentElement.style.setProperty('--primary-text', '#e7e6f7');
        document.documentElement.style.setProperty('--secondary-text', '#131B23');
        document.documentElement.style.setProperty('--nav-text', '#131B23');
        document.documentElement.style.setProperty('--exit-filter', 'invert(8%) sepia(14%) saturate(1423%) hue-rotate(169deg) brightness(94%) contrast(94%)');

        if (solidColoursCheckbox.checked) {
            document.documentElement.style.setProperty('--background', 'rgba(6, 5, 20, 1)');
            document.documentElement.style.setProperty('--nav-background', 'rgb(234 233 253 / 1)');
        }

        else {
            document.documentElement.style.setProperty('--background', 'rgba(6, 5, 20, 0.8)');
            document.documentElement.style.setProperty('--nav-background', 'rgb(234 233 253 / 0.8)');
        }

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

    // Determine the background color based on the state of the toggle
    const backgroundColor = solidColoursCheckbox.checked
        ? darkModeCheckbox.checked  // Solid color for dark mode background elements
            ? 'rgba(6, 5, 20, 1)'
            : 'rgba(6, 5, 20, 1)'
        : darkModeCheckbox.checked  // Transparent color for dark mode background elements
            ? 'rgba(6, 5, 20, 0.8)'
            : 'rgba(6, 5, 20, 0.8)';

    // Determine the navigation background color based on the state of the toggle
    const navBackgroundColor = solidColoursCheckbox.checked
        ? darkModeCheckbox.checked
            ? 'rgba(6, 5, 20, 1)' // Solid color for dark mode background elements
            : 'rgba(234, 233, 253, 1)' // Solid color for light mode background elements
        : darkModeCheckbox.checked
            ? 'rgba(6, 5, 20, 0.8)' // Transparent color for dark mode background elements
            : 'rgba(234, 233, 253, 0.8)'; // Transparent color for light mode background elements


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
