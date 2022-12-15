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

for (let index: number = 0; index < todo.length; index++) {
    console.log(todo[index].name)
}

