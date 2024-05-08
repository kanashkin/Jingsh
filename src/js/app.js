import tabs from './modules/tabs.js';
import trustSwiper from './modules/trustSwiper.js';
import phoneMask from './modules/phoneMask.js';
import burgerMenu from './modules/burgerMenu.js';

window.addEventListener('DOMContentLoaded', function() {
    tabs('.services__tab', '.services__content')
    trustSwiper()
    burgerMenu()
    phoneMask()
})