interface ToDo {
    name: string;
}

let todo: ToDo[] = [
    {
        name: 'Putzen'
    },
    {
        name: 'Essen einkaufen'
    },
    {
        name: 'Freudentanz'
    }
]




function h2() {
    const ueberschrift = document.querySelector('.anzahl') as HTMLHeadingElement
    let anzahl = document.querySelectorAll('li').length
    ueberschrift.innerHTML = anzahl + ' in total'
}


function tabelle() {
    for (let index: number = 0; index < todo.length; index++) {
        tabelleadd(todo[index])
    }
}

function eingabe(eintippen: string) {
    let newtodo: ToDo = { name: eintippen }
    todo.push(newtodo)
    tabelleadd(newtodo)
}

function tabelleadd(addtodo: ToDo) {
    const table = document.querySelector('.todo') as HTMLHeadingElement
    const machen = document.createElement("li")
    
    let checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    let muell = document.createElement('i')
    muell.addEventListener('click', function () { muell.parentElement.remove(); h2() })
    muell.classList.add('fa-trash')
    muell.classList.add('fa-5x')
    muell.classList.add('fas')
    machen.appendChild(checkbox)
    machen.append( addtodo.name)
    machen.appendChild(muell)
    table.appendChild(machen)
    h2()
}

tabelle()

const textinput = document.getElementById('neuetodoeinfuegen') as HTMLInputElement
const form = document.querySelector('.inputform') as HTMLFormElement
form.addEventListener('submit', function () { eingabe(textinput.value) })