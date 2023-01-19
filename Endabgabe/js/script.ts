
/**
 * Hier erstellen wir ein Interface um die Fragen einzuspeichern
 * mit den Werten:
 *  Fragetyp (type), einen questiontext, eine correctanswer
 * eine wronganswer und einen infotext
 */
interface Question {
    type: string;
    questiontext: string;
    correctanswer: string;
    wronganswers: string[];
    infotext: string;
}

/**
 * Hier erstellen wir Variablen, die wir später benötigen. 
 * correctanswernumber=2 weil:
 * currentpoints=0 weil man bei 0 Punkten anfängt zu zählen.
 * winpoints=2 kann man beliebig einstellen, je nachdem wie viel Punkte man erreichen soll um zu gewinnen.
 * die visiblequestionlist ist die Variable in der eine Frage aus dem Array angezeigt werden soll.
 * Question ist hierbei der Typ des Arrays.
 */
let correctanswernumber: number = 2
let currentpoints: number = 0
let winpoints: number = 2
let visiblequestionlist: Question[] = []


/**
 * Die Fragen werden in dem Array Questionlist gespeichert
 * Frage hat einen Fragetyp (type), einen questiontext, eine correctanswer
 * eine wronganswer und einen infotext
 */
let Questionlist: Question[] = [
    {
        type: "html",
        questiontext: 'Was heißt HTML?',
        correctanswer: 'Hyper Text Markup Language',
        wronganswers: ['Heute tauscht Martin Lampen ', 'Hyper text marketing Language', 'Hyper Text Markup Listener'],
        infotext: 'HTML ist die Sprache des Internets, es wird genutzt um Webseiten ober ähnliches zu erstellen. Schaue hier: https://de.wikipedia.org/wiki/Hypertext_Markup_Language'
    },
    {
        type: "html",
        questiontext: 'Die visuelle Darstellung ist...',
        correctanswer: '...nicht Teil der HTML-Spezifikationen',
        wronganswers: ['...teilweise Teil der HTML-Spezifikationen ', '...Teil der HTML-Spezifikationen', '...großer Teil der HTML-Spezifikationen'],
        infotext: 'Ausnahme sind die als veraltet (englisch deprecated) markierten präsentationsbezogenen Elemente. Schaue hier:https://de.wikipedia.org/wiki/Hypertext_Markup_Language'
    },
    {
        type: "html",
        questiontext: 'Was gehört zu HTML?',
        correctanswer: '&lt;p&gt;',
        wronganswers: ['background-color', 'var', '.addEventListener'],
        infotext: 'Es geht in HTML um beschreibende (englisch descriptive), nicht um verfahrens- (englisch procedural) und darstellungsorientierte (englisch presentational) Textauszeichnung, auch wenn sich HTML in früheren Versionen dafür verwenden ließ. Schaue hier: https://www.w3schools.com/html/html_intro.asp'
    },
    {
        type: "html",
        questiontext: 'HTML ist eine...?',
        correctanswer: 'Auszeichnungssprache',
        wronganswers: ['Programmiersprache', 'Skriptsprache', 'Zeichensprache'],
        infotext: 'Eine Gemeinsamkeit mit den meisten Programmiersprachen ist, dass für die Bearbeitung der Quelldokumente keine spezielle Software (siehe auch Liste von HTML-Editoren) nötig ist, sondern ein beliebiger Texteditor ausreicht. Schaue hier: https...'
    },
    {
        type: "html",
        questiontext: 'Was heißt HTML?',
        correctanswer: 'Hyper Text Markup Language',
        wronganswers: ['Heute tauscht Martin Lampen ', 'Hyper text marketing Language', 'Hyper Text Markup Listener'],
        infotext: 'HTML ist die Sprache des Internets, es wird genutzt um Webseiten ober ähnliches zu erstellen. Schaue hier: https://de.wikipedia.org/wiki/Hypertext_Markup_Language'
    },


    {
        type: "css",
        questiontext: 'CSS ist eine...',
        correctanswer: '...Stylesheet-Sprache',
        wronganswers: ['...Programmiersprache', '...Zeichensprache', '...Skriptsprache'],
        infotext: 'Für elektronische Dokumente und zusammen mit HTML und JavaScript eine der Kernsprachen des World Wide Webs.. Schaue hier:https://de.wikipedia.org/wiki/Cascading_Style_Sheets'
    },
    {
        type: "css",
        questiontext: 'Was heißt CSS?',
        correctanswer: 'Cascading Style Sheets',
        wronganswers: ['coding speed sheets', 'copie styles soon', 'come soon styles'],
        infotext: 'gestufte Gestaltungsbögen. Schaue hier: https://de.wikipedia.org/wiki/Cascading_Style_Sheets'
    },
    {
        type: "css",
        questiontext: 'Kann CSS in Kombination mit HTML genutzt werden?',
        correctanswer: 'Ja',
        wronganswers: ['Kommt drauf an', 'Nein', 'Teilweise'],
        infotext: 'CSS wurde entworfen, um Darstellungsvorgaben weitgehend von den Inhalten zu trennen. Schaue hier: https://de.wikipedia.org/wiki/Cascading_Style_Sheets'
    },
    {
        type: "css",
        questiontext: 'CSS wurde entworfen, um...',
        correctanswer: '... Darstellungsvorgaben weitgehend von den Inhalten zu trennen',
        wronganswers: ['...bessere Analyse-Daten zu erhalten', '...eine weitere Kernsprache damit zu entwickeln'],
        infotext: 'gestufte Gestaltungsbögen. Schaue hier: https://de.wikipedia.org/wiki/Cascading_Style_Sheets'
    },
    {
        type: "css",
        questiontext: 'Kann CSS in Kombination mit HTML genutzt werden?',
        correctanswer: 'Ja',
        wronganswers: ['Kommt drauf an', 'Nein', 'Teilweise'],
        infotext: 'CSS wurde entworfen, um Darstellungsvorgaben weitgehend von den Inhalten zu trennen. Schaue hier: https://de.wikipedia.org/wiki/Cascading_Style_Sheets'
    },



    {
        type: "TypeScript",
        questiontext: 'TypeScript schließt Lücken im Programmierkonzept von JavaScript durch:',
        correctanswer: 'strikte Typisierung',
        wronganswers: ['schnellere Rechenfähigkeit', 'errechnen von Fehlern', 'bessere Leistung'],
        infotext: 'HTML ist die Sprache des Internets, es wird genutzt um Webseiten ober ähnliches zu erstellen. Schaue hier: https://de.wikipedia.org/wiki/Hypertext_Markup_Language'
    },
    {
        type: "TypeScript",
        questiontext: 'Die visuelle Darstellung ist...',
        correctanswer: '...nicht Teil von TypeScript',
        wronganswers: ['...teilweise Teil von TypeScript', '...manchmal Teil von TypeScript', '...ein großer Teil von TypeScript'],
        infotext: 'TypeScript ist eine von Microsoft entwickelte Skriptsprache, die auf den Vorschlägen zum ECMAScript-6-Standard basiert.. Schaue hier:https://de.wikipedia.org/wiki/TypeScript'
    },
    {
        type: "TypeScript",
        questiontext: 'TypeScript erweitert',
        correctanswer: 'JavaScript',
        wronganswers: ['C++', 'Python', 'C#'],
        infotext: 'Erweitert JavaScript zu einer Programmiersprache, die den Anforderungen an eine Hochsprache wie Java oder C++ näher kommen. Schaue hier: https://www.w3schools.com/css/default.asp'
    },
    {
        type: "TypeScript",
        questiontext: 'Welches ist richtig?',
        correctanswer: 'let names: string;',
        wronganswers: ['Let names: string;', 'lets name: string;', 'let age: numbers;'],
        infotext: '1. Schlüsselwort zur Deklaration einer Variable. 2. Bezeichnung. 3. Typ Schaue hier: https://www.w3schools.com/css/default.asp'
    },
    {
        type: "TypeScript",
        questiontext: 'Was passiert hier: 12%5?',
        correctanswer: 'Gibt Restwert zurück, also 2',
        wronganswers: ['Gibt die Zahl an durch die maximal dividiert werden kann an, also 2', 'Dividiert, also 2.4', 'Dividiert 5 durch 12, also ca. 0.416'],
        infotext: 'Wird Modulo genannt. Schaue hier: https://www.tutorialspoint.com/typescript/typescript_operators.htm'
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

    startButtonDOMElement.addEventListener("click", selectquestiontype);

    /**
     * Initial soll einmal die Liste an bereit definierten ToDos
     * aus den Arrays in den DOM gezeichnet werden.
     */
});

/**
 * Hier schaut die Funktion, welcher Fragentyp ausgewählt ist. Dann erstellen wir eine variable die selectedtype heißt, welche 
 * den value, den Wert der Umfrage annimmt welches HTML, CSS oder TypeScript sein könnte. 
 * In der for-Schleife soll nun die Liste hochgezählt werden von 0 an. In der if-Schleife; ob der type der Liste mit dem 
 * vorher definierten selectedtype übereinstimmt. Wenn ja soll die Frage angezeigt werden. Falls der typ 'mixed' ausgewählt 
 * sein sollte, dann sollen alle Fragen aus der Questionlist zur verfügung gestellt werden und keine Spezielle.
 */
function selectquestiontype(): void {
    let selectedradiobutton: HTMLInputElement = document.querySelector('input[name="radio"]:checked') as HTMLInputElement
    let selectedtype: string = selectedradiobutton.value
    let selectedwinpointsradiobutton: HTMLInputElement = document.querySelector('input[name="winpoints"]:checked')
    winpoints = parseInt(selectedwinpointsradiobutton.value)
    let deletewinpointsselection = document.querySelector('.selectwinpoints') as HTMLElement
    deletewinpointsselection.innerHTML = ''
    for (let index = 0; index < Questionlist.length; index++) {
        if (Questionlist[index].type == selectedtype) {
            visiblequestionlist.push(Questionlist[index])
        }
    }
    if (selectedtype == 'mixed') {
        for (let index = 0; index < Questionlist.length; index++) {
            visiblequestionlist.push(Questionlist[index])
        }
    }
    for (let i = visiblequestionlist.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        let temporary = visiblequestionlist[j]
        visiblequestionlist[j] = visiblequestionlist[i]
        visiblequestionlist[i] = temporary
    }
    showquestion()
}

function showquestion(): void {
    let headline = document.querySelector('.headline') as HTMLElement
    headline.innerHTML = ''
    let text = document.querySelector('.text') as HTMLElement
    text.innerHTML = (visiblequestionlist[0].questiontext)
    let selection = document.querySelector('.selection') as HTMLElement
    selection.innerHTML = ''
    let answerlist: string[] = []
    for (let index = 0; index < visiblequestionlist[0].wronganswers.length; index++) {
        answerlist.push(visiblequestionlist[0].wronganswers[index])
    }
    for (let i = answerlist.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        let temporary = answerlist[j]
        answerlist[j] = answerlist[i]
        answerlist[i] = temporary
    }
    correctanswernumber = randomIntFromInterval(0, visiblequestionlist[0].wronganswers.length)
    answerlist.splice(correctanswernumber, 0, visiblequestionlist[0].correctanswer)
    for (let index: number = 0; index < answerlist.length; index++) {
        let answer: HTMLElement = document.createElement('div')
        answer.innerHTML = ' <input type="radio" id="answer-' + index + '" name="radio" value="' + index + '"><label for="answer-' + index + '">' + answerlist[index] + '</label>'
        selection.appendChild(answer)
    }

    let button = document.querySelector('.button') as HTMLElement
    button.innerHTML = ''
    button.innerHTML = '<button id="btn-start">Antworten</button>'
    let innerbutton = document.querySelector('#btn-start')
    innerbutton.addEventListener('click', checkanswer)
    updateCounter()
}

function checkanswer(): void {
    let selectedradiobutton: HTMLInputElement = document.querySelector('input[name="radio"]:checked') as HTMLInputElement
    let selectedanswer = parseInt(selectedradiobutton.value)
    let headline = document.querySelector('.headline') as HTMLElement
    if (selectedanswer == correctanswernumber) {

        headline.innerHTML = 'Deine Antwort war richtig!'
        currentpoints++
        updateCounter()
    } else {
        headline.innerHTML = '<div style="background-color:red">Deine Antwort war leider falsch.</div>'
        visiblequestionlist.push(visiblequestionlist[0])
    }
    visiblequestionlist.splice(0, 1)
    if (currentpoints >= winpoints) {
        showwinscreen()
    } else {
        showcorrection()
    }
}

function updateCounter(): void {
    let points = document.querySelector('.points') as HTMLElement
    points.innerHTML = 'Punktestand: ' + currentpoints + ' / ' + winpoints
}


function showcorrection(): void {

    let text = document.querySelector('.text') as HTMLElement
    text.innerHTML = visiblequestionlist[0].infotext
    let selection = document.querySelector('.selection') as HTMLElement
    selection.innerHTML = ''
    let button = document.querySelector('.button') as HTMLElement
    button.innerHTML = ''
    button.innerHTML = '<button id="btn-start">Weiter</button>'
    let innerbutton = document.querySelector('#btn-start')
    innerbutton.addEventListener('click', showquestion)
}

function randomIntFromInterval(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function showwinscreen(): void {
    let headline = document.querySelector('.headline')
    headline.innerHTML = 'Du hast ' + winpoints + ' richtig beantwortet.'
    let text = document.querySelector('.text') as HTMLElement
    text.innerHTML = 'Herzlichen Glückwunsch!'
    let selection = document.querySelector('.selection') as HTMLElement
    selection.innerHTML = 'Möchtest Du nochmal eine Runde üben?'
    let button = document.querySelector('.button') as HTMLElement
    button.innerHTML = ''
    button.innerHTML = '<button id="btn-start">Ja</button>'
    let innerbutton = document.querySelector('#btn-start')
    innerbutton.addEventListener('click', function () { history.go(0) })
}