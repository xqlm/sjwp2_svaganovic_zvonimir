/**
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
export function add(a, b) {
    return a + b;
}

/**
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
export function subtract(a, b) {
    return a - b;
}

/**
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
export function multiply(a, b) {
    return a * b;
}

/**
 * @param {number} a
 * @param {number} b
 * @returns {number|string}
 */
export function divide(a, b) {
    if(b === 0){
        console.log("divbyzero error");
        return "Math Error";
    }
    return a / b;
}