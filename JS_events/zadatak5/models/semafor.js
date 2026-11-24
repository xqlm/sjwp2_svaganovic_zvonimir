export class Semafor {
  constructor(boja, trajanje, ukljucen) {
    this.boja = boja;
    this.trajanje = trajanje;
    this.ukljucen = ukljucen;
  }

  promjeniBoju(novaBoja) {
    if (!this.ukljucen) {
        const message = "Nije moguće promjeniti boju dok je semafor isključen";
        console.log(message);
        alert(message);
        return false;
    }
    this.boja = novaBoja;
    return true;
  }
  ukljuci() {
    this.ukljucen = true;
  }
  iskljuci() {
    this.ukljucen = false;
  }
  prikaziStanje() {
    console.log(`Boja: ${this.boja}, Trajanje: ${this.trajanje}, Uključen: ${this.ukljucen}`);
  }
}
