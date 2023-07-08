
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる
    // ハンバーガーメニュー
    $(function () {
      $(".js-hamburger,.js-drawer").click(function () {
        $(".js-hamburger").toggleClass("is-active");
        $(".js-drawer").fadeToggle();
      });
    });

    // mvスライダー
    const mvSwiper = new Swiper(".js-mv-swiper", {
        loop: true,
        effect: "fade",
        speed: 3000,
        allowTouchMove: false,
        autoplay: {
        delay: 3000,
        },
    });

    // Campaign スライダー

      const campaignSwiper = new Swiper('.js-campaign-swiper', {
        loop: false,
        speed: 500,
        slidesPerView: 1.26,
        spaceBetween: 24,
        centeredSlides: false,
        breakpoints:{
          767:{
            slidesPerView: 3.49,
            spaceBetween: 40,
          }
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });

    // 画像のエフェクト
    var box = $('.js-color-box'),
    speed = 700;

    box.each(function(){
    $(this).append('<div class="color"></div>')
    var color = $(this).find($('.color')),
    image = $(this).find('img');
    var counter = 0;

    image.css('opacity','0');
    color.css('width','0%');
    color.on('inview', function(){
        if(counter == 0){
    　　　　　$(this).delay(200).animate({'width':'100%'},speed,function(){
                  image.css('opacity','1');
                  $(this).css({'left':'0' , 'right':'auto'});
                  $(this).animate({'width':'0%'},speed);
                })
            counter = 1;
          }
    });
});

// TOPへ戻るボタン
function PageTopAnime() {

  var scroll = $(window).scrollTop();
  $('js-page-top').hide();
  if (scroll >= 100){
    $('.js-page-top').fadeIn();
  }else{
    $('.js-page-top').fadeOut();
  }

  var wH = window.innerHeight;
  var footerPos =  $('footer').offset().top;
  if(scroll+wH >= (footerPos+10)) {
    var pos = (scroll+wH) - footerPos+16
    $('.js-page-top').css('bottom',pos);
  }else{
      $('.js-page-top').css('bottom','10px');
  }
}

$(window).scroll(function () {
PageTopAnime();
});

$(window).on('load', function () {
PageTopAnime();
});


$('.js-page-top').click(function () {
  $('body,html').animate({
      scrollTop: 0
  }, 500);
  return false;
});


 //resizeイベント
 $(window).resize(function () {
  if (window.matchMedia("(min-width: 766px)").matches) {
      closeDrawer();
  }
  });

function openDrawer() {
  $(".js-drawer").fadeIn();
  $(".js-hamburger").addClass("is-active");
}

function closeDrawer() {
  $(".js-drawer").fadeOut();
  $(".js-hamburger").removeClass("is-active");
}

});
