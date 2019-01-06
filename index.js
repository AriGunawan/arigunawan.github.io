var swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  // spaceBetween: 30,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  speed: 1000
});

if (param) {
  console.log();
}