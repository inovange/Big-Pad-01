myTable1 = new Array(
    "#link1",
    "#link2",
    "#link3"
);

document.getElementById("text-button1").onclick = function () {	// 適当に選んでリンクする関数
    myRnd1 = Math.floor(Math.random() * myTable1.length);
    window.location.href = myTable1[myRnd1];
}

myTable2 = new Array(
    "#link4",
    "#link5",
    "#link6"
);

document.getElementById("text-button2").onclick = function () {	// 適当に選んでリンクする関数
    myRnd2 = Math.floor(Math.random() * myTable2.length);
    window.location.href = myTable2[myRnd2];
}

myTable3 = new Array(
    "#link7",
    "#link8",
    "#link9"
);

document.getElementById("text-button3").onclick = function () {	// 適当に選んでリンクする関数
    myRnd3 = Math.floor(Math.random() * myTable3.length);
    window.location.href = myTable3[myRnd3];
}

myTable4 = new Array(
    "#link10",
    "#link11",
    "#link12"
);

document.getElementById("text-button4").onclick = function () {	// 適当に選んでリンクする関数
    myRnd4 = Math.floor(Math.random() * myTable4.length);
    window.location.href = myTable4[myRnd4];
}

myTable5 = new Array(
    "#link13",
    "#link14",
    "#link15"
);

document.getElementById("text-button5").onclick = function () {	// 適当に選んでリンクする関数
    myRnd5 = Math.floor(Math.random() * myTable5.length);
    window.location.href = myTable5[myRnd5];
}

myTable6 = new Array(
    "#link16",
    "#link17",
    "#link18"
);

document.getElementById("text-button6").onclick = function () {	// 適当に選んでリンクする関数
    myRnd6 = Math.floor(Math.random() * myTable6.length);
    window.location.href = myTable6[myRnd6];
}

document.getElementById("fixed_btn_first").onclick = function (){
    window.location.href = "#pagetop";
}

document.getElementById("fixed_btn_home").onclick = function (){
    window.location.href = "./Big-Pad-01/index.html";
}
