// let hello = 'Hello World'
// alert(hello);

// ------------------------------

//// 整数を代入する
// let int1 = 1;

//// 負数を代入する
// let int2 = -10;

//// 小数点を代入する
// let float1 = 3.14;

//// 文字列を代入する
// let str1 = 'JavaScriptを覚えよう';

// alert(str1);

// ------------------------------

//// 足し算
//alert(4 + 3);

//// 引き算
//alert(8 - 5);

//// 掛け算
//alert(2 * 6);

//// 割り算
//alert(10 / 2);

// ------------------------------

// alert('Hello' + 'World');

// let str1 = 'Hello';
// let str2 = 'World!!';
// alert(str1 + str2);

// ------------------------------

// let orange = 100;
// let apple = 120;

// if (orange < apple) {
//   alert('ミカンの値段がリンゴより安い');
// } else if (orange == apple) {
//   alert('ミカンとリンゴが同じ値段');
// } else {
//   alert('ミカンの値段がリンゴより高い');
// }

// ------------------------------

// let max = 100;
// let num = 1;
// let count = 0;

// while (num < max) {
//   num = num * 2;
//   count = count + 1
// }

// alert('2を掛け続けて' + max + 'を越えるのに必要だった回数は' + count + '回です。');

// ------------------------------

// let max = 10
// let num = 3

// do {
//   num = num * 4;
//   alert('現在の数値は' + num + 'です。');
// } while (num < max);

// ------------------------------

// let i;
// let num = 0;

// for (i = 1; i < 11; i++) {
//   num = num + i;
// }

// alert('1から10まで足し算した結果は' + num + 'です。');

// ------------------------------

//// < 確認問題 >
//// 足し算、引き算、掛け算、割り算nの計算式と結果をアラートウィンドウに表示させる //
// alert('3 + 4 = ' + (3 + 4));

// alert('7 - 3 = ' + (7 - 3));

// alert('4 * 9 = ' + (4 * 9));

// alert('24 / 3 = ' + (24 / 3));

// ------------------------------

//// メイン部分
// let alertString;

//// 作成した関数を呼び出し、変数へ格納
// alertString = addString("webcamp");

//// 変数の中身をアラートで表示する
// alert(alertString);

//// 作成した関数
// function addString(strA) {
//   let addStr = "Hello " + strA;
//   return addStr;
// }

// ------------------------------

// 入力ダイアログで値を入力する
// let promptStr = prompt('何か好きな文字を入力してください。');

// alert(promptStr);

// ------------------------------

// じゃんけんの手を入力してもらうプロンプト欄を生成
let user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');

// ジャンケンの手をランダムに作成する関数を呼び出す
let js_hand = getJShand();

// ユーザの手とJavaScriptのジャンケンの手を比べる関数を呼び出し、結果をjudgeに入れる
let judge = winLose(user_hand, js_hand);

// 結果を表示する
if(user_hand == 'グー' || user_hand == 'チョキ' || user_hand == 'パー'){
  alert('あなたの選んだ手は' + user_hand + 'です。\nJavaScriptの選んだ手は' + js_hand + 'です。\n結果は' + judge + 'です。');
} else {
  alert('「グー」「チョキ」「パー」のいづれかを入力してください。')
}

// ランダムでじゃんけんの手を作成する関数
function getJShand(){
  let js_hand_num = Math.floor( Math.random() * 3);
  let hand_name;

  if(js_hand_num == 0){
    hand_name = "グー";
  } else if(js_hand_num == 1){
    hand_name = "チョキ";
  } else if(js_hand_num == 2){
    hand_name = "パー";
  }

  return hand_name;
}

// ユーザの手とJavaScriptのジャンケンの手を比べる関数
function winLose(user, js){
  let winLoseStr;

  if(user == "グー"){
    if(js == "グー"){
      winLoseStr == "あいこ";
    } else if(js == "チョキ"){
      winLoseStr = "勝ち";
    } else if(js == "パー"){
      winLoseStr = "負け";
    }
  } else if(user == "チョキ"){
    if(js == "グー"){
      winLoseStr = "負け";
    } else if(js == "チョキ"){
      winLoseStr = "あいこ";
    } else if(js == "パー"){
      winLoseStr = "勝ち";
    }
  } else if(user == "パー"){
    if(js == "グー"){
      winLoseStr = "勝ち";
    } else if(js == "チョキ"){
      winLoseStr = "負け";
    } else if(js == "パー"){
      winLoseStr = "あいこ";
    }
  }

  return winLoseStr;
}