const deutschland2012 = 80.52
const deutschland2021 = 83.24

const oesterreich2012 = 8.41
const oesterreich2021 = 8.93

const belgien2012 = 11.11
const belgien2021 = 11.59

const bulgarien2012 = 7.31
const bulgarien2021 = 6.9

const EU = 447.7

console.log(deutschland2021 + "Mio")
let vergleichswertdeutschland = deutschland2021 * 100 / EU
console.log(vergleichswertdeutschland + " %")
let wachstumsraterelativdeutschland = (deutschland2021 * 100 / deutschland2012) - 100
console.log(wachstumsraterelativdeutschland + " %")
let wachstumsrategesamtdeutschland = deutschland2021 - deutschland2012
console.log(wachstumsrategesamtdeutschland + " Mio")

console.log(oesterreich2021 + "Mio")
let vergleichswertoesterreich = oesterreich2021 * 100 / EU
console.log(vergleichswertoesterreich + " %")
let wachstumsraterelativoesterreich = (oesterreich2021 * 100 / oesterreich2012) - 100
console.log(wachstumsraterelativoesterreich + " %")
let wachstumsrategesamtoesterreich = oesterreich2021 - oesterreich2012
console.log(wachstumsrategesamtoesterreich + " Mio")

console.log(belgien2021 + "Mio")
let vergleichswertbelgien = belgien2021 * 100 / EU
console.log(vergleichswertbelgien + " %")
let wachstumsraterelativbelgien = (belgien2021 * 100 / belgien2012) - 100
console.log(wachstumsraterelativbelgien + " %")
let wachstumsrategesamtbelgien = belgien2021 - belgien2012
console.log(wachstumsrategesamtbelgien + " Mio")

console.log(bulgarien2021 + "Mio")
let vergleichswertbulgarien = bulgarien2021 * 100 / EU
console.log(vergleichswertbulgarien + " %")
let wachstumsraterelativbulgarien = (bulgarien2021 * 100 / bulgarien2012) - 100
console.log(wachstumsraterelativbulgarien + " %")
let wachstumsrategesamtbulgarien = bulgarien2021 - bulgarien2012
console.log(wachstumsrategesamtbulgarien + " Mio")

function Heading(land: string, Einwohnerzahl: number, vergleichswert: number, wachstumsrate: number, wachstumsrateges: number, tausch: string) {
    const ueberschrift = document.querySelector('.ueberschrift') as HTMLHeadingElement
    ueberschrift.innerHTML = "Einwohnerzahl " + land

    const Einwohner = document.querySelector('.Einwohnerzahl') as HTMLHeadingElement
    Einwohner.innerHTML = Einwohnerzahl + ' Mio'

    const Prozent = document.querySelector('.Prozentrelativ') as HTMLHeadingElement
    Prozent.innerHTML = vergleichswert + ' %'

    const Wachstumsraterel = document.querySelector('.Wachstumsraterelativ') as HTMLHeadingElement
    Wachstumsraterel.innerHTML = wachstumsrate + ' %'

    const Wachstumgsrategesmt = document.querySelector ('.Wachstumsrategesamt') as HTMLHeadingElement
    Wachstumgsrategesmt.innerHTML = wachstumsrateges + ' Mio'

    const landwechsel = document.querySelector('.Laendertausch') as HTMLHeadingElement
    landwechsel.innerHTML = 'Gesamtzahl Einwohnerinnen und Einwohner in ' + tausch + ' in 2021'
}

const deutschland = document.querySelector('.germany') as HTMLImageElement
deutschland.addEventListener('click', function () { Heading('Deutschland', deutschland2021, vergleichswertdeutschland, wachstumsraterelativdeutschland, wachstumsrategesamtdeutschland, 'Deutschland') });


const oesterreich = document.querySelector('.austria') as HTMLImageElement
oesterreich.addEventListener('click', function () { Heading('Österreich', oesterreich2021, vergleichswertoesterreich, wachstumsraterelativoesterreich, wachstumsrategesamtoesterreich, 'Österreich') });

const belgien = document.querySelector('.belgium') as HTMLImageElement
belgien.addEventListener('click', function () { Heading('Belgien', belgien2021, vergleichswertbelgien, wachstumsraterelativbelgien, wachstumsrategesamtbelgien, 'Belgien') });

const bulgarien = document.querySelector('.bulgaria') as HTMLImageElement
bulgarien.addEventListener('click', function () { Heading('Bulgarien', bulgarien2021, vergleichswertbulgarien, wachstumsraterelativbulgarien, wachstumsrategesamtbulgarien, 'Bulgarien') });

