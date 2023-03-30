// ex 1
const body = document.querySelector("body");
const inputField = document.createElement("input");
const showButton = document.createElement("button");
showButton.textContent = "button";
body.appendChild(inputField);
body.appendChild(showButton);
showButton.addEventListener("click", function(event) {
    alert(inputField.value);
})
