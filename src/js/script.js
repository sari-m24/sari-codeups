jQuery(function ($) {
  // この中であればWordpressでも「$」が使用可能になる
  // ハンバーガーメニュー
  $(function () {
    $(".js-hamburger, .js-drawer").click(function () {
      $(".js-hamburger, .js-header").toggleClass("is-active");
      $(".js-drawer").fadeToggle();
    });
  });

  // ドロワーメニューの固定
  $(function () {
    var state = false;
    var pos;
    $(".js-hamburger, .js-drawer").click(function () {
      if (state == false) {
        pos = $(window).scrollTop();
        $("body").addClass("fixed").css({ top: -pos });
        state = true;
      } else {
        $("body").removeClass("fixed").css({ top: 0 });
        window.scrollTo(0, pos);
        state = false;
      }
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

  const campaignSwiper = new Swiper(".js-campaign-swiper", {
    loop: true,
    autoplay: {
      delay: 2000,
    },
    speed: 2000,
    slidesPerView: 1.26,
    spaceBetween: 24,
    centeredSlides: false,
    breakpoints: {
      768: {
        slidesPerView: 3.49,
        spaceBetween: 40,
      },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // 画像のエフェクト
  var box = $(".js-color-box"),
    speed = 700;

  box.each(function () {
    $(this).append('<div class="color"></div>');
    var color = $(this).find($(".color")),
      image = $(this).find("img");
    var counter = 0;

    image.css("opacity", "0");
    color.css("width", "0%");
    color.on("inview", function () {
      if (counter == 0) {
        $(this)
          .delay(200)
          .animate({ width: "100%" }, speed, function () {
            image.css("opacity", "1");
            $(this).css({ left: "0", right: "auto" });
            $(this).animate({ width: "0%" }, speed);
          });
        counter = 1;
      }
    });
  });

  // TOPへ戻るボタン
  function PageTopAnime() {
    var scroll = $(window).scrollTop();
    $("js-page-top").hide();
    if (scroll >= 100) {
      $(".js-page-top").fadeIn();
    } else {
      $(".js-page-top").fadeOut();
    }
    var wH = window.innerHeight;
    var footerPos = $("footer").offset().top;
    if (scroll + wH >= footerPos + 10) {
      var pos = scroll + wH - footerPos + 16;
      $(".js-page-top").css("bottom", pos);
    } else {
      $(".js-page-top").css("bottom", "10px");
    }
  }

  $(window).scroll(function () {
    PageTopAnime();
  });
  $(window).on("load", function () {
    PageTopAnime();
  });

  $(".js-page-top").click(function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      500
    );
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
    $(".js-hamburger, .js-header").addClass("is-active");
  }

  function closeDrawer() {
    $(".js-drawer").fadeOut();
    $(".js-hamburger, .js-header").removeClass("is-active");
  }
});

// タブ
$(document).ready(function () {
  // タブのクリックイベントを監視
  $(".js-tab-button").click(function (e) {
    e.preventDefault();
    window.location.hash = $(this).attr("id");
  });

  // ページ読み込み時とハッシュ変更時にタブの状態を更新
  activateTabFromHash();
  $(window).on("hashchange", function () {
    activateTabFromHash();
  });
});

// ハッシュに基づいてタブをアクティブ化する関数
function activateTabFromHash() {
  var hash = window.location.hash;

  // タブとコンテンツのアクティブ状態をリセット
  $(".js-tab-button").removeClass("current");
  $(".js-tab-content").removeClass("show");

  if (hash) {
    // ハッシュに該当するタブをアクティブに
    $(hash).addClass("current");

    // 該当のコンテンツを表示
    var contentId = "#content" + hash.replace("#tab", "");
    $(contentId).addClass("show");
  } else {
    // ハッシュが存在しない場合、最初のタブをアクティブに
    $(".js-tab-button:first").addClass("current");
    $(".js-tab-content:first").addClass("show");
  }
}

// アコーディオン
$(function () {
  $(".js-accordion-item .js-accordion-content").css("display", "block");
  $(".js-accordion-item .js-accordion-title").addClass("is-open");
  $(".js-accordion-title").on("click", function () {
    $(this).toggleClass("is-open");
    $(this).next().slideToggle(300);
  });
});

// アーカイブトグル
$(".js-toggle").on("click", function () {
  $(this).next().slideToggle();
  $(this).toggleClass("is-active");
});

//モーダル
$(".js-modal-img").click(function () {
  // クリックした画像のHTML要素を取得して、置き換える
  $(".js-modal-content").html($(this).prop("outerHTML"));

  $(".js-modal").fadeIn(200);
  return false;
});

$(".js-modal").click(function () {
  // 非表示にする
  $(".js-modal").fadeOut(200);
  return false;
});

//アクティブページのリンク色変える
$(function () {
  $(".js-highlight").on("click", function () {
    var index = $(".js-highlight").index(this);
    $(".js-highlight").removeClass("current");
    $(this).addClass("current");
  });
});
