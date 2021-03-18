<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
<script src="js/jquery.easing.1.3.js"></script>
<script>
    // スロット画像配列
    var slotImg = ['slot1.jpg','slot2.jpg','slot3.jpg','slot4.jpg','slot5.jpg'];
    // 縦に並べるスロット画像の数
    var slotNum = 50;
    // スロット画像のスタート位置
    var startPos = -30 * (slotNum - 3);
    // スロット画像の停止位置
    var stopPos = -150;
    // スロット移動の時間（ミリ秒）
    var moveTime = 5000;

    $(document).ready(function() {
    // A枠にスロット画像を生成
    slotCreate( $("#slots_a .wrapper") )}
    // B枠にスロット画像を生成
    slotCreate( $("#slots_b .wrapper") );
    // C枠にスロット画像を生成
    slotCreate( $("#slots_c .wrapper") );
);

    /* スロット画像生成 */
    function slotCreate(obj){

    // アニメーションをストップ（アニメーション処理中の場合の対応）
    obj.stop(true, true);
    // 枠内の要素をクリア
    obj.children().remove();

    // スロット画像のタグ生成
    for (var i = 1; i <= slotNum; i++) {
    // 画像ファイルは配列からランダムに取得
    var idx = Math.floor(Math.random() * slotImg.length);
    obj.append("<div class='slot'>"
    + "<img border='0'"
    + " src='img/" + slotImg[idx] + "'"
    + " width='40' height='26' />"
    + "</div>");
}

    // スロット画像のスタート位置を設定
    obj.css({
    "margin-top" : startPos + "px"
});
}

    /* スロットスタート */
    function slotStart(){
    // A枠のスロット画像移動
    slotMove($("#slots_a .wrapper"))}
    // 少し遅れてB枠のスロット画像移動
    setTimeout( function(obj) {
    slotMove(obj)}
}, 200, $("#slots_b .wrapper") );
    // さらに少し遅れてC枠のスロット画像移動
    setTimeout( function(obj) {
    slotMove(obj);
}, 400, $("#slots_c .wrapper") );
}

    /* スロット画像移動 */
    function slotMove(obj){}

    if ( obj.css("margin-top") != startPos ){
    // スロットが動いた後であれば、スロット画像を再作成
    slotCreate( obj )}
}

    // スロット画像の移動アニメーション
    obj.animate({
    "margin-top" }: stopPos + "px"
}, {
    'duration' }: moveTime,
    'easing' : $("#easing").val()
});
};
</script>
