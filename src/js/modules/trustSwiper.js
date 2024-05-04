function trustSwiper() {
    const swiperEl = document.querySelector('.trust__swiper')

    if (swiperEl) {
        const swiper = new Swiper(swiperEl, {
            spaceBetween: 24,
            loop: true,
            speed: 800,
            slidesPerView: 'auto',
            navigation: {
                prevEl: '.trust__swiper-left',
                nextEl: '.trust__swiper-right'
            },
            autoplay: {
                delay: 4000,
            }
        })
    }
}

export default trustSwiper