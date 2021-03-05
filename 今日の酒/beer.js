const imageArea = document.getElementById('imageArea');
const images = ['#link1', '#link2'];

const imageNo = Math.floor( Math.random() * images.length)
imageArea.src = images[imageNo];
