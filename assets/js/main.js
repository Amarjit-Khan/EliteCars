/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('header_features-id'),
    navToggle = document.getElementById('header_toggle-id'),
    navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show_features')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show_features')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav_link')

function linkaction() {
    navMenu.classList.remove('show_features')
}
navLink.forEach(n => n.addEventListener('click', linkaction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag

    if (this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== POPULAR SWIPER ===============*/
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    grabCursor: true,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        1051: {
            slidesPerView: 4,
        },
        799: {
            slidesPerView: 3,
        },
        532: {
            slidesPerView: 2,
        },
        402: {
            slidesPerView: 1.5
        },
        350: {
            slidesPerView: 1.2,
        }
    },
});

/*=============== MIXITUP FILTER FEATURED ===============*/
let mixerFeatured = mixitup('.featured_contents', {
    selectors: {
        target: '.featured_card'
    },
    animation: {
        duration: 300
    }
});

/* Link active featured */
const linkFeatured = document.querySelectorAll('.featured_item')

function activeFeatured() {
    linkFeatured.forEach(l => l.classList.remove('active-featured'))
    this.classList.add('active-featured')
}
linkFeatured.forEach(l => l.addEventListener('click', activeFeatured))


/*=============== SHOW SCROLL UP ===============*/
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');

    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if (this.scrollY >= 350) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 58;
        sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.header_features a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.header_features a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: '2500',
    delay: '400',
    // reset: true
})

sr.reveal('.home_heading, .home_title, .home_pow, .popular_container, .features_img, .featured_filters')
sr.reveal('.home_heading')
sr.reveal('.home_subtitle', { delay: 500 })
sr.reveal('.home_elec', { delay: 600 })
sr.reveal('.home_img', { delay: 800 })
sr.reveal('.home_car-data', { delay: 900, interval: 100, origin: 'bottom' })
sr.reveal('.home_button', { delay: 1000, origin: 'bottom' })
sr.reveal('.about_group, .offer_details', { origin: 'left' })
sr.reveal('.about_data, .offer_img', { origin: 'right' })
sr.reveal('.featured_card, .featured_heading, .logo_content, .footer_content', { interval: 100 })


/*=============== Engine Sound ===============*/
const audio = new Audio();
audio.src = "./assets/audio/Lamborghini Sound.mp3";


/*=============== Subscribe ===============*/
const offersubs = document.getElementById('offer_button-id')
function changesub() {
    if (offersubs) {
        offersubs.innerHTML = "Subscribed !"
        console.log(offersubs.innerHTML)
    }
}

