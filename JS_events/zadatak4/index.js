import {Proizvod} from "./models/proizvod.js";

const proizvodi = [
    new Proizvod("msi monitor", 199, "racunalna oprema", "na stanju"),
    new Proizvod("logitech tipkovnica", 89, "racunalna oprema", "na stanju"),
    new Proizvod("sony slusalice", 149, "audio oprema", "na stanju"),
    new Proizvod("samsung mobitel", 699, "mobilni uredaji", "nema na stanju"),
    new Proizvod("lg televizor", 499, "televizori", "na stanju"),
    new Proizvod("canon printer", 129, "uredska oprema", "na stanju"),
    new Proizvod("sandisk usb memorija", 39, "racunalna oprema", "na stanju"),
    new Proizvod("jbl zvucnik", 49, "audio oprema", "na stanju"),
    new Proizvod("lenovo mis", 29, "racunalna oprema", "nema na stanju")
];

const container = document.getElementById("proizvodi");

if (proizvodi.length === 0) {
    container.innerHTML = `<p class="prazno-stanje">Nema dostupnih proizvoda.</p>`;
} else {
    display(proizvodi);
}

function display(proizvodi) {
    container.innerHTML = proizvodi.map(p => `
            <article class="kartica">
                <div class="kartica-meta">
                    <span class="kartica-kategorija">${p.kategorija}</span>
                    <span class="kartica-stanje ${p.stanjeZalihe === "nema na stanju" ? "nedostupno" : ""}">
                        <span class="status-dot" aria-hidden="true"></span>
                        ${p.stanjeZalihe}
                    </span>
                </div>
                <h2 class="kartica-naziv">${p.naziv}</h2>
                <div class="kartica-footer">
                    <span class="cijena-label">Cijena</span>
                    <div class="cijena">${p.cijena} €</div>
                </div>
            </article>
        `).join("");
}

const combobox = document.getElementById("combo-box");
combobox.addEventListener("change", (event) => {
    let value = event.target.value;
    filter(value);
});

function filter(value) {
    switch (value) {
        case "SkupljeOd50":
            display(proizvodi.filter(p => p.cijena >= 50))
            break;
        case "Racunalna-Oprema":
            display(proizvodi.filter(p => p.kategorija === "racunalna oprema"))
            break;
        default:
            display(proizvodi);
            break;
    }
}

const samoNazivi = document.getElementById("samo-nazivi");
let nazivi = proizvodi.map(p => p.naziv);

samoNazivi.textContent = nazivi.join(", ");