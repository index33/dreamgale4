//ハンバーガーメニュー
$(function (){
    $('.humburger-btn').on('click',function(){
        $('.humburger-menu').toggleClass('show')
    })
})

$(".humburger-btn").click(function () {
    $(this).toggleClass('active');
});

// フェードイン
$(function (){
    $('.skill-text,.service-item').on('inview',function(event,view){
        if(view){
            $(this).addClass('fadeIn');
        }
        else{
            $(this).removeClass('fadeIn');
        }
    })
})

// 画像のスライダー
$(function (){
    $('.slider1').slick({
        autoplay: true, //自動でスクロール
        autoplaySpeed: 0, //自動再生のスライド切り替えまでの時間を設定
        speed: 3000, //スライドが流れるまでの時間 ミリ秒表示 3000=3秒
        cssEase: "linear", //スライドの流れ方を等速に設定 ease-in
        slidesToShow: 5, //表示するスライドの数
        swipe: false, //操作による切り替えをさせない
        arrows: false, //矢印非表示
        responsive: [ //画面表示幅に合わせた処理
            {
                breakpoint: 599, //表示幅が599px以下のとき
                settings: {
                    slidesToShow: 3, //表示するスライドの数
                }
            }
        ]
    })
})

$(function (){
    $('.slider2').slick({
        autoplay: true,
        autoplaySpeed: 0,
        speed: 3000,
        cssEase: "linear",
        slidesToShow: 5,
        swipe: false,
        arrows: false,
        rtl: true, //スライダーの向きを逆にする
        responsive: [
            {
                breakpoint: 599,
                settings: {
                    slidesToShow: 3,
                }
            }
        ]
    })
})

$(function() {
    // 変数にクラスを入れる
    var btn = $('.button');
    //スクロールしてページトップから100に達したらボタンを表示
    $(window).on('load scroll', function(){
        if($(this).scrollTop() > 100) {
            btn.addClass('active');
        }
        else{
            btn.removeClass('active');
        }
    });
    //スクロールしてトップへ戻る
    btn.on('click',function () {
        $('body,html').animate({
            scrollTop: 0
         });
    });
 });
