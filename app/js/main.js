$(function() {
    var mixer = mixitup('.trending__gallery');

    $(".star").rateYo({
      readOnly: true,
      starWidth: "10.53px",
      normalFill: "#cccccc",
      ratedFill: "#8499B7",
      spacing: "3.58px",
      starSvg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 5.173l2.335 4.817 5.305.732-3.861 3.71.942 5.27-4.721-2.524-4.721 2.525.942-5.27-3.861-3.71 5.305-.733 2.335-4.817zm0-4.586l-3.668 7.568-8.332 1.151 6.064 5.828-1.48 8.279 7.416-3.967 7.416 3.966-1.48-8.279 6.064-5.827-8.332-1.15-3.668-7.569z"/></svg>'
  });

  $('.first__slider').slick({
    arrows: false,
    dots: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000
  });

  $('.header-top__select').styler();
  $('.header-bottom__select').styler();
 

});