myTable = ["http://www.kansui-park.jp/\n",
    "https://toyama-glass-art-museum.jp/\n",
    "https://tad-toyama.jp/\n",
    "https://toyama-asbb.com/\n",
    "https://toyama.visit-town.com/"];
function myRndLink() {
    myRnd = Math.floor(Math.random() * myTable.length);
    location.href = myTable[myRnd];
}

