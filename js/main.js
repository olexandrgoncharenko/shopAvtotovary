window.addEventListener('DOMContentLoaded', () => {



    /* burger menu */
    const burgerBtn = document.querySelector('.header__burger-btn');
    const menu = document.querySelector('.header__menu');

    burgerBtn.addEventListener('click', function() {
        menu.classList.toggle('active');
        burgerBtn.classList.toggle('active');
    });


    /* info__slider */ 
    const swiper = new Swiper('.info__slider', {
        direction: 'horizontal',
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.info__slider--next',
            prevEl: '.info__slider--prev',
        },
        autoplay: {
            delay: 3000,
        },
        speed: 1000,
        observerParents: true,
    });

    // tabs goods
    const tabsBtn = document.querySelectorAll('.goods-btn');
    const tabsItems = document.querySelectorAll('.goods-content');

    tabsBtn.forEach(function (item) {
        item.addEventListener('click', function () {
            let currentBtn = item;
            let tabId = currentBtn.getAttribute('data-tab');
            let currentTab = document.querySelector(tabId);

            if (!currentBtn.classList.contains('active')) {
                tabsBtn.forEach(function (item) {
                    item.classList.remove('active');
                });

                tabsItems.forEach(function (item) {
                    item.classList.remove('active');
                });

                currentBtn.classList.add('active');
                currentTab.classList.add('active');
            }
        })
    });

     /* categories sublist */

     const sablistBtn = document.querySelectorAll('.categories__list-item');
     const sablistItems = document.querySelectorAll('.categories__submenu-item');
 
     sablistBtn.forEach(function (item) {
         item.addEventListener('click', function () {
             let currentListBtn = item;
             let tabListId = currentListBtn.getAttribute('data-link');
             let currentItemTab = document.querySelector(tabListId);
 
             if (!currentListBtn.classList.contains('active')) {
                 sablistBtn.forEach(function (item) {
                     item.classList.remove('active');
                 });
 
                 sablistItems.forEach(function (item) {
                     item.classList.remove('active');
                 });
 
                 currentListBtn.classList.add('active');
                 currentItemTab.classList.add('active');
             }
         })
     });

    // Video swiper
    const swiperVideo = new Swiper('.video__slider', {
        direction: 'horizontal',
        loop: true,
        navigation: {
        nextEl: '.video-button-next',
        prevEl: '.video-button-prev',
        },
        autoplay: {
            delay: 3000,
        },
        breakpoints: {
            320: {
            slidesPerView: 1,
            },
            600: {
                slidesPerView: 2,
            },
            840: {
                slidesPerView: 3,
            },
            1022: {
            slidesPerView: 4,
            }
        }
    });    

   
});