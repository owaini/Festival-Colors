const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector(".navbar__menu");
const navLogo = document.querySelector('#navbar__logo');
// Display Movile Menu

const mobileMenu = () => {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active');
}


menu.addEventListener('click', mobileMenu);

var counter = 1;
setInterval(function() {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 4 ) {
        counter = 1;
    }
    }, 3000);


    // Show active menu when scrolling down

    const highLightMenu = () => {
        const elem = document.querySelector('.highLight');
        const homeMenu = document.querySelector('#home-page')
        const aboutMenu = document.querySelector('#about-page')
        const servicesMenu = document.querySelector('#services-page')

        let scrollPos = window.scrollY;

        // adds 'highLight' class to my menu items

        if(window.innerWidth > 960 && scrollPos < 700){
            homeMenu.classList.add('highLight');
            aboutMenu.classList.remove('highLight');
            return;
        } else if (window.innerWidth > 960 && scrollPos < 1530) {
            aboutMenu.classList.add('highLight');
            servicesMenu.classList.remove('highLight');
            homeMenu.classList.remove('highLight');
            return;
        }else if (window.innerWidth > 960 && scrollPos < 4200) {
             servicesMenu.classList.add('highLight');
            aboutMenu.classList.remove('highLight');
            return
        }

        if(elem && window.innerWidth < 960 && scrollPos < 600 || elem) {
            elem.classList.remove('highLight')
        }
    }

    window.addEventListener('scroll', highLightMenu)
    window.addEventListener('click', highLightMenu)

// close mobile menu when clickeng on amenu item

const hideMobileMenu = () => {
    const menuBar = document.querySelector('.is-active')
    if(window.innerWidth <= 960 && menuBar) {
        menu.classList.toggle('is-active')
        menuLinks.classList.remove('active')
    }

}

menuLinks.addEventListener('click', hideMobileMenu)
navLogo.addEventListener('click', hideMobileMenu)


    // for (var i = 4; i > 1; i--){
    //     counter = i;
    // }