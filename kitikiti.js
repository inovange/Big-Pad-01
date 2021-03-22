function onClick() {
    var resultInt = Math.floor(Math.random() * 8)
    var resultText = ["大凶","凶","平","吉","小吉","末吉","中吉","大吉"][resultInt]
    var resultImg = ["daikyou.jpg","kyou.jpg","hei.jpg","kichi.jpg","syoukichi.jpg","suekichi.jpg","tyuukichi.jpg","daikichi.jpg"][resultInt]
    document.getElementById("omikuji").src = "slot/images-omikuji/" + resultImg;
    document.getElementById("omikuji").alt = resultText;
}

setTimeout(function(){location.href="./index.html"} , 300000);
