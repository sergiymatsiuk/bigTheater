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

const openBurger = document.querySelector('.header-burger')
const mobMenu = document.querySelector('.header-menu')
const closeBurger=document.querySelector('.close')

openBurger.addEventListener('click', (e) => {
    e.preventDefault()

    mobMenu.classList.toggle('show')
    document.body.classList.toggle('no-scroll')
})
closeBurger.addEventListener('click', (e) => {
    e.preventDefault()

    mobMenu.classList.toggle('show')
    document.body.classList.toggle('no-scroll')
})


window.addEventListener('resize', () => {

    if (window.innerWidth > 950 ) {
        mobMenu.classList.remove('show');
        openBurger.classList.remove('show-burger');
        document.body.classList.remove('no-scroll')
    }

})