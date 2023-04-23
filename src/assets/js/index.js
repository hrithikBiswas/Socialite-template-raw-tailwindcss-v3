import '../css/styles.css';

/**
 *  SHOW SIDEBAR NAVIGATION MENU WHEN WINDOW SCREEN IS LESS THEN 1280PX
 */
const sidebarBtn = document.getElementById('sidebar-btn');
const showSidebar = document.getElementById('asidebar');
const aside = document.getElementById('aside');
sidebarBtn.addEventListener('click', () => {
    showSidebar.classList.remove('-left-72');
    showSidebar.classList.add('left-0');
    aside.classList.add('sidebar-dropshadow');
});
// // WHEN THEN USER CLICKS ANYWHERE OUTSIDE OF THE SIDEBAR NAVIGATION, CLOSE IT
// window.onclick = function (event) {
//     if (event.target == aside) {
//         showSidebar.classList.remove('left-0');
//         showSidebar.classList.add('-left-72');
//         aside.classList.remove('sidebar-dropshadow');
//     }
// };

/**
 *  SHOW & HIDE SEARCH MODAL DEPEND ON FOCUSIN OR FOCUSOUT EVENTS
 */
const searchModal = document.getElementById('search-modal');
const showSearchModal = document.getElementById('show-search-modal');
searchModal.addEventListener('focusin', () => {
    showSearchModal.classList.remove('hidden');
});
searchModal.addEventListener('focusout', () => {
    showSearchModal.classList.add('hidden');
});

/**
 *  SHOW POST MODAL
 */
const postModalInput = document.getElementById('post-modal-input');
const postModalBtn = document.querySelectorAll('.post-modal-btn');
const postModalShow = document.getElementById('post-modal-show');
const exitModal = document.getElementById('exit-post-modal');
const html = document.getElementsByTagName('html')[0];
postModalInput.addEventListener('focus', () => {
    postModalShow.classList.remove('invisible', 'opacity-0');
    postModalShow.classList.add('visible', 'opacity-100');
    html.classList.add('overflow-hidden');
});
for (let i = 0; i < postModalBtn.length; i++) {
    postModalBtn[i].addEventListener('click', () => {
        postModalShow.classList.remove('invisible', 'opacity-0');
        postModalShow.classList.add('visible', 'opacity-100');
        html.classList.add('overflow-hidden');
    });
}
exitModal.addEventListener('click', () => {
    postModalShow.classList.remove('visible', 'opacity-100');
    postModalShow.classList.add('invisible', 'opacity-0');
    html.classList.remove('overflow-hidden');
});
/**
 *WHEN THEN USER CLICKS ANYWHERE OUTSIDE OF SIDEBAR NAVIGATION OR MODAL, CLOSE IT
 */
window.onclick = function (event) {
    if (event.target == aside) {
        showSidebar.classList.remove('left-0');
        showSidebar.classList.add('-left-72');
        aside.classList.remove('sidebar-dropshadow');
    }
    // invisible post modal
    if (event.target == postModalShow) {
        postModalShow.classList.remove('visible', 'opacity-100');
        postModalShow.classList.add('invisible', 'opacity-0');
        html.classList.remove('overflow-hidden');
    }
};

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
