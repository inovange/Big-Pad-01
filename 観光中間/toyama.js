function onClick () {
    let a = [];
    a[0] = "<a href='kankou-1.html'></a>";
    a[1] = "<a href=kankou-2.html></a>";
    a[2] = "<a href=kankou-3.html></a>";
    a[3] = "<a href=kankou-4.html></a>";
    a[4] = "<a href=kankou-5.html></a>";
    let x;
    x = Math.floor(Math.random() * 5);
    document.write(a[x])

}

