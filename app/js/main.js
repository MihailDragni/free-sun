document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".burger");
  const burgerLine = document.querySelector(".burger__line");
  const burgerMenu = document.querySelector(".burger-menu");
  const bodyLock = document.querySelector("body");
  const burgerMenuWrapper = document.querySelector(".burger-menu__wrapper");
  const menuBtn = document.querySelector(".menu-btn");

  const openMenu = () => {
    burger.classList.toggle("burger--active");
    burgerMenu.classList.toggle("burger-menu--active");
    if (burgerMenu.classList.contains("burger-menu--active")) {
      burger.classList.add("burger--active");
      bodyLock.classList.add("lock");
    } else {
      burger.classList.remove("burger--active");
      bodyLock.classList.remove("lock");
    }
  };

  burgerLine.addEventListener("click", openMenu);
  burger.addEventListener("click", openMenu);
  menuBtn.addEventListener("click", openMenu);

  document.addEventListener("click", function (e) {
    if (
      e.target !== burger &&
      e.target !== burgerLine &&
      e.target !== menuBtn &&
      e.target !== burgerMenuWrapper
    ) {
      burger.classList.remove("burger--active");
      burgerMenu.classList.remove("burger-menu--active");
      bodyLock.classList.remove("lock");
    }
  });

  const aboutUsSlider = new Swiper(".our-projects-slider", {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 20,
    grabCursor: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  const aboutPanelsSlider = new Swiper(".about-panels-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    grabCursor: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".about-panels__pogination",
      clickable: true,
    },
  });

  const seeMoreSlider = new Swiper(".see-more-projects__slider", {
    grabCursor: true,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".see-more-projects__pagination",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },

      992: {
        slidesPerView: 2,
      },
    },
  });

  const stagesSleder = new Swiper(".stages-slider", {
    spaceBetween: 40,
    grabCursor: true,
    loop: true,
  });

  const blogSlider = new Swiper(".blog-slider", {
    spaceBetween: 40,
    grabCursor: true,
    loop: true,
    breakpoints: {
      320: {
        pagination: {
          el: ".blog-slider__pagination",
          clickable: true,
        },
      },
    },
  });

  const relativeElem = document.querySelectorAll(".our-merits__value");
  const bgElem = document.querySelectorAll(".our-merits__bg");

  const copyText = (arr1, arr2) => {
    for (let i = 0; i < arr1.length; i++) {
      arr2[i].innerText = arr1[i].innerText;
    }
    return null;
  };
  copyText(relativeElem, bgElem);
});

$(document).ready(function () {
  let headerTop = $(".header");
  $(window).scroll(function () {
    if ($(this).scrollTop() > 1) {
      headerTop.addClass("header--active");
    } else {
      headerTop.removeClass("header--active");
    }
  });
  $(".range-slider__input").ionRangeSlider({
    onStart: function (data) {
      $(".range-slider__value").text(data.from);
    },
    onChange: function (data) {
      $(".range-slider__value").text(data.from);
    },
  });
});

//скрипт плавный скролл
// $(document).ready(function () {
//   $("#menu").on("click", "a", function (event) {
//отменяем стандартную обработку нажатия по ссылке
//     event.preventDefault();
//забираем идентификатор бока с атрибута href
//     var id = $(this).attr("href"),
//узнаем высоту от начала страницы до блока на который ссылается якорь
//       top = $(id).offset().top;
//анимируем переход на расстояние - top за 1500 мс
//     $("body,html").animate({ scrollTop: top }, 1500);
//   });
//   15;
// });
