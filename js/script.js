
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる
  // 

  $('.q').click(function () {
    $(this).siblings('.a').stop().slideToggle();
    $('.q').not($(this)).siblings('.a').slideUp();
    $(this).toggleClass('active');
    $('.q').not($(this)).removeClass('active');
  });

  // 
});
