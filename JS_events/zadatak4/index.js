import {Proizvod} from "./models/proizvod.js"

const proizvodi = [
    new Proizvod("msi monitor", "199", "racunalna oprema", "na stanju"),
    new Proizvod("logitech tipkovnica", "89", "racunalna oprema", "na stanju"),
    new Proizvod("sony slusalice", "149", "audio oprema", "na stanju"),
    new Proizvod("samsung mobitel", "699", "mobilni uredaji", "nema na stanju"),
    new Proizvod("lg televizor", "499", "televizori", "na stanju"),
    new Proizvod("canon printer", "129", "uredska oprema", "na stanju")
]

const proizvodContainer = document.getElementById("proizvodi");

proizvodi.forEach(proizvod => {
    const kartica = document.createElement("article");
    kartica.className = "kartica";

    const naziv = document.createElement("h2");
    naziv.textContent = proizvod.naziv;

    const kategorija = document.createElement("p");
    kategorija.innerHTML = `<strong>Kategorija:</strong> ${proizvod.kategorija}`;

    const cijena = document.createElement("div");
    cijena.className = "cijena";
    cijena.textContent = `${proizvod.cijena} €`;

    const stanje = document.createElement("span");
    stanje.className = "stanje";
    if (proizvod.stanjeZalihe === "nema na stanju") {
        stanje.classList.add("nema-zalihe");
    }
    stanje.textContent = proizvod.stanjeZalihe;

    kartica.append(naziv, kategorija, cijena, stanje);
    proizvodContainer.appendChild(kartica);
});
