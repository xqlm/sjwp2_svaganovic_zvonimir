const btn = document.querySelector(".btn");
const wrapper = document.querySelector(".wrapper");

btn.addEventListener("click", function () {
    let generatedJson = generateRGB();
    changeBgColor(generatedJson);
})

function generateRGB() {
    return JSON.stringify({
        red : Math.floor(Math.random() * 256),
        green : Math.floor(Math.random() * 256),
        blue : Math.floor(Math.random() * 256)
    });
}

function changeBgColor(RgbJson) {
    const rgbValues = JSON.parse(RgbJson);
    wrapper.style.cssText = `background-color: rgb(${rgbValues.red} ${rgbValues.green} ${rgbValues.blue});`
}