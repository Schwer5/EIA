const button1 = document.querySelector('.button1');
button1.addEventListener('click', function () {
    playsample(new Audio('a.mp3'));
    if (document.querySelector('.microphonebutton').classList.contains('active')) {
        array.push('a.mp3');
    }
});
const button2 = document.querySelector('.button2');
button2.addEventListener('click', function () {
    playsample(new Audio('af.mp3'));
    if (document.querySelector('.microphonebutton').classList.contains('active')) {
        array.push('af.mp3');
    }
});
const button3 = document.querySelector('.button3');
button3.addEventListener('click', function () {
    playsample(new Audio('b.mp3'));
    if (document.querySelector('.microphonebutton').classList.contains('active')) {
        array.push('b.mp3');
    }
});
const button4 = document.querySelector('.button4');
button4.addEventListener('click', function () {
    playsample(new Audio('bf.mp3'));
    if (document.querySelector('.microphonebutton').classList.contains('active')) {
        array.push('bf.mp3');
    }
});
const button5 = document.querySelector('.button5');
button5.addEventListener('click', function () {
    playsample(new Audio('c.mp3'));
    if (document.querySelector('.microphonebutton').classList.contains('active')) {
        array.push('c.mp3');
    }
});
const button6 = document.querySelector('.button6');
button6.addEventListener('click', function () {
    playsample(new Audio('d.mp3'));
    if (document.querySelector('.microphonebutton').classList.contains('active')) {
        array.push('d.mp3');
    }
});
const button7 = document.querySelector('.button7');
button7.addEventListener('click', function () {
    playsample(new Audio('df.mp3'));
    if (document.querySelector('.microphonebutton').classList.contains('active')) {
        array.push('df.mp3');
    }
});
const button8 = document.querySelector('.button8');
button8.addEventListener('click', function () {
    playsample(new Audio('e.mp3'));
    if (document.querySelector('.microphonebutton').classList.contains('active')) {
        array.push('e.mp3');
    }
});
const button9 = document.querySelector('.button9');
button9.addEventListener('click', function () {
    playsample(new Audio('ef.mp3'));
    if (document.querySelector('.microphonebutton').classList.contains('active')) {
        array.push('ef.mp3');
    }
});
const button10 = document.querySelector('.button10');
button10.addEventListener('click', function () {
    playsample(new Audio('f.mp3'));
    if (document.querySelector('.microphonebutton').classList.contains('active')) {
        array.push('f.mp3');
    }
});
const button11 = document.querySelector('.button11');
button11.addEventListener('click', function () {
    playsample(new Audio('g.mp3'));
    if (document.querySelector('.microphonebutton').classList.contains('active')) {
        array.push('g.mp3');
    }
});
const button12 = document.querySelector('.button12');
button12.addEventListener('click', function () {
    playsample(new Audio('gf.mp3'));
    if (document.querySelector('.microphonebutton').classList.contains('active')) {
        array.push('gf.mp3');
    }
});
const playbutton = document.querySelector('.playbutton');
let intervalID = 0;
playbutton.addEventListener('click', function () {
    let button = document.querySelector('.playbutton');
    if (button.classList.contains('fa-play')) {
        button.classList.remove('fa-play');
        button.classList.add('fa-stop');
        intervalID = setInterval(function () {
            playsample(new Audio(array[i]));
            i++;
            if (i == 11) {
                i = 0;
            }
        }, 500);
    }
    else {
        button.classList.remove('fa-stop');
        button.classList.add('fa-play');
        clearInterval(intervalID);
    }
});
var i = 0;
function playsample(ton) {
    ton.play();
}
var array = ['a.mp3', 'af.mp3', 'b.mp3', 'bf.mp3', 'c.mp3', 'd.mp3', 'df.mp3', 'e.mp3', 'ef.mp3', 'f.mp3', 'g.mp3', 'gf.mp3'];
const shuffle = document.querySelector('.shufflebutton');
shuffle.addEventListener('click', function () {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        let temporary = array[j];
        array[j] = array[i];
        array[i] = temporary;
    }
});
const micro = document.querySelector('.microphonebutton');
micro.addEventListener('click', function () {
    if (micro.classList.contains('active')) {
        micro.classList.remove('active');
    }
    else {
        micro.classList.add('active');
        clearInterval(intervalID);
        array = [];
    }
});
//# sourceMappingURL=keyboard.js.map