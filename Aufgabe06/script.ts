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
let vergleichswert = deutschland2021 * 100 / EU + "%"
let Wachstumsraterelativ = (deutschland2021 * 100 / deutschland2012) - 100 + "%"
let Wachstumsrategesamt = deutschland2021 - deutschland2012 + "Mio"

console.log(oesterreich2021 + "Mio")
let vergleichswert1 = oesterreich2021 * 100 / EU
let Wachstumsraterelativ1 = (oesterreich2021 * 100 / oesterreich2012) - 100
let Wachstumsrategesamt1 = oesterreich2021 - oesterreich2012

console.log(belgien2021 + "Mio")
let vergleichswert2 = belgien2021 * 100 / EU
let Wachstumsraterelativ2 = (belgien2021 * 100 / belgien2012) - 100
let Wachstumsrategesamt2 = belgien2021 - belgien2012

console.log(bulgarien2021 + "Mio")
let vergleichswert3 = bulgarien2021 * 100 / EU
let Wachstumsraterelativ3 = (bulgarien2021 * 100 / bulgarien2012) - 100
let Wachstumsrategesamt3 = bulgarien2021 - bulgarien2012
