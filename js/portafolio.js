/*----------------------------------------|PORTAFOLIO|----------------------------------------*/

var swiper = new Swiper(".portafolio__contenedor", {
  effect: "coverflow",
  autoplay: true,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,
  spaceBetween: 42,
  coverflowEffect: {
    rotate: 0,
  }
});
