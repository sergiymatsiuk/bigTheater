const swiper =new Swiper('.partners-logo', {
    loop: true,
    loopedSlides: 4,
    centeredSlides: false,
    initialSlide: 4,
    slideToClickedSlide: true,
    grabCursor: true,
    slidesPerView: 'auto',

    breakpoints: {
        1400: {
            slidesPerView: 4,
            spaceBetween: 30
        }
    }
})

const bigTheaterSlider =new Swiper('.big-theater-slider-container', {
    loop: true,
    navigation: {
        prevEl: '.slider-nav-next',
        nextEl: '.slider-nav-prev' 
    },
    speed: 1000,
})