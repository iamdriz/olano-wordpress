setInterval(function () {
  const index = jQuery(".testimonials-list").attr("data-current");
  jQuery(".testimonials-list-item").removeClass(
    "testimonials-list-item--active"
  );
  jQuery(jQuery(".testimonials-list-item")[parseInt(index)]).addClass(
    "testimonials-list-item--active"
  );
}, 100);

function nextTestimonial() {
  jQuery(".testimonial-arrow:first-child").removeClass(
    "testimonial-arrow--disabled"
  );
  let testimonial = jQuery(".testimonials-list-item--active").next();
  if (jQuery(testimonial).is(":last-child")) {
    jQuery(".testimonial-arrow:last-child").addClass(
      "testimonial-arrow--disabled"
    );
  }
  jQuery(".testimonials-list-item").removeClass(
    "testimonials-list-item--active"
  );
  jQuery(testimonial).addClass("testimonials-list-item--active");
  jQuery(".testimonials-list").attr(
    "data-current",
    jQuery(testimonial).index()
  );
}

function previousTestimonial() {
  jQuery(".testimonial-arrow:last-child").removeClass(
    "testimonial-arrow--disabled"
  );
  let testimonial = jQuery(".testimonials-list-item--active").prev();
  if (jQuery(testimonial).is(":first-child")) {
    jQuery(".testimonial-arrow:first-child").addClass(
      "testimonial-arrow--disabled"
    );
  }
  jQuery(".testimonials-list-item").removeClass(
    "testimonials-list-item--active"
  );
  jQuery(testimonial).addClass("testimonials-list-item--active");
  jQuery(".testimonials-list").attr(
    "data-current",
    jQuery(testimonial).index()
  );
}

jQuery(document).on("click", ".testimonial-arrow:first-child", function (e) {
  e.preventDefault();
  previousTestimonial();
});

jQuery(document).on("click", ".testimonial-arrow:last-child", function (e) {
  e.preventDefault();
  nextTestimonial();
});
