$(function(){
  $('#back a').on('click', function(event){
    // #back内のaタグがクリックされた時の処理
    $('body, html').animate({
      scrollTop: 0    // 変化対象のプロパティ名.変化値 ( 変化値が0の時は「最上部に移動する」の意味)
    }, 800);    // 800はアニメーションの動作時間 ( ミリ秒単位 )
    event.preventDefault();  // aタグの機能を無効化する
  });
});
