function onClick () {
    const texts = ["0301", "0302"]
    const images = ["0301.png", "0302.png"]
    setImage("hanahana",texts, images)
}

function setImage (id, texts, images){
    const today = new Date();
    let m = today.getMonth();
    let d = today.getDate();
    let m1 = m + 1;
    if (m1 < 10) {
        m1 = `0${m1}`;
    }
    if (d < 10) {
        d = `0${d}`;
    let bangou = ("" + m1 + d);
        const resultInt = bangou
        const resultText = texts[resultInt]
        const resultImg = images[resultInt]
        document.getElementById(id).src = "hana-box/" + resultInt +'png';
        document.getElementById(id).alt = resultText;

    }
}





