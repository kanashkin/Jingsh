function trustSwiper() {
    const swiperEl = document.querySelector('.trust__swiper')

    if (swiperEl) {
        const swiper = new Swiper(swiperEl, {
            loop: true,
            speed: 800,
            slidesPerView: 1,
            navigation: {
                prevEl: '.trust__swiper-left',
                nextEl: '.trust__swiper-right'
            },
            autoplay: {
                delay: 4000,
            },
            breakpoints: {
                991: {
                    slidesPerView: 'auto',
                    spaceBetween: 24,
                }
            }
        })
    }
}

export default trustSwiper