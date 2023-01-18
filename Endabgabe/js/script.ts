/**
 * Die ToDos werden in dem Array todosText gespeichert
 * Jedes ToDo hat aber, neben dem ToDo-Text, einen zweiten
 * Wert, nämlich ob es erledigt ist oder nicht
 * (checked / unchecked). Der Einsatz von einem eindimensionalen
 * Array ermöglicht aber nur, dass wir ein Wert nach dem anderen auflisten.
 * Den zweiten Wert zu einem ToDo speichern wir also in einem
 * zweiten Array. Beide Arrays beinhalten also Infos zu einem ToDo,
 * den ToDo-Text und den Erledigtstatus eines ToDos. Die entsprechende
 * Stelle eines ToDos zeigt jetzt in den Arrays auf die entsprechenden
 * Werte, bspw. Stelle 0 im Array todosText und Stelle 0 im Array
 * todosChecked gehören zusammen zu einem ToDo.
 */

interface Question {
    type: string;
    questiontext: string;
    correctanswer: string;
    wronganswers: string[];
    infotext: string;
}
let visiblequestionlist: Question[]=[]
let Questionlist: Question[] = [
    {
        type: "html",
        questiontext: 'Was heißt HTML?',
        correctanswer: 'Hyper Text Markup Language',
        wronganswers: ['Falsche Antwort 1 ', 'Falsche Antwort 2', 'Falsche Antwort 3'],
        infotext: 'HTML ist die Sprache des Internets, es wird genutzt um Webseiten ober ähnliches zu erstellen. Schaue hier: https...'
    },
    {
        type: "css",
        questiontext: 'Was heißt CSS?',
        correctanswer: 'Hyper Text Markup Language',
        wronganswers: ['Falsche Antwort 1 ', 'Falsche Antwort 2', 'Falsche Antwort 3'],
        infotext: 'HTML ist die Sprache des Internets, es wird genutzt um Webseiten ober ähnliches zu erstellen. Schaue hier: https...'
    },
    {
        type: "TypeScript",
        questiontext: 'Was ist TypeScript?',
        correctanswer: 'Blablabla richtig',
        wronganswers: ['Falsche Antwort 1 ', 'Falsche Antwort 2', 'Falsche Antwort 3'],
        infotext: 'TypeScript ist die Sprache des Internets, es wird genutzt um Webseiten ober ähnliches zu erstellen. Schaue hier: https...'
    },
]

/**
 * Die Anwendung wird immer wieder auf die selben
 * DOM-Elemente zugreifen müssen. Damit diese Elemente nicht 
 * jedes mal neu selektiert werden müssen, werden hier
 * Variablen deklariert, die später die entsprechenden DOM-Elemente
 * speichern.
 */

var startButtonDOMElement: HTMLElement;


/**
 * Sobald der DOM geladen wurde können grundlegende DOM-Interaktionen
 * initialisiert werden
 */
window.addEventListener("load", function (): void {

    /**
     * Jetzt da der DOM verfügbar ist können die wichtigsten Elemente
     * in ihre Variablen gespeichert werden, um später auf sie 
     * zugreifen zu können
     */
   
    startButtonDOMElement = document.querySelector("#btn-start");
    

    /**
     * Jetzt da der DOM verfügbar ist kann auch ein Event-Listener
     * auf den AddToDo Button gesetzt werden.
     */
    
    startButtonDOMElement.addEventListener("click",selectquestiontype);

    /**
     * Initial soll einmal die Liste an bereit definierten ToDos
     * aus den Arrays in den DOM gezeichnet werden.
     */
  
});
function selectquestiontype(): void {
    var selectedradiobutton: HTMLInputElement = document.querySelector('input[name="radio"]:checked') as HTMLInputElement
    var selectedtype= selectedradiobutton.value 
    
    for (let index = 0; index<Questionlist.length; index++){
        if (Questionlist[index].type==selectedtype){
            visiblequestionlist.push(Questionlist[index])
        }
    }
    if (selectedtype=='mixed'){
        visiblequestionlist=Questionlist
    }
    let text = document.querySelector('.text') as HTMLHeadingElement
    text.innerHTML = (visiblequestionlist[0].questiontext)
}



