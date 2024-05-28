import tabs from './modules/tabs.js';
import trustSwiper from './modules/trustSwiper.js';
import phoneMask from './modules/phoneMask.js';
import burgerMenu from './modules/burgerMenu.js';
import currentMenuItem from './modules/currentMenuItem.js';
import showAnimation from './modules/showAnimation.js';
import servicesCollapse from './modules/servicesCollapse.js';
import scrollToBlocks from './modules/scrollToBlocks.js';

window.addEventListener('DOMContentLoaded', function() {
    tabs('.services__tab', '.services__content')
    trustSwiper()
    burgerMenu()
    phoneMask()
    currentMenuItem('.header__content .header__list-item')
    currentMenuItem('.mobile__menu .header__list-item')
    showAnimation()
    scrollToBlocks()
    setTimeout(servicesCollapse, 100)
})