function onClick() {
    var resultInt = Math.floor(Math.random() * 8)
    var resultText = ["大凶","凶","平","吉","小吉","末吉","中吉","大吉"][resultInt]
    var resultImg = ["daikyou.jpg","kyou.jpg","hei.jpg","kichi.jpg","syoukichi.jpg","suekichi.jpg","tyuukichi.jpg","daikichi.jpg"][resultInt]
    document.getElementById("omikuji").src = "slot/images-omikuji/" + resultImg;
    document.getElementById("omikuji").alt = resultText;
}

setTimeout(function(){location.href="http://localhost:63342/Big-Pad-01/index.html?_ijt=7bno6imqsvdfmrqed9scgddel0"} , 8000);
