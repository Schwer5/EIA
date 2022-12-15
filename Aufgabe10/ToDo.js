var todo = [{
        name: 'Putzen'
    },
    {
        name: 'Essen einkaufen'
    },
    { name: 'Freudentanz' }
];
function h2() {
    var ueberschrift = document.querySelector('.anzahl');
    ueberschrift.innerHTML = todo.length + ' in total';
}
h2();
function tabelle() {
    var table = document.querySelector('.todo');
    for (var index = 0; index < todo.length; index++) {
        var machen = document.createElement("div");
        machen.textContent = todo[index].name;
        table.appendChild(machen);
    }
}
tabelle();
