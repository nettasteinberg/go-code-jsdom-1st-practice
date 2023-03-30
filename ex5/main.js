const body = document.querySelector("body");
body.style.height = "1000px";
const black = document.createElement("button");
black.classList.add("changeBackgroundColor");
black.textContent = "black";
body.appendChild(black);
const green = document.createElement("button");
green.classList.add("changeBackgroundColor");
green.textContent = "green";
body.appendChild(green);
const red = document.createElement("button");
red.classList.add("changeBackgroundColor");
red.textContent = "red";
body.appendChild(red);
const blue = document.createElement("button");
blue.classList.add("changeBackgroundColor");
blue.textContent = "blue";
body.appendChild(blue);
const colors = document.querySelectorAll(".changeBackgroundColor");
colors.forEach(element => 
    element.addEventListener("click", function(event) {
        body.style.backgroundColor = element.textContent;
    }
))