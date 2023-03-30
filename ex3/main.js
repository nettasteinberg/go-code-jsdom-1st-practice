const body = document.querySelector("body");
const div = document.createElement("div");
const input = document.createElement("input");
const button = document.createElement("button");
button.textContent = "show";
const img = document.createElement("img");
img.alt = "Teddybear";
div.appendChild(input);
div.appendChild(button);
body.appendChild(div);
body.appendChild(img);
button.addEventListener("click", function(event) {
    img.src = input.value;
});