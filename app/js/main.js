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
    spaceBetween: 15,
    grabCursor: true,
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

  // const mainPageSlider = new Swiper(".main-page__slider", {
  //   direction: "vertical",
  //   sliderPerView: 1,
  //   spaceBetween: 0,
  //   mousewheel: true,
  //   allowTouchMove: false,
  //   autoHeight: true,
  //   lazy: true,
  //   pagination: {
  //     el: ".swiper-pagination",
  //     clickable: true,
  //     renderBullet: function (index, className) {
  //       return `<span class="${className}"></span>`;
  //     },
  //   },
  //   navigation: {
  //     nextEl: ".swiper-button-next",
  //     prevEl: ".swiper-button-prev",
  //   },
  // });
});

$(function () {
  let headerTop = $(".header");
  $(window).scroll(function () {
    if ($(this).scrollTop() > 20) {
      headerTop.addClass("header--active");
    } else {
      headerTop.removeClass("header--active");
    }
  });
  $(".range-slider__input").ionRangeSlider({
    onStart: function (data) {
      $(".range-slider__value").text(data.from);
    },
    onChange:function (data) {
      $(".range-slider__value").text(data.from);
    }
  });
});


// $(document).ready(function () {
//   $(".fullpage").fullpage({
//     //options here
//     // autoScrolling: true,
//     scrollHorizontally: true,
//   });
// });

// document.addEventListener("click", function (e) {
//   // const burgerMenuWrapper = document.querySelector('.burger-menu__wrapper')
//   if (e.target !== burger && e.target !== burgerMenu) {
//     burger.classList.remove("burger--active");
//     burgerMenu.classList.remove("burger-menu--active");
//     bodyLock.classList.remove("lock");
//   }
// });
