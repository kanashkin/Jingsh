import tabs from './modules/tabs.js';
import trustSwiper from './modules/trustSwiper.js';
import phoneMask from './modules/phoneMask.js';
import burgerMenu from './modules/burgerMenu.js';
import currentMenuItem from './modules/currentMenuItem.js';

window.addEventListener('DOMContentLoaded', function() {
    tabs('.services__tab', '.services__content')
    trustSwiper()
    burgerMenu()
    phoneMask()
    currentMenuItem('.header__content .header__list-item')
    currentMenuItem('.mobile__menu .header__list-item')
})