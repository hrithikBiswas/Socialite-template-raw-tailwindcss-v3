// import '../css/styles.css';

/**
 *  SHOW SIDEBAR NAVIGATION MENU WHEN WINDOW SCREEN IS LESS THEN 1280PX
 */
const sidebarBtn = document.getElementById('sidebar-btn');
const showSidebar = document.getElementById('asidebar');
const aside = document.getElementById('aside');
sidebarBtn.addEventListener('click', () => {
    showSidebar.classList.remove('-left-72');
    showSidebar.classList.add('left-0');
    aside.classList.add('modal-dropshadow');
});

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
 *  POST SETTINGS MODAL
 */
const postSetting = document.querySelectorAll('.post-setting');
const postSettingModal = document.querySelectorAll('.post-setting-modal');
for (let i = 0; i < postSetting.length; i++) {
    postSetting[i].addEventListener('click', () => {
        if (postSettingModal[i].classList.contains('invisible')) {
            postSettingModal[i].classList.remove(
                'invisible',
                'opacity-0',
                '-bottom-64'
            );
            postSettingModal[i].classList.add(
                'visible',
                'opacity-100',
                '-bottom-[14.5rem]'
            );
        } else {
            postSettingModal[i].classList.remove(
                'visible',
                'opacity-100',
                '-bottom-[14.5rem]'
            );
            postSettingModal[i].classList.add(
                'invisible',
                'opacity-0',
                '-bottom-64'
            );
        }
    });
}
/**
 *  PROFILE SETTINGS MODAL
 */
const profileSetting = document.getElementById('profile-setting');
const profileSettingModal = document.getElementById('profile-setting-modal');
profileSetting.addEventListener('click', () => {
    if (profileSettingModal.classList.contains('invisible')) {
        profileSettingModal.classList.remove('invisible', 'opacity-0');
        profileSettingModal.classList.add('visible', 'opacity-100');
    } else {
        profileSettingModal.classList.remove('visible', 'opacity-100');
        profileSettingModal.classList.add('invisible', 'opacity-0');
    }
});

/**
 *SHOW CHAT BOX
 */
const chatBtn = document.querySelectorAll('#chat-box-btn, #chat-btn-lg');
const showChatBox = document.getElementById('show-chat-box');
const chatBoxContainer = document.getElementById('chat-box-container');
const exitChat = document.getElementById('exit-chat');
for (let i = 0; i < chatBtn.length; i++) {
    chatBtn[i].addEventListener('click', () => {
        chatBoxContainer.classList.remove('-right-[1010px]');
        chatBoxContainer.classList.add('right-0');
        showChatBox.classList.add('modal-dropshadow');
        html.classList.add('overflow-hidden');
    });
}
exitChat.addEventListener('click', () => {
    chatBoxContainer.classList.remove('right-0');
    showChatBox.classList.remove('modal-dropshadow');
    html.classList.remove('overflow-hidden');
    chatBoxContainer.classList.add('-right-[1010px]');
});

/**
 *CHAT TABS
 */
const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]');

tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target);

        tabContents.forEach((tabContent) => {
            tabContent.classList.remove('block');
            tabContent.classList.add('hidden');
        });
        target.classList.remove('hidden');
        target.classList.add('block');

        tabs.forEach((tab) => {
            tab.classList.remove('text-blue-700', 'border-b-2');
            tab.classList.add('text-gray-500');
        });
        tab.classList.remove('text-gray-500');
        tab.classList.add('text-blue-700', 'border-b-2');
    });
});

/**
 *BIRTHDAY MODAL
 */
const birthday = document.getElementById('birthday');
const birthdayModal = document.getElementById('birthday-modal');
const exitBirthdayModal = document.getElementById('exit-birthday-modal');
const birthdayModalContainer = document.getElementById(
    'birthday-modal-container'
);
birthday.addEventListener('click', () => {
    birthdayModalContainer.classList.remove('invisible', '-top-80');
    birthdayModalContainer.classList.add('visible', 'top-14');
    birthdayModal.classList.add('modal-dropshadow');
    html.classList.add('overflow-hidden');
});
exitBirthdayModal.addEventListener('click', () => {
    birthdayModalContainer.classList.remove('visible', 'top-14');
    birthdayModalContainer.classList.add('invisible', '-top-80');
    birthdayModal.classList.remove('modal-dropshadow');
    html.classList.remove('overflow-hidden');
});

/**
 *WHEN THEN USER CLICKS ANYWHERE OUTSIDE OF SIDEBAR NAVIGATION OR MODAL, CLOSE IT
 */
window.onclick = function (event) {
    if (event.target == aside) {
        showSidebar.classList.remove('left-0');
        showSidebar.classList.add('-left-72');
        aside.classList.remove('modal-dropshadow');
    }
    // invisible post modal
    if (event.target == postModalShow) {
        postModalShow.classList.remove('visible', 'opacity-100');
        postModalShow.classList.add('invisible', 'opacity-0');
        html.classList.remove('overflow-hidden');
    }
    // hide chat container
    if (event.target == showChatBox) {
        chatBoxContainer.classList.remove('right-0');
        showChatBox.classList.remove('modal-dropshadow');
        html.classList.remove('overflow-hidden');
        chatBoxContainer.classList.add('-right-[1010px]');
    }
    // Invisible birthday modal
    if (event.target == birthdayModal) {
        birthdayModalContainer.classList.remove('visible', 'top-14');
        birthdayModalContainer.classList.add('invisible', '-top-80');
        birthdayModal.classList.remove('modal-dropshadow');
        html.classList.remove('overflow-hidden');
    }
};

/**
 * ENABLE DARK MODE
 */

const darkmode = document.getElementById('darkmode-toggle');
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
    if (document.body.classList.contains(themeStoreInLocalStorage)) {
        darkmode.checked = true;
    } else {
        darkmode.checked = false;
    }
}

darkmode.addEventListener('click', () => {
    if (darkmode.checked) {
        document.body.classList.add('dark');
    } else {
        document.body.classList.remove('dark');
    }
    localStorage.setItem('selected-theme', getCurrentTheme()); // set theme value in localStorage
});
