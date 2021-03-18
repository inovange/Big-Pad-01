function onClick () {
    const today = new Date();
    let m = today.getMonth();
    let m1 = m + 1;
    if (m1 < 10) {
        m1 = `0${m1}`;
    }
    let bangou = ("" + m1);
    console.log(bangou)
    const images = ["01.png", "02.png", "03.png", "04.png", "05.png", "06.png", "07.png", "08.png", "09.png", "10.png", "11.png", "12.png"]

    function monthDay (hanahana, bangou, images) {

    }
    monthDay("hanahana", bangou, images)
    document.getElementById("hanahana").src = "hana-box/" + bangou + '.png';
    target.addEventListener('click', () => {
        target.style.display = "none";
    }, false);
}
const target = document.getElementById('item_1');

target.addEventListener('click', () => {
    target.style.display = "none";
}, false);









