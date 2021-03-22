// スロット画像配列
var slotImg = [
    {Img: 'slot1.jpg', Url: "./omikuji.html" },
    {Img: 'slot2.jpg', Url: "https://sketch.lab.city.toyama.toyama.jp/" },
    {Img: 'slot3.jpg', Url: "./hana/hana.html" },
    {Img: 'slot4.jpg', Url: "./osake/yopparai.html" },
    {Img: 'slot5.jpg', Url: "./kankou/kankou---.html"},];
// 縦に並べるスロット画像の数
var slotNum = 50;
// スロット画像のスタート位置
var startPos = -96 * (slotNum - 3);
// スロット画像の停止位置
var stopPos = 0
// スロット移動の時間（ミリ秒）
var moveTime = 5000;
// 開始図柄ランダム
var random = Math.floor(Math.random() * slotImg.length)

$(document).ready(function () {
    // A枠にスロット画像を生成
    slotCreate($("#slots_a .wrapper"));
    // B枠にスロット画像を生成
    slotCreate($("#slots_b .wrapper"));
    // C枠にスロット画像を生成
    slotCreate($("#slots_c .wrapper"));
});

/* スロット画像生成 */
function slotCreate(obj) {

    // アニメーションをストップ（アニメーション処理中の場合の対応）
    obj.stop(true, true);
    // 枠内の要素をクリア
    obj.children().remove();
    // スロット画像のタグ生成
    for (var i = 0; i < slotNum; i++) {
        // 画像ファイルは配列からランダムに取得
        var idx = (i + random) % slotImg.length
        obj.append("<img src='slot/images/" + slotImg[idx].Img + "'/>");
    }

    // スロット画像のスタート位置を設定
    obj.css({
        "margin-top": startPos + "px"
    });
}

/* スロットスタート */
function slotStart() {
    // A枠のスロット画像移動
    slotMove($("#slots_a .wrapper"))


// 少し遅れてB枠のスロット画像移動
    setTimeout(function (obj) {
            slotMove(obj)
        },
        200, $("#slots_b .wrapper")
    );
// さらに少し遅れてC枠のスロット画像移動
    setTimeout(function (obj) {
            slotMove(obj)
        },
        400, $("#slots_c .wrapper")
    );
    //図柄にあわせてページ移動//
    setTimeout(function () {
            location.href = slotImg[random % slotImg.length].Url
        },
        moveTime + 500
    );
};

/* スロット画像移動 */
function slotMove(obj) {
    if (obj.css("margin-top") != startPos) {
        // スロットが動いた後であれば、スロット画像を再作成
        slotCreate(obj)
    }

// スロット画像の移動アニメーション
    obj.animate({
            "margin-top": stopPos + "px"
        },
        {
            'duration': moveTime,
            'easing': $("#easing").val()
        });
};

