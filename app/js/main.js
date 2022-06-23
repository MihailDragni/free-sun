document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".burger");
  const burgerLine = document.querySelector('.burger__line')
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
  }  

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
});

// document.addEventListener("click", function (e) {
//   // const burgerMenuWrapper = document.querySelector('.burger-menu__wrapper')
//   if (e.target !== burger && e.target !== burgerMenu) {
//     burger.classList.remove("burger--active");
//     burgerMenu.classList.remove("burger-menu--active");
//     bodyLock.classList.remove("lock");
//   }
// });
