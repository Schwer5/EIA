var todo = [
    {
        name: 'Putzen'
    },
    {
        name: 'Essen einkaufen'
    },
    {
        name: 'Freudentanz'
    }
];
function h2() {
    var ueberschrift = document.querySelector('.anzahl');
    var anzahl = document.querySelectorAll('li').length;
    ueberschrift.innerHTML = anzahl + ' in total';
}
function tabelle() {
    for (var index = 0; index < todo.length; index++) {
        tabelleadd(todo[index]);
    }
}
function eingabe(eintippen) {
    var newtodo = { name: eintippen };
    todo.push(newtodo);
    tabelleadd(newtodo);
}
function tabelleadd(addtodo) {
    var table = document.querySelector('.todo');
    var machen = document.createElement("li");
    var checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    var muell = document.createElement('i');
    muell.addEventListener('click', function () { muell.parentElement.remove(); h2(); });
    muell.classList.add('fa-trash');
    muell.classList.add('fa-5x');
    muell.classList.add('fas');
    machen.appendChild(checkbox);
    machen.append(addtodo.name);
    machen.appendChild(muell);
    table.appendChild(machen);
    h2();
}
tabelle();
var textinput = document.getElementById('neuetodoeinfuegen');
var form = document.querySelector('.inputform');
form.addEventListener('submit', function () { eingabe(textinput.value); });
