import './modules/isWebp.js'
import tabs from './modules/tabs.js';
import trustSwiper from './modules/trustSwiper.js';

window.addEventListener('DOMContentLoaded', function() {
    tabs('.services__tab', '.services__content')
    trustSwiper()
})