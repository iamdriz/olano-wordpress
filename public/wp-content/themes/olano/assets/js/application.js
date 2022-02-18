$.fn.randomizeChildrenOrder = function () {
  this.each(function () {
    let childrenArray = $(this).children().toArray();
    let shuffledChildrenArray = fisherYatesShuffle(childrenArray);
    $(shuffledChildrenArray).detach().appendTo(this);
  });

  return this;

  function fisherYatesShuffle(array) {
    let currentIndex = array.length,
      temporaryValue,
      randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }
};
$(window).load(function () {
  $(".preload").removeClass("preload");
});
$(document).on("click", ".burger__link", function (e) {
  e.preventDefault();
  $("body").toggleClass("show-menu");
  window.scrollTo(0, 0);
});
$(document).on("click", function (e) {
  if ($(e.target).parents().hasClass("tooltip")) return;
  $(".tooltip").removeClass("tooltip--open");
  $("body").removeClass("show-tooltip");
});
$(document).on("click", "[data-tooltip-close]", function (e) {
  e.preventDefault();
  let tooltip = $(this).parents(".tooltip");
  $(tooltip).removeClass("tooltip--open");
  $("body").removeClass("show-tooltip");
});
$(document).on("click", "[data-tooltip-open]", function (e) {
  e.preventDefault();
  let tooltip = $(this).attr("href");
  if ($(tooltip).hasClass("tooltip--disabled")) return false;
  if ($(tooltip).hasClass("tooltip--open")) {
    $(tooltip).removeClass("tooltip--open");
    $("body").removeClass("show-tooltip");
  } else {
    $(".tooltip").removeClass("tooltip--open");
    $(tooltip).addClass("tooltip--open");
    $("body").addClass("show-tooltip");
  }
  unlockNextTooltip(tooltip);
});
$(document).on("keydown", function (e) {
  let tooltip = $(".tooltip--open");
  let key = e.which;
  if (!$(tooltip).length > 0) return;
  if (key == 27) {
    $(".tooltip").removeClass("tooltip--open");
  } else if (key == 37) {
    let arrowLeft = $(tooltip).find(".tooltip-arrow:first-child");
    $(arrowLeft).trigger("click");
  } else if (key == 39) {
    let arrowRight = $(tooltip).find(".tooltip-arrow:last-child");
    $(arrowRight).trigger("click");
  }
});

function unlockNextTooltip(tooltip) {
  if (tooltip == "#tooltip-1") {
    $("#tooltip-2").removeClass("tooltip--disabled");
  } else if (tooltip == "#tooltip-2") {
    $("#tooltip-3").removeClass("tooltip--disabled");
  }
}

$(document).on("click", ".book a", function (e) {
  e.preventDefault();
  let page = $(this).attr("href");
  $(".book-page--current").removeClass("book-page--current");
  $(page).addClass("book-page--current");
});

let pressed = {};

document.addEventListener("keydown", (event) => {
  pressed[event.which] = true;
});
document.addEventListener("keyup", (event) => {
  delete pressed[event.which];
});
document.addEventListener("keydown", (event) => {
  if (pressed[16] && pressed[71]) {
    $(".grid-overlay").toggleClass("grid-overlay--visible");
  }
});

function nextTestimonial() {
  $(".testimonial-arrow:first-child").removeClass(
    "testimonial-arrow--disabled"
  );
  let testimonial = $(".testimonials-list-item--active").next();
  if ($(testimonial).is(":last-child")) {
    $(".testimonial-arrow:last-child").addClass("testimonial-arrow--disabled");
  }
  $(".testimonials-list-item").removeClass("testimonials-list-item--active");
  $(testimonial).addClass("testimonials-list-item--active");
}

function previousTestimonial() {
  $(".testimonial-arrow:last-child").removeClass("testimonial-arrow--disabled");
  let testimonial = $(".testimonials-list-item--active").prev();
  if ($(testimonial).is(":first-child")) {
    $(".testimonial-arrow:first-child").addClass("testimonial-arrow--disabled");
  }
  $(".testimonials-list-item").removeClass("testimonials-list-item--active");
  $(testimonial).addClass("testimonials-list-item--active");
}

$(".testimonials-list").randomizeChildrenOrder();
setTimeout(function () {
  $(".testimonials-list-item:first-child").addClass(
    "testimonials-list-item--active"
  );
  $(".testimonial-arrow:first-child").addClass("testimonial-arrow--disabled");
}, 1);

$(document).on("click", ".testimonial-arrow:first-child", function (e) {
  e.preventDefault();
  previousTestimonial();
});
$(document).on("click", ".testimonial-arrow:last-child", function (e) {
  e.preventDefault();
  nextTestimonial();
});
// $(document).on('click', '.toggle-services-full-list a', function(e){
//     e.preventDefault();
//     $('.section--full-services').toggleClass('section--full-services--visible');
//     $('html, body').animate({
//         scrollTop: $('.section--full-services').offset().top
//     }, 200);
// });

function showHideBackToTop() {
  if ($(this).scrollTop() < 100) {
    $(".back-to-top").addClass("hidden");
  } else {
    $(".back-to-top").removeClass("hidden");
  }
}

$(document).ready(function () {
  showHideBackToTop();
  $(window).scroll(function () {
    showHideBackToTop();
  });
});

$(document).on("click", ".back-to-top", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, 800);
});
