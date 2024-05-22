'use strict';

{

function callback(entries, obs) {   //コールバック関数
  entries.forEach(entry => {
  if (!entry.isIntersecting) {    //Intersecting(インタラスティング)は監視対象の要素が指定した領域に入っているかどうか（交差しているかどうか）を表す真偽値
      //交差しなかった場合
      return;    //そのまま何もせず返す
    }

    entry.target.classList.add("appear");     //appear(アピアー)は姿を見せる、出現するの意味
    obs.unobserve(entry.target);    //表示した後は監視対象から外れる
  });
}

const options = {
  threshold: 0.2,    //threshold(スレッショルド)は閾値(しきいち)
}                    //画面を下にスクロールした時に特定の領域が２０％（今回は0.2）表示されたら次の画像や文字が表示される

const observer = new IntersectionObserver(callback, options);//インスタンス（場所）
const targets = document.querySelectorAll(".play");       //モノの取得


targets.forEach(target => {           //ここで管理してるというコードを必ず入力する！
  observer.observe(target);
});

}