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


function tabelle() {
    
    for (let index: number = 0; index < todo.length; index++) {
        tabelleadd(todo[index].name)
    }
}

function eingabe(eintippen: string) {
    let newtodo: ToDo = { name: eintippen }
    todo.push(newtodo)
    tabelleadd (newtodo.name)
}

function tabelleadd(addstring: string){
    const table = document.querySelector('.todo') as HTMLHeadingElement
    const machen = document.createElement("li")
    machen.textContent = addstring;
    let checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    let muell = document.createElement('i')
    muell.addEventListener('click', function(){muell.parentElement.remove()})
    muell.classList.add('fa-trash')
    muell.classList.add('fas')
    machen.appendChild(checkbox)
    machen.appendChild(muell)
    table.appendChild(machen)

}

h2()
tabelle()

const textinput = document.getElementById('neuetodoeinfuegen') as HTMLInputElement
const form = document.querySelector('.inputform') as HTMLFormElement
form.addEventListener('submit', function () {eingabe(textinput.value) })