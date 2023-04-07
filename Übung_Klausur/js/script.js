document.querySelector('button').addEventListener('click', function () { Additionvon2Zahlen(7, 8); });
function Additionvon2Zahlen(Number1, Number2) {
    var result = Number1 + Number2;
    console.log(result);
    document.querySelector('h3').innerHTML = 'das ergebnis ist' + result;
}
