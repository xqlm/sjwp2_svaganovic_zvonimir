const input = document.querySelector("#entLetters");
const result = document.querySelector(".result");
input.addEventListener("input", function () {
    let counter = input.value.length;
    DisplayResult(counter);
});

function DisplayResult(number) {
    result.textContent = "Letter count: " + number;
}