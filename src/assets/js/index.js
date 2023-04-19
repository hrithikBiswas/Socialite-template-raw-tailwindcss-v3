import '../css/styles.css';

/**
 *  ENABLE DARK MODE
 */

const theme = document.querySelectorAll('.theme');
const darkTheme = document.getElementById('dark-theme');
const lightTheme = document.getElementById('light-theme');
const themeStoreInLocalStorage = 'dark';

const selectedTheme = localStorage.getItem('selected-theme'); // get local storage value

//set current theme value
const getCurrentTheme = () =>
    document.body.classList.contains(themeStoreInLocalStorage)
        ? 'dark'
        : 'light';

//Checks if the user has previously selected a theme
if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](
        themeStoreInLocalStorage
    );
}
//If the body contains a dark class, the theme button will be shown moon-icon else sun-icon
if (document.body.classList.contains(themeStoreInLocalStorage)) {
    darkTheme.classList.remove('hidden');
    darkTheme.classList.add('block');
} else {
    lightTheme.classList.remove('hidden');
    lightTheme.classList.add('block');
}

// Activate / deactivate the theme manually with the button
for (let i = 0; i < theme.length; i++) {
    theme[i].addEventListener('click', () => {
        document.body.classList.toggle('dark');

        if (darkTheme.classList.contains('hidden')) {
            lightTheme.classList.add('hidden');
            darkTheme.classList.remove('hidden');
        } else {
            lightTheme.classList.remove('hidden');
            darkTheme.classList.add('hidden');
        }

        localStorage.setItem('selected-theme', getCurrentTheme()); // set theme value in localStorage
    });
}
