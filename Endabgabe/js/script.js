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
var correctanswernumber = 2;
var visiblequestionlist = [];
var Questionlist = [
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
        correctanswer: '<p>',
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
        wronganswers: ['...bessere Analyse-Daten zu erhalten', '...eine weitere Kernsprache damit zu entwickeln', '...'],
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
];
/**
 * Die Anwendung wird immer wieder auf die selben
 * DOM-Elemente zugreifen müssen. Damit diese Elemente nicht
 * jedes mal neu selektiert werden müssen, werden hier
 * Variablen deklariert, die später die entsprechenden DOM-Elemente
 * speichern.
 */
var startButtonDOMElement;
/**
 * Sobald der DOM geladen wurde können grundlegende DOM-Interaktionen
 * initialisiert werden
 */
window.addEventListener("load", function () {
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
function selectquestiontype() {
    var selectedradiobutton = document.querySelector('input[name="radio"]:checked');
    var selectedtype = selectedradiobutton.value;
    console.log(selectedradiobutton);
    for (var index = 0; index < Questionlist.length; index++) {
        if (Questionlist[index].type == selectedtype) {
            visiblequestionlist.push(Questionlist[index]);
        }
    }
    if (selectedtype == 'mixed') {
        visiblequestionlist = Questionlist;
    }
    showquestion();
}
function showquestion() {
    var text = document.querySelector('.text');
    text.innerHTML = (visiblequestionlist[0].questiontext);
    var selection = document.querySelector('.selection');
    selection.innerHTML = '';
    var answerlist = visiblequestionlist[0].wronganswers;
    answerlist.splice(correctanswernumber, 0, visiblequestionlist[0].correctanswer);
    console.log(answerlist);
    for (var index = 0; index < answerlist.length; index++) {
        var answer = document.createElement('div');
        answer.innerHTML = ' <input type="radio" id="answer-' + index + '" name="radio" value="' + index + '"><label for="answer-' + index + '">' + answerlist[index] + '</label>';
        selection.appendChild(answer);
    }
    var button = document.querySelector('.button');
    button.innerHTML = '';
    button.innerHTML = '<button id="btn-start">Antworten</button>';
    var innerbutton = document.querySelector('#btn-start');
    innerbutton.addEventListener('click', checkanswer);
}
function checkanswer() {
    var selectedradiobutton = document.querySelector('input[name="radio"]:checked');
    var selectedanswer = parseInt(selectedradiobutton.value);
    var headline = document.querySelector('.headline');
    if (selectedanswer == correctanswernumber) {
        visiblequestionlist.splice(0, 1);
        headline.innerHTML = 'Deine Antwort war richtig!';
    }
    else {
        headline.innerHTML = 'Deine Antwort war leider falsch.';
    }
    showcorrection();
}
function showcorrection() {
    var text = document.querySelector('.text');
    text.innerHTML = visiblequestionlist[0].infotext;
    var selection = document.querySelector('.selection');
    selection.innerHTML = '';
    var button = document.querySelector('.button');
    button.innerHTML = '';
    button.innerHTML = '<button id="btn-start">Weiter</button>';
    var innerbutton = document.querySelector('#btn-start');
    innerbutton.addEventListener('click', showquestion);
}
