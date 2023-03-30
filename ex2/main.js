const body = document.querySelector("body");
body.style.height = "1000px";
const h1 = document.createElement("h1");
body.appendChild(h1);
body.addEventListener("mousemove", function(event) {
    h1.textContent = `(X = ${event.x}, Y = ${event.y})`;
    // console.log(event);
})