const buttons = Array.from(document.querySelectorAll('.promo-slider__button'));
const slide = document.querySelector('.promo-slider__slide');
const smallSlide = document.querySelector('.promo-slider__small-slide');
const page = document.querySelector('html');
const scrollMenu = document.querySelector('.scroll-menu');
const searchBtn = document.querySelectorAll('.main-nav__button-link--search');
const searchModal = document.querySelector('.search-form');
const burgerBtn = document.querySelector('.main-nav__burger-button');
const burgerCloseBtn = document.querySelector('.scroll-menu__burger--close');
const menuModal = document.querySelector('.menu-modal');
const mainContainer = document.querySelector('.page-main');
const header = document.querySelector('.page-header');
const promoPic = document.querySelector('.promo-slider__pic');
const promoText = document.querySelector('.promo-slider__text--big');
const scrollMenuBtn = document.querySelector('.scroll-menu__burger');
const scrollSearchBtn = document.querySelector('.scroll-menu__button--search');

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

const changeButtonClass = function(id) {
  buttons.forEach(function (btn, i) {
    if (i === id) {
      btn.classList.add('promo-slider__button--current');
    } else {
      btn.classList.remove('promo-slider__button--current');
    }
  });
};


const goToSlide = function (id) {
  changeButtonClass(id);
  changeClasses(slide, id);
  changeSmallClasses(smallSlide, id);

  if (id === 1) {
    promoPic.src = 'img/electrolux-log.png';
    promoText.textContent = 'Духовой шкаф со скидкой 20%';
    return;
  }

  promoPic.src = 'img/bosh-log.png';
  promoText.textContent = 'Посудомоечная машина в подарок';
}

let timer = 0;

setInterval(function() {
  timer++;
  console.log(timer);
  if (timer === 5) {
    goToSlide(1);
  }

  if (timer === 10) {
    goToSlide(2);
  }

  if (timer === 15) {
    goToSlide(0);
    timer = 0;
  }
}, 1000)

buttons.forEach(function (button, id) {
  button.addEventListener('click', function () {
    timer = 0;
    switch (id) {
      case 0:
        changeButtonClass(id);
        changeClasses(slide, id);
        changeSmallClasses(smallSlide, id);
        promoPic.src = 'img/bosh-log.png';
        promoText.textContent = 'Посудомоечная машина в подарок';
        break;
      case 1:
        changeButtonClass(id);
        changeClasses(slide, id);
        changeSmallClasses(smallSlide, id);
        promoPic.src = 'img/electrolux-log.png';
        promoText.textContent = 'Духовой шкаф со скидкой 20%';
        break;
      case 2:
        changeButtonClass(id);
        changeClasses(slide, id);
        changeSmallClasses(smallSlide, id);
        promoPic.src = 'img/bosh-log.png';
        promoText.textContent = 'Посудомоечная машина в подарок';
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

const closeModalSearch = function () {
  header.classList.remove('page-header--search-modal');
  mainContainer.classList.remove('page-main--search-modal');
  searchModal.style.display = 'none';
  window.removeEventListener('keydown', closeEsc);
  searchBtn.forEach(function(btn) {
    btn.classList.remove('main-nav__button-link--current');
  });
};

const closeEsc = function (evt) {
  if (evt.keyCode === 27) {
    closeModalSearch();
  }
};

const closeModalMenu = function () {
  menuModal.style.display = 'none';
  mainContainer.style.display = 'grid';
  window.removeEventListener('keydown', closeModalByEsc);
};

const openModalMenu = function () {
  closeModalSearch();
  menuModal.style.display = 'block';
  mainContainer.style.display = 'none';
  window.addEventListener('keydown', closeModalByEsc)
};

const addActiveClassForBtn = function(btn) {
  btn.classList.add('main-nav__button-link--current');
};

const openModalSearch = function () {
  header.classList.add('page-header--search-modal');
  mainContainer.classList.add('page-main--search-modal');
  searchModal.style.display = 'block';
  window.addEventListener('keydown', closeEsc);
  searchBtn.forEach(addActiveClassForBtn);
};

searchModal.addEventListener('click', function({target}) {
  if (target.classList.contains('search-form__form') || target.classList.contains('search-form__result-container')) {
    closeModalSearch();
  }
})


searchBtn.forEach(function (btn) {
  btn.addEventListener('click', function (evt) {
    evt.preventDefault();
    closeModalMenu();
    openModalSearch();
  });
})

scrollSearchBtn.addEventListener('click', function (evt) {
  evt.preventDefault();
  window.scrollTo(0, 0);
  openModalSearch();
});

const closeModalByEsc = function (evt) {
  if (evt.keyCode === 27) {
    closeModalMenu();
  }
};

burgerBtn.addEventListener('click', openModalMenu);

scrollMenuBtn.addEventListener('click', openModalMenu);

burgerCloseBtn.addEventListener('click', closeModalMenu);
