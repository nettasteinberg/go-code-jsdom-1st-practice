const body = document.querySelector("body");
body.style.height = "1000px";
const colors = ["black", "green", "red", "blue"];
colors.forEach(color => {
    const button = document.createElement("button");
    button.textContent = color;
    button.addEventListener("click", function(event) {
        body.style.backgroundColor = color;
    })
    body.appendChild(button);    
});