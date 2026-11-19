const poruka = document.getElementById("poruka");
const entIme = document.getElementById("name");

document.addEventListener("keydown", function (event) {
    if (document.activeElement !== entIme){
        return;
    }

    if (event.key === "Enter"){
        poruka.textContent = "Potvrđeno";
    }
    if (event.key === "Escape") {
        poruka.textContent = "";
        entIme.value = "";
    }
})