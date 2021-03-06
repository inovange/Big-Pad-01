myTable = new Array(
    "#link1",
    "#link2"
);

document.getElementById("text-button").onclick = function () {	// 適当に選んでリンクする関数
    myRnd = Math.floor(Math.random() * myTable.length);
    window.location.href = myTable[myRnd];
}
