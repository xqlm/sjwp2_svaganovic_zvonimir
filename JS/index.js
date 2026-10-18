// // zadatak 1
// let n = 10
// for(let i = 1; i<=n; i++){
//     console.log(i)
// }

// // zadatak 2
// let n = Number(prompt("unesi broj n"));
// let zbroj = 0;
// for (var i = 1; i <= n; i++) {
//   zbroj += i;
// }
// console.log(zbroj);

// // zadatak 3
// const ocjene = [4, 5, 3, 4, 2];
// let zbroj = 0;
// let prosjek = 0;
// ocjene.forEach((ocjena) => {
//   zbroj += ocjena;
// });
// console.log(zbroj / ocjene.length);

// // zadatak 4
// let n = Number(prompt("unesi n"))
// for(var i = 1; i <= n; i++){
//     if(i % 2 === 0) console.log(i + " je paran broj");
//     if(i % 2 === 1) console.log(i + " nije paran broj");
// }

// // zadatak 5
// const polje = [12, 7, 25, 4, 19];
// let max = polje[0];
// let min = polje[0];
// polje.forEach((element) => {
//   if (element > max) max = element;
//   if (element < min) min = element;
// });
// console.log(max + " je najveci broj");
// console.log(min + " je najmanji broj");

// // zadatak 6
// const n = Number(prompt("Unesi velicinu polja: "));
// const polje = [];
// for (let i = 0; i < n; i++) {
//     polje[i] = Math.floor(Math.random() * 100);
// }
// alert("Polje: " + polje);
// const broj = Number(prompt("Unesi trazeni broj: "));
// let index = polje.indexOf(broj);
// let found = polje[index];
// index !== -1 ? alert("Broj " + broj + " je pronaden na indexu: " + index) : alert("Broj " + broj + " nije pronaden u polju");

// // zadatak 7
// function isLeapYear(year) {
//     ((year % 4 === 0 && year % 100 !== 0) || (year % 4 === 0 && year % 100 === 0 && year % 400 === 0)) ? console.log("Prijestupna") : console.log("Nije Prijestupna")
// }

// let godina = Number(prompt("Unesi godinu: "));
// isLeapYear(godina);

// // zadatak 8
// function brojacSamoglasnika(str) {
//     const samoglasnici = ['a', 'e', 'i', 'o', 'u'];
//     str = str.toLowerCase();
//     let brojac = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (samoglasnici.includes(str[i])) {
//             brojac++;
//         }
//     }
//     return brojac;
// }
// const unos = prompt("Unesi string: ");
// const rezultat = brojacSamoglasnika(unos);
// console.log("Broj samoglasnika u stringu je: " + rezultat);

// // zadatak 11
// function okreni(polje) {
// 	return polje.reverse();
// }
// const polje = []
// for(let i = 0; i<10; i++) polje[i] = Math.floor(Math.random() * 100);
// console.log(polje);
// okreni(polje)
// console.log(polje);

// // zadatak 13
// let niz = []
// //const phi = (1 + Math.sqrt(5)) / 2;
// function fib(n) {
//     //return Math.round(Math.pow(phi, n) / Math.sqrt(5));
//     if (n === 1) return 1;
//     if (n === 2) return 1;
//     return fib(n - 1) + fib(n - 2);
// }
// let n = Number(prompt("unesi broj"))
// for (let i = 1; i <= n; i++) {
//     niz.push(fib(i))
// }
// console.log(niz);

// zadatak 14

