import '../css/styles.css';

/**
 *  ENABLE DARK MODE
 */
const body = document.querySelector('body');
const theme = document.querySelectorAll('.theme');
const darkTheme = document.getElementById('dark-theme');
const lightTheme = document.getElementById('light-theme');

for (let i = 0; i < theme.length; i++) {
    theme[i].addEventListener('click', () => {
        body.classList.toggle('dark');
        if (darkTheme.classList.contains('hidden')) {
            lightTheme.classList.add('hidden');
            darkTheme.classList.remove('hidden');
        } else {
            lightTheme.classList.remove('hidden');
            darkTheme.classList.add('hidden');
        }
    });
}
