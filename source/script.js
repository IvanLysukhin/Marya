const buttons = Array.from(document.querySelectorAll('.promo-slider__button'));
const slide = document.querySelector('.promo-slider__slide');
const smallSlide = document.querySelector('.promo-slider__small-slide');
const page = document.querySelector('html');

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
  console.log(page.scrollTop);
})
