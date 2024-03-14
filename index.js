const swiper = new Swiper(".swiper", {
  pagination: {
    el: ".swiper-pagination",
  },
  slidesPerView: 3,
  direction: getDirection(),
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  on: {
    resize: function () {
      swiper.changeDirection(getDirection());
    },
  },
});

function getDirection() {
  const windowWidth = window.innerWidth;
  const direction = window.innerWidth <= 760 ? "horizontal" : "horizontal";

  return direction;
}
