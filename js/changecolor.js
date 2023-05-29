$(function () {
  $('body .wrapper').append('<div class="changeColor"><a href="#" class="yellowBtn">黃</a><a href="#" class="blueBtn">藍</a><a href="#" class="redBtn">紅</a></div>');

  $('head').append('<link>');
  css = $('head').children(':last');
  css.attr({
    rel: 'stylesheet',
    type: 'text/css',
    href: '',
    id: 'cssStyle',
  });

  $('.yellowBtn').click(function (e) {
    $('#cssStyle').attr('href', 'css/style-1.css');
    $('.winnerList .pic img').attr('src', 'images/img_prize.jpg');
    e.preventDefault();
  });

  $('.blueBtn').click(function (e) {
    $('#cssStyle').attr('href', 'css/style-2.css');
    $('.winnerList .pic img').attr('src', 'images/img_prize_b.jpg');
    e.preventDefault();
  });

  $('.redBtn').click(function (e) {
    $('#cssStyle').attr('href', 'css/style-3.css');
    $('.winnerList .pic img').attr('src', 'images/img_prize_r.jpg');
    e.preventDefault();
  });
});
