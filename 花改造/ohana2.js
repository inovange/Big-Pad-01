window.onload=function onClick () {
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
        console.log(bangou);
        document.getElementById("hanahana").src = "hana-box/" + bangou +'.png';

    }
}





