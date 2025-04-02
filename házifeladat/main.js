let név1 = "Kristóf"
console.log(név1);


let név2 = "Ádám"
console.log(név2);

const PI = 3.14159;
console.log(PI);

let köszönés = "Üdvözöllek"
console.log(köszönés);

let egész = 23;
console.log(egész);

let tizedes = 3.14159;
console.log(tizedes);

let vanjogsija = true;
console.log(vanjogsija);

let tudvezetni = false;
console.log(tudvezetni);

let person = {
    név: "László",
    kor: 68,
    lakhely: "Győr"
};
console.log(person);

let első = 1;
let második;
console.log(első);
console.log(második);

let a = 100;
let b = 54.23;
let c = 0.004;
let d = -5;

let eredmény1 = a + b
console.log(eredmény1);

let eredmény2 = c - d;
console.log(eredmény2);

let eredmény3 = a * d;
console.log(eredmény3);

let eredmény4 = b / a;
console.log(eredmény4);

let eredmény5 = a + b + (c * d / a) * a / b + (c * 2 * a) * 100;
console.log(eredmény5);

alert('Hello hello szép napot ' + név1);

let username = prompt('Szia, mi a neved?');
alert('Üdvözöllek ' + username);

let age = prompt('Szia hány éves vagy?');
if (parseInt(age) > 18) {
    alert("jó munkát kívánok!");
} else {
    alert("jó tanulást kívánok!");
}

let életkor = prompt("Hány éves is vagy?");
if (parseInt(életkor) > 18) {
    alert("Okés jogosult vagy!");
} else {
    alert("Sajnos még nem szabad ezt Neked!")
}

let idos = prompt("mennyi idos is vagy te?");
if (parseInt(idos) > 18) {
    console.log('Oké jöhetsz');
} else {
    console.log('bocsika most még nem');
}

let szam1 = 34;
let szam2 = 89;
let osszeg = szam1 + szam2;
console.log(osszeg);