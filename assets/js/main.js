const header = document.querySelector(".header-section");
const navList = document.querySelector(".nav__list");
const navBtn = document.querySelector(".nav__btn .fas");
navBtn.addEventListener("click", () => {
  navList.classList.toggle("active");
});

window.addEventListener("scroll", () => {
  navList.classList.remove("active");
  window.scrollY > 100
    ? header.classList.add("active")
    : header.classList.remove("active");
});

// JQuery Plugin function
$(document).ready(function () {
  // Onepage nav active
  $("#nav").onePageNav({
    currentClass: "current",
  });
  // project popup active
  $(".project__popup").magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
    },
  });
  // Counter Up active
  $(".counter__increment").counterUp();
  // Video popup active
  $(".video__popup").magnificPopup({
    type: "iframe",
  });
  // Slick-slider active
  $(".testimonial").slick({
    slidesToShow: 3,
    prevArrow:
      '<button type="button" class="slick-prev"><i class="fas fa-long-arrow-alt-left"></i></button>',
    nextArrow:
      '<button type="button" class="slick-next"><i class="fas fa-long-arrow-alt-right"></i></button>',
    dots: true,
    infinite: true,
    loop: true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          arrows: false,
        },
      },
      {
        breakpoint: 992,
        settings: {
          arrows: false,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
  });
  // Partner section active
  $(".partners").slick({
    slidesToShow: 6,
    infinite: true,
    loop: true,
    autoplay: true,
    arrows: false,
    speed: 300,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  });
});
