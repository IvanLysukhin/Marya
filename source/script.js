const buttons = Array.from(document.querySelectorAll('.promo-slider__button'));
const slide = document.querySelector('.promo-slider__slide');
const smallSlide = document.querySelector('.promo-slider__small-slide');
const page = document.querySelector('html');
const scrollMenu = document.querySelector('.scroll-menu');
const searchBtn = document.querySelector('.main-nav__button-link--search');
const searchModal = document.querySelector('.search-form');
const burgerBtn = document.querySelector('.main-nav__burger-button');
const burgerCloseBtn = document.querySelector('.scroll-menu__burger--close');
const menuModal = document.querySelector('.menu-modal');
const mainContainer = document.querySelector('.page-main');

const changeClasses = function(elm, id) {
  if (elm.classList.contains('promo-slider__slide--first')) {
    elm.classList.remove('promo-slider__slide--first');
  }

  if (elm.classList.contains('promo-slider__slide--second')) {
    elm.classList.remove('promo-slider__slide--second')
  }

  if (elm.classList.contains('promo-slider__slide--third')) {
    elm.classList.remove('promo-slider__slide--third')
  }

  if (id === 0) {
    elm.classList.add('promo-slider__slide--first');
  }

  if (id === 1) {
    elm.classList.add('promo-slider__slide--second');
  }

  if (id === 2) {
    elm.classList.add('promo-slider__slide--third');
  }
};

const changeSmallClasses = function(elm, id) {
  if (elm.classList.contains('promo-slider__small-slide--first')) {
    elm.classList.remove('promo-slider__small-slide--first');
  }

  if (elm.classList.contains('promo-slider__small-slide--second')) {
    elm.classList.remove('promo-slider__small-slide--second')
  }

  if (elm.classList.contains('promo-slider__small-slide--third')) {
    elm.classList.remove('promo-slider__small-slide--third')
  }

  if (id === 0) {
    elm.classList.add('promo-slider__small-slide--first');
  }

  if (id === 1) {
    elm.classList.add('promo-slider__small-slide--second');
  }

  if (id === 2) {
    elm.classList.add('promo-slider__small-slide--third');
  }
};

buttons.forEach(function (button, id) {
  button.addEventListener('click', function () {
    switch (id) {
      case 0:
        changeClasses(slide, id);
        changeSmallClasses(smallSlide, id);
        break;
      case 1:
        changeClasses(slide, id);
        changeSmallClasses(smallSlide, id);
        break;
      case 2:
        changeClasses(slide, id);
        changeSmallClasses(smallSlide, id);
        break;
    }
  })
});

window.addEventListener('scroll', function (evt) {
  if (page.scrollTop > 300) {
    scrollMenu.style.display = 'block';
  } else {
    scrollMenu.style.display = 'none';
  }
});

const closeEsc = function (evt) {
  if (evt.keyCode === 27) {
    searchModal.style.display = 'none';
    window.removeEventListener('keydown', closeEsc);
    searchBtn.classList.remove('main-nav__button-link--current');
  }
};

searchBtn.addEventListener('click', function (evt) {
  evt.preventDefault();
  searchModal.style.display = 'block';
  window.addEventListener('keydown', closeEsc);
  searchBtn.classList.add('main-nav__button-link--current');
})

const closeModalByEsc = function (evt) {
  if (evt.keyCode === 27) {
    menuModal.style.display = 'none';
    window.removeEventListener('keydown', closeModalByEsc);
    mainContainer.style.display = 'grid';
  }
};

burgerBtn.addEventListener('click', function (evt) {
  menuModal.style.display = 'block';
  mainContainer.style.display = 'none';
  window.addEventListener('keydown', closeModalByEsc)
});

burgerCloseBtn.addEventListener('click', function (evt) {
  menuModal.style.display = 'none';
  mainContainer.style.display = 'grid';
  window.removeEventListener('keydown', closeModalByEsc);
});
