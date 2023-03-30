const arr = [1,2,3,4,5,6,7,8,9];
console.log(arr);
const body = document.querySelector("body");
const button = document.createElement("button");
button.textContent = "Remove";
body.appendChild(button);
button.addEventListener("click", () => {
    arr.pop();
    console.log(arr);
});
