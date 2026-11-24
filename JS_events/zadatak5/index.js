import { Semafor } from "./models/semafor.js";

const semafor = new Semafor("Zelena", 1000, true);

const boje = document.querySelector("#boje");
boje.addEventListener("change", function (){
    if (semafor.ukljucen !== true) {
        const poruka = "semafor ne radi";
        console.log(poruka);
        alert(poruka);
        boje.value = semafor.boja;
        return;
    }
    const newValue = boje.value;
    const result = semafor.promjeniBoju(newValue);  
    if (result !== true) {
        boje.value = "";
    }
    else toggleColor(semafor.boja);
})

const toggleBtn = document.querySelector(".toggle-btn");
const red = document.querySelector(".red");
const yellow = document.querySelector(".yellow");
const green = document.querySelector(".green");

semafor.ukljucen ? ukljuci() : iskljuci();
boje.value = semafor.boja;

toggleBtn.addEventListener("click", function () {
    if (semafor.ukljucen){
        iskljuci();
        semafor.iskljuci();
    } 
    else {
        ukljuci();
        semafor.ukljuci();
    }
    
})

function ukljuci() {
    toggleBtn.textContent = "Isključi";
    toggleColor(semafor.boja);
}
function iskljuci() {
    toggleBtn.textContent = "Uključi";
    
    red.classList.add("off");
    yellow.classList.add("off");
    green.classList.add("off");
}

function toggleColor(boja) {
    switch (boja) {
        case "Crvena":
            red.classList.remove("off");
            yellow.classList.add("off");
            green.classList.add("off");
            break;
        case "Žuta":
            red.classList.add("off");
            yellow.classList.remove("off");
            green.classList.add("off");
            break;
        case "Zelena":
            red.classList.add("off");
            yellow.classList.add("off");
            green.classList.remove("off");
            break;
    
        default:
            console.log("def case hit");
            alert("zadana boja ne postoji. promjenite boju");
            break;
    }
}