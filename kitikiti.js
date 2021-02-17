function onClick() {
    var resultInt = Math.floor(Math.random() * 5)
    var resultText = ["吉","笑吉","末吉","中吉","大吉"][resultInt]
    var resultImg = ["omikuji-1.png","omikuji-2.png","omikuji-3.png","omikuji-4.png","omikuji-5.png"][resultInt]
    document.getElementById("omikuji").src = resultImg;
    document.getElementById("omikuji").alt = resultText;
}
