// $(function(){
//   $('.box1').css({
//     'background-color': '#0000ff',
//     'height': '100px'
//   });
// });


//// 上から下へへスライドさせる
// $(function(){
//   $('.box1').slideDown();
// });


//// 下から上へスライドさせる
// $(function(){
//   $('.box1').slideUp();
// });


//// 非表示の要素をjQueryで表示させる
// $(function(){
//   $('.box1').show();
//   $('.box1').css({'background-color': '#0000ff'});
// });


//// 表示されている要素をjQueryで非表示にする
// $(function(){
//   $('.box1').hide();
// });

// $(function(){
//   $('box1').css({
//     'background-color': '#0000ff',
//     'width': '200px',
//     'height': '100px'
//   )};
// });


//// 課題：上から下へ移動 → .box1の色と大きさを変更 → 下から上へ移動
// $(function() {
//   $('.box1').slideDown(1000, function() {
//     $('.box1').css({
//       'background-color': '#0000ff',
//       'width': '200px',
//       'height': '100px'
//     }).slideUp(1000);
//   });
// });


//// マウスオーバー・マウスアウト時のイベント設定（その１：色変更）
// $(function(){
//   $('.box1').mouseover(function(){
//     $('.box1').css({'background-color': '#0000ff'});
//   });
//   $('.box1').mouseout(function(){
//     $('.box1').css({'background-color': '#ff0000'});
//   });
// });

//// マウスオーバー・マウスアウト時のイベント設定（その２：class属性の追加・解除）
// $(function(){
//   $('.box1').mouseover(function(){
//     $('.box1').addClass('box1-ext');
//   });
//   $('.box1').mouseout(function(){
//     $('.box1').removeClass('box1-ext');
//   });
// });


// マウスクリック時のイベント設定
$(function(){
  $('.box1').on('click', function(){
    $('.box1').addClass('box1-ext');
  });
  $('.box1').mouseout(function(){
    $('.box1').removeClass('box1-ext');
  });
});
