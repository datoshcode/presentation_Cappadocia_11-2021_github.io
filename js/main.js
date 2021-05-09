$(function() {
  // Слайдер для блока "Fairy tail. Сказочная страна чудес"
  // Автосмена слайда каждые 3 сек.
  $('.fairy-tail__slider').slick({
    // Стрелка для перехода на предыдущий слайд
    prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="images/arrow-prev.svg" alt="Previous"></button>',
    // Стрелка для перехода на следующий слайд
    nextArrow: '<button type="button" class="slick-btn slick-next"><img src="images/arrow-next.svg" alt="Next"></button>',
    autoplay: true,
    fade: true,
    responsive: [
    {
      breakpoint: 601, // Отключаем стрелки слайдера
      settings: {
        arrows: false
      }
    },
  ]
  });

  // Слайдер для блока "Our trip. Маршрут"
  // Автосмена слайда каждые 3.5 сек.
  $('.our-trip__slider').slick({
    // Стрелка для перехода на предыдущий слайд
    prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="images/arrow-prev.svg" alt="Previous"></button>',
    // Стрелка для перехода на следующий слайд
    nextArrow: '<button type="button" class="slick-btn slick-next"><img src="images/arrow-next.svg" alt="Next"></button>',
    autoplay: true,
    autoplaySpeed: 3500,
    fade: true,
    responsive: [
    {
      breakpoint: 601, // Отключаем стрелки слайдера
      settings: {
        arrows: false
      }
    },
  ]
  });
  // Плавный переход по якорям меню сайта
  $(".menu, .our-trip__body").on("click","a", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();

    //забираем идентификатор бока с атрибута href
    var id  = $(this).attr('href'),

    //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;
    
    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({scrollTop: top}, 1500);
  });
});