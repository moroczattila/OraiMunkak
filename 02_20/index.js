var vezeteknev = "Kovács "
var lany1 = "Anna"
var lany2 = "Panna"
var lany3 = "Hanna"

var kutya1 = "Dolly"
var kutya2 = "Molly"
var kutya3 = "Fred"

var cica1 = "Samu"
var cica2 = "Alfréd"
//------------------------------------
console.log(`${lany1} kutyája ${kutya1}`)
console.log(`${lany2} kutyája ${kutya2}`)
console.log(`${lany3} kutyája ${kutya3}`)

var kutya1 = 1;
var kutya2 = 1;
var kutya3 = 1;
var cica1 = 1;
var cica2 = 1;

console.log(kutya1 + kutya2 + kutya3 + cica1 + cica2);

console.log(vezeteknev + lany1)
console.log(vezeteknev + lany2)
console.log(vezeteknev + lany3)

console.log(`Kovács lányok állatainak száma: ${kutya1 + kutya2 + kutya3 + cica1 + cica2}`)
//-----------------------------------------------

let a = 3
let b = 4
let c = 5

let x = 25;
let y = 45;


console.log(a + b + c)
console.log()
console.log(180 - x - y)


console.log("------")

//készíts egy függvényt ahol a köv. állítások igazak:
//adott egy osztály 22 fő - 10 fiú 12 lány
//5 fiú focizik, 3 kosarazik, 10 lány szurkoló, 2 matek szakos
//feladat: írd ki DOM html p-tag közé hány lány ment el focimeccsre, ha csak szurkoló lányok fele ment el + matek szakos lányok közül 1 fő.
//ha a srácok 10 pontot dobnak a meccsen, akkor írja ki a tábla, hogy gratulálok!
//ha 5 pontot akkor HÚÚÚÚ!
//ha a focista srácok gólt lőnek akkor a szurkoló lányok "ÚÚÚ"
//ha gólt kapnak akkor "ÁÁÁ"

let szurkolo = 10
let matekos = 2

var message = "Meccsre elment: ";
var messageBox = document.getElementById('message');

