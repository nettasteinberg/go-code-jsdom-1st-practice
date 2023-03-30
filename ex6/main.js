const colorArray = ["blue", "red", "green", "yellow", "pink", "purple", "black", "brown", "orange", "gray"];
const body = document.querySelector("body");
body.style.height = "1000px";
setInterval(function() {
    body.style.backgroundColor = colorArray[Math.floor(Math.random() * colorArray.length)];
}, 2000);