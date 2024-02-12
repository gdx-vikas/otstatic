ScrollReveal().reveal(".scroll-reveal", { duration: 500, delay: 200 });
var scroll;
$(window).on("scroll", function() {
  var winH = $(window).height();
  scroll = $(window).scrollTop();
  $(".scroll-reveal").each(function() {
    var objH = $(this).outerHeight();
    var objTop = $(this).offset().top;
    var objCenter = objTop + objH / 2;
    if (scroll >= objCenter - winH) {
      if ($(this).css("opacity") == 0) {
        console.log($(this));
        $(this).css({
          opacity: 1,
        });
      }
    }
  });
});
