import * as funcs from "./functions.js";

const entPrvi = document.getElementById("entPrvi");
const entDrugi = document.getElementById("entDrugi");
const btnIzracunaj = document.getElementById("btnIzracunaj");
const selectOp = document.getElementById("operacije");
const rezultat = document.getElementById("rezultat");

btnIzracunaj.addEventListener("click", OnButtonPressed);

function OnButtonPressed() {
    let a = Number(entPrvi.value);
    let b = Number(entDrugi.value);
    
    let operacija = getOp(selectOp.value);
    execute(a, b, operacija);
}

/**
 * @param {string} value
 * @returns {number}
 */
function getOp(value) {
    const operations = new Map([
        ["plus", funcs.add],
        ["minus", funcs.subtract],
        ["puta", funcs.multiply],
        ["podjeljeno", funcs.divide]
    ]);
    
    return operations.get(value);
}

/**
 * @param {number} a
 * @param {number} b
 * @param {(a: number, b: number) => number} operacija
 */
function execute(a, b, operacija) {
    rezultat.textContent = operacija(a,b);
}