interface ToDo {
    name: string;
}

let todo: ToDo[] = [{
    name: 'Putzen'
},
{
    name: 'Essen einkaufen'
},
{ name: 'Freudentanz' }
]




function h2() {
    const ueberschrift = document.querySelector('.anzahl') as HTMLHeadingElement
    ueberschrift.innerHTML = todo.length + ' in total'
}

h2()

function tabelle() {
    const table = document.querySelector('.todo') as HTMLHeadingElement
    for (let index: number = 0; index < todo.length; index++) {
        const machen = document.createElement("div")
        machen.textContent = todo[index].name;
        table.appendChild(machen)
    }
}

tabelle()
