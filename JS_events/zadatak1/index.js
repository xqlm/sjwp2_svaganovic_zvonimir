const p = document.getElementById("p");
const minus = document.getElementById("minus");
const reset = document.getElementById("reset");
const plus = document.getElementById("plus");

var brojac = 0;
p.textContent = brojac;

function subtract() {
  brojac -= 1;
  p.textContent = brojac;
}
minus.addEventListener("click", subtract);

function Reset() {
  brojac = 0;
  p.textContent = brojac;
}
reset.addEventListener("click", Reset);

function add() {
  brojac += 1;
  p.textContent = brojac;
}
plus.addEventListener("click", add);
