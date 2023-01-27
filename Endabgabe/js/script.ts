
/**
 * Hier erstellen wir ein Interface um die Fragen einzuspeichern
 * mit den Werten:
 * Fragetyp (type), einen Fragetext (questiontext), die richtige Antwort (correctanswer)
 * ein Array mit falschen Antworten (wronganswers) und einen Infotext (infotext)
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
 * correctanswernumber=0, diese speichert die Stelle an der die richtige Antwort der aktuellen Frage ist.
 * currentpoints=0 diese speichert die Anzahl der richtig beantworteten Fragen. Bei 0 fängt man an zu zählen.
 * winpoints=0 speichert Anzahl der Punkte die benötigt wird um zu gewinnen.ählen. Schwierigkeit ist leicht, mittel, schwer entspricht 3,5,7.
 * Die visiblequestionlist ist ein Array das alle Fragen enthält, die angezeigt werden sollen.
 * Question ist hierbei der Typ des Arrays.
 */
let correctanswernumber: number = 0
let currentpoints: number = 0
let winpoints: number = 0
let visiblequestionlist: Question[] = []


/**
 * Alle Fragen sind in dem Array Questionlist gespeichert.
 */
let Questionlist: Question[] = [
    {
        type: "html",
        questiontext: 'Was heißt HTML?',
        correctanswer: 'Hyper Text Markup Language',
        wronganswers: ['Heute tauscht Martin Lampen ', 'Hyper text marketing Language', 'Hyper Text Markup Listener'],
        infotext: 'HTML ist die Sprache des Internets, es wird genutzt um Webseiten ober ähnliches zu erstellen. Schaue hier:<a href ="https://de.wikipedia.org/wiki/Hypertext_Markup_Language"target="_blank">nachlesen</a>'
    },
    {
        type: "html",
        questiontext: 'Die visuelle Darstellung ist...',
        correctanswer: '...nicht Teil der HTML-Spezifikationen',
        wronganswers: ['...teilweise Teil der HTML-Spezifikationen ', '...Teil der HTML-Spezifikationen', '...großer Teil der HTML-Spezifikationen'],
        infotext: 'Ausnahme sind die als veraltet (englisch deprecated) markierten Präsentationsbezogenen Elemente. Schaue hier:<a href ="https://de.wikipedia.org/wiki/Hypertext_Markup_Language"target=_blank""nachlesen</a>'
    },
    {
        type: "html",
        questiontext: 'Was gehört zu HTML?',
        correctanswer: '&lt;p&gt;',
        wronganswers: ['background-color', 'var', '.addEventListener'],
        infotext: 'Es geht in HTML um beschreibende (englisch descriptive), nicht um verfahrens- (englisch procedural) und darstellungsorientierte (englisch presentational) Textauszeichnung, auch wenn sich HTML in früheren Versionen dafür verwenden ließ. Schaue hier:<a href ="https://www.w3schools.com/html/html_intro.asp"target="_blank">nachlesen</a>'
    },
    {
        type: "html",
        questiontext: 'HTML ist eine...?',
        correctanswer: 'Auszeichnungssprache',
        wronganswers: ['Programmiersprache', 'Skriptsprache', 'Zeichensprache'],
        infotext: 'Eine Gemeinsamkeit mit den meisten Programmiersprachen ist, dass für die Bearbeitung der Quelldokumente keine spezielle Software (siehe auch Liste von HTML-Editoren) nötig ist, sondern ein beliebiger Texteditor ausreicht. Schaue hier:<a href =" https..."target="_blank">nachlesen</a>'
    },
    {
        type: "html",
        questiontext: 'Wie lerne ich am besten HTML?',
        correctanswer: 'Bei Herrn Rausch',
        wronganswers: ['Indem ich mit einer Ente rede', 'Stack Overflow', 'Ein trockenes Buch'],
        infotext: 'HTML lernt man am besten über seine Vorlesungen und hier falls man für die Aufgaben Hilfe benötigt:<a href ="https://stackoverflow.com">nachlesen</a>'
    },
    {
        type: "html",
        questiontext: 'Beschreiben Sie HTML.',
        correctanswer: 'HTML ist eine Markup-Sprache, mit der Website-Vorlagen oder Webseiten erstellt werden, um den Inhalt im World Wide Web zu präsentieren.',
        wronganswers: ['HTML ist eine Marketing-Sprache um ein Mockup für Kunden präsentieren zu können', 'HTML ist eine Markup-Sprache, mit der Papiervorlagen erstellt werden, um den Inhalt einem Kunden analog zu präsentieren.'],
        infotext: 'HTML ist die Sprache des Internets. Schaue hier:<a href =" https://de.wikipedia.org/wiki/Hypertext_Markup_Language "target="_blank">nachlesen</a>'
    },
    {
        type: "html",
        questiontext: 'Was ist HTML5?',
        correctanswer: 'HTML5 ist die neueste oder aktualisierte Version der Markup-Sprache, die HTML definiert.',
        wronganswers: ['HTML5 ist die älteste Version der Markup-Sprache die HTML definiert.', 'HTML5 gibt es noch nicht.', 'HTML5 beschreibt eine Version der Markup-Sprache die immer und überall funktioniert.'],
        infotext: 'HTML beherbergt seit neuestem neue Funktionen. Schaue hier:<a href =" https://www.heise.de/tipps-tricks/Was-ist-HTML5-Ein-kurzer-Ueberblick-3877264.html"target="_blank">nachlesen</a>'
    },



    {
        type: "css",
        questiontext: 'CSS ist eine...',
        correctanswer: '...Stylesheet-Sprache',
        wronganswers: ['...Programmiersprache', '...Zeichensprache', '...Skriptsprache'],
        infotext: 'Für elektronische Dokumente und zusammen mit HTML und JavaScript eine der Kernsprachen des World Wide Webs.. Schaue hier:<a href ="https://de.wikipedia.org/wiki/Cascading_Style_Sheets"target="_blank">nachlesen</a>'
    },
    {
        type: "css",
        questiontext: 'Was heißt CSS?',
        correctanswer: 'Cascading Style Sheets',
        wronganswers: ['coding speed sheets', 'copie styles soon', 'come soon styles'],
        infotext: 'gestufte Gestaltungsbögen. Schaue hier:<a href =" https://de.wikipedia.org/wiki/Cascading_Style_Sheets"target="_blank">nachlesen</a>'
    },
    {
        type: "css",
        questiontext: 'Kann CSS in Kombination mit HTML genutzt werden?',
        correctanswer: 'Ja',
        wronganswers: ['Kommt drauf an', 'Nein', 'Teilweise'],
        infotext: 'CSS wurde entworfen, um Darstellungsvorgaben weitgehend von den Inhalten zu trennen. Schaue hier:<a href =" https://de.wikipedia.org/wiki/Cascading_Style_Sheets"target="_blank">nachlesen</a>'
    },
    {
        type: "css",
        questiontext: 'CSS wurde entworfen, um...',
        correctanswer: '... Darstellungsvorgaben weitgehend von den Inhalten zu trennen',
        wronganswers: ['...bessere Analyse-Daten zu erhalten', '...eine weitere Kernsprache damit zu entwickeln'],
        infotext: 'CSS beschreibt den Stil einer HTML-Webseite. Schaue hier:<a href =" https://de.wikipedia.org/wiki/Cascading_Style_Sheets"target="_blank">nachlesen</a>'
    },
    {
        type: "css",
        questiontext: 'Kann CSS  Klassen ansprechen, IDs oder beides?',
        correctanswer: 'Beides',
        wronganswers: ['Nur Klassen.', 'Nur IDs', 'Auf keine von beiden.'],
        infotext: 'CSS selektiert die HTML Elemente die du stylen möchtest. Schaue hier:<a href =" https://www.w3schools.com/css/css_selectors.asp"target="_blank">nachlesen</a>'
    },
    {
        type: "css",
        questiontext: 'Was ist CSS-Deckkraft?',
        correctanswer: 'Es ist die Eigenschaft, die die Transparenz eines Elements herausarbeitet.',
        wronganswers: ['Es ist die Eigenschaft, dass es alle anderen Elemente überdeckt.', 'Es ist die Eigenschaft, dass der vorherige Befehl immer priorisiert wird', 'Diese Eigenschaft gibt es nicht.'],
        infotext: 'CSS hat unterschiedliche gestalterische Möglichkeiten. Schaue hier: <a href ="https://www.w3schools.com/cssref/css3_pr_opacity.php"target="_blank">nachlesen</a>'
    },
    {
        type: "css",
        questiontext: 'Warum ist das externe Stylesheet nützlich?',
        correctanswer: 'Nützlich, da wir alle Styling-Codes in eine einzige Datei schreiben.',
        wronganswers: ['Es ist nicht nützlich.', 'Es ist nützlich, da man es ohne Verweisung auf einen Links verwenden kann.'],
        infotext: 'Wenn wir also Änderungen an dieser externen Datei vornehmen, können die Änderungen auch auf der Webseite beobachtet werden. Schaue hier:<a href =" https://www.mediaevent.de/css/css-einbinden.html"target="_blank">nachlesen</a>'
    },



    {
        type: "TypeScript",
        questiontext: 'TypeScript schließt Lücken im Programmierkonzept von JavaScript durch:',
        correctanswer: 'strikte Typisierung',
        wronganswers: ['schnellere Rechenfähigkeit', 'errechnen von Fehlern', 'bessere Leistung'],
        infotext: 'HTML ist die Sprache des Internets, es wird genutzt um Webseiten ober ähnliches zu erstellen. Schaue hier: <a href ="https://de.wikipedia.org/wiki/Hypertext_Markup_Language"target="_blank">nachlesen</a>'
    },
    {
        type: "TypeScript",
        questiontext: 'Die visuelle Darstellung ist...',
        correctanswer: '...nicht Teil von TypeScript',
        wronganswers: ['...teilweise Teil von TypeScript', '...manchmal Teil von TypeScript', '...ein großer Teil von TypeScript'],
        infotext: 'TypeScript ist eine von Microsoft entwickelte Skriptsprache, die auf den Vorschlägen zum ECMAScript-6-Standard basiert.. Schaue hier:<a href ="https://de.wikipedia.org/wiki/TypeScript"target="_blank">nachlesen</a>'
    },
    {
        type: "TypeScript",
        questiontext: 'TypeScript erweitert',
        correctanswer: 'JavaScript',
        wronganswers: ['C++', 'Python', 'C#'],
        infotext: 'Erweitert JavaScript zu einer Programmiersprache, die den Anforderungen an eine Hochsprache wie Java oder C++ näher kommen. Schaue hier:<a href =" https://www.w3schools.com/css/default.asp"target="_blank">nachlesen</a>'
    },
    {
        type: "TypeScript",
        questiontext: 'Welches ist richtig?',
        correctanswer: 'let names: string;',
        wronganswers: ['Let names: string;', 'lets name: string;', 'let age: numbers;'],
        infotext: '1. Schlüsselwort zur Deklaration einer Variable. 2. Bezeichnung. 3. Typ Schaue hier:<a href =" https://www.w3schools.com/css/default.asp"target="_blank">nachlesen</a>'
    },
    {
        type: "TypeScript",
        questiontext: 'Was passiert hier: 12%5?',
        correctanswer: 'Gibt Restwert zurück, also 2',
        wronganswers: ['Gibt die Zahl an durch die maximal dividiert werden kann an, also 2', 'Dividiert, also 2.4', 'Dividiert 5 durch 12, also ca. 0.416'],
        infotext: 'Wird Modulo genannt. Schaue hier:<a href =" https://www.tutorialspoint.com/typescript/typescript_operators.htm"target="_blank">nachlesen</a>'
    },
    {
        type: "TypeScript",
        questiontext: 'Wer hat TypeScript entwickelt?',
        correctanswer: 'Microsoft',
        wronganswers: ['Apple', 'Google', 'Alphabet'],
        infotext: 'Die Sprache wird weiterhin vom selben Entwickler weiterentwickelt. Schaue hier:<a href =" https://learn.microsoft.com/de-de/training/modules/typescript-get-started/"target="_blank">nachlesen</a>'
    },
    {
        type: "TypeScript",
        questiontext: 'Wird TypeScript-Code direkt in einem Browser oder auf einer anderen Plattform ausgeführt?',
        correctanswer: 'Nein',
        wronganswers: ['Ja', 'Teilweise', 'Nur auf bestimmten, dafür entwickelten Browsern.'],
        infotext: 'Die Zielplattform führt dann das einfache JavaScript aus, das mithilfe des Transpilers von TypeScript aus den .ts-Dateien generiert wurde. Schaue hier:<a href =" https://geekflare.com/de/typescript-vs-javascript/"target="_blank">nachlesen</a>'
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
});

/**
 * Hier schaut die Funktion, welcher Fragentyp ausgewählt ist(HTML, TypeScript, CSS oder gemischt). 
 * Dann erstellen wir eine Variable die selectedtype heißt, welche 
 * den value, den Wert der Umfrage annimmt welches HTML, CSS oder TypeScript sein könnte. 
 * In Zeile 192 teilen wir selectedwinpointsradiobutton zu indem wir schauen wo das Häkchen bei welcher Gewinnpunktzahl gesetzt wurde.
 * In der for-Schleife soll nun die Liste hochgezählt werden von 0 an. In dem if-Block; ob der type der Liste mit dem 
 * vorher definierten selectedtype übereinstimmt. Wenn ja soll diese Frage aus dem Array in die visiblequestionlist gemacht werden. 
 * Falls der typ 'mixed' ausgewählt sein sollte, dann sollen alle Fragen aus der Questionlist zur Verfügung gestellt werden.
 * Die letzte for-Schleife mischt die Fragen.
 * Nach diesen Vorbereitungen wird die Funktion showquestion aufgerufen um die erste Frage anzuzeigen.
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

/**
 * Hier wird die Funktion showquestion definiert, void wird genutzt weil diese Funktion kein Wert zurückgibt.
 * In dieser Funktion greift man in die unterschiedlichen HTML Elemente (anhand von Klassen) ein um die Fragen zu zeigen. 
 * Zuerst wird in die Überschrift eingegriffen und diese wird entfernt.(ist leer)
 * Dann greift man in die Klasse text ein und Zeigt dort von der ersten Frage den questiontext.
 * Bei let selection wird die Klasse selection leer gemacht. 
 * Dann definieren wir eine Variable namens answerlist die aus einem String bestehen soll. 
 * In der for-Schleife gehen wir die visiblequestionlist durch und pushen die falschen Antworten in die answerlist.
 * In der zweiten for-Schleife mischen wir die Antworten in der answerlist wieder.
 * Die correctanswernumber wird als zufällige Zahl definiert, dann wird die richtige Antwort an dieser Stelle in die möglichen Antworten eingefügt.
 * In der for-Schleife geht man durch die soeben zusammengesetzte Liste der Antworten und fügt sie in die HTML ein.
 * Bei let button wird das Element anhand der Klasse button ausgewählt, der Inhalt aus der HTML geleert und zu einem Antwort-Button geändert.
 * Danach: wenn der button mit der ID btn-start geklickt wird, soll die Funktion checkanswer ablaufen.
 * Am Schluss wird die Funktion updateCounter aufgerufen.
 */
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
/**
 * Hier starten wir wieder mit einer Funktion die keinen Wert zurückgibt.
 * Hier wird selectedradiobutton den Wert des ausgewählten radio-buttons zugeteilt.
 * selectedradiobutton.value wird mit parseInt von einem string zu einer number und als Zahl in selectedanswer eingespeichert.
 * headline ist eine neue Variable und greift anhand der Klasse headline in HTML ein.
 * if-Block: wenn die number von selectedanswer gleich ist wie correctanswernumber, dann soll in der headline stehen, dass die 
 * Antwort richtig war und es wird ein Punkt bei den currentpoints hinzugefügt. Die Funktion updatecounter wird aufgerufen.
 * else-Block: wenn die number von selectedanswer nicht gleich ist wie correctanswernumber dann soll angezeigt werden, dass die 
 * Antwort falsch war (mit rotem Hintergrund). Diese Frage wird wieder in die visiblequestionlist gepushed.
 * Danach löschen wir die Frage vom Anfang der visiblequestionlist.
 * Wenn die erreichte Punktzahl(currentpoints) größer oder gleich der zu erreichenden Punktzahl (winpoints) ist, dann wird der Siegesscreen angezeigt.
 * Ansonsten wird der Infotext angezeigt. 
 */
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

    if (currentpoints >= winpoints) {
        showwinscreen()
    } else {
        showinfotext()
    }
}

/**
 * In dieser Funktion wird eine neue Variable erstellt die auf die Klasse points zugreift und den aktuellen
 * Punktestand und den Punktestand den man benötigt um zu gewinnen anzeigt.
 */
function updateCounter(): void {
    let points = document.querySelector('.points') as HTMLElement
    points.innerHTML = 'Punktestand: ' + currentpoints + ' / ' + winpoints
}

/**
 * Hier wird wieder auf unterschiedliche Elemente anhand von Klassen im HTML zugegriffen um den Infotext anzuzeigen nachdem man auf den 
 * Button geklickt hat.
 * Dann soll aus dem Button ein Weiter-Button werden. Wenn man darauf klickt, wird wieder die nächste Frage angezeigt.
 */
function showinfotext(): void {
    let text = document.querySelector('.text') as HTMLElement
    text.innerHTML = visiblequestionlist[0].infotext
    let selection = document.querySelector('.selection') as HTMLElement
    selection.innerHTML = ''
    let button = document.querySelector('.button') as HTMLElement
    button.innerHTML = ''
    button.innerHTML = '<button id="btn-start">Weiter</button>'
    let innerbutton = document.querySelector('#btn-start')
    innerbutton.addEventListener('click', showquestion)
    visiblequestionlist.splice(0, 1)
}
/**
 * Hier wird eine Zufallszahl zwischen min und max generiert.
 */
function randomIntFromInterval(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
/**
 * Diese Funktion soll aufgerufen werden wenn man die volle Punktzahl erreicht hat. 
 * Es wird wieder auf die unterschiedlichen Elemente zugegriffen um den Gewinnertext anzuzeigen und 
 * es wird danach gefragt ob man noch einmal spielen möchte.
 * Wenn man den Button klickt, wird die Seite neu geladen und alles fängt von vorne an :)
 */
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

