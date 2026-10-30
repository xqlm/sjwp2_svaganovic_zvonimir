const btn = document.querySelector("button")
const p = document.querySelector("p")

let i = 0;
let threshold = 10;

function func() {
    i++;
    p.textContent = i;
    if (i >= threshold) {
        btn.style.background = "green"
        btn.style.color = "white"
    }
}

btn.onclick = func