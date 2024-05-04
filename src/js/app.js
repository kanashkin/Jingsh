import './modules/isWebp.js'
import tabs from './modules/tabs.js';
import trustSwiper from './modules/trustSwiper.js';
import IMask from 'imask';
import phoneMask from './modules/phoneMask.js';

window.addEventListener('DOMContentLoaded', function() {
    tabs('.services__tab', '.services__content')
    trustSwiper()
    phoneMask()
})