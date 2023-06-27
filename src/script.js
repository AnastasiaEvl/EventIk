const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  loop: true,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
document.getElementsByClassName("swiper-wrapper")[0].addEventListener("mouseover", function( ) {
  swiper.autoplay.stop();
});

document.getElementsByClassName("swiper-wrapper")[0].addEventListener("mouseout", function( ) {
  swiper.autoplay.start();
});