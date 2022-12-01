const button1 = document.querySelector ('.button1') as HTMLButtonElement
button1.addEventListener ('click', function(){
    playsample (new Audio('a.mp3'))
})

const button2 = document.querySelector ('.button2') as HTMLButtonElement
button2.addEventListener ('click', function(){
    playsample (new Audio('af.mp3'))
})

const button3 = document.querySelector ('.button3') as HTMLButtonElement
button3.addEventListener ('click', function(){
    playsample (new Audio('b.mp3'))
})

const button4 = document.querySelector ('.button4') as HTMLButtonElement
button4.addEventListener ('click', function(){
    playsample (new Audio('bf.mp3'))
})

const button5 = document.querySelector ('.button5') as HTMLButtonElement
button5.addEventListener ('click', function(){
    playsample (new Audio('c.mp3'))
})

const button6 = document.querySelector ('.button6') as HTMLButtonElement
button6.addEventListener ('click', function(){
    playsample (new Audio('d.mp3'))
})

const button7 = document.querySelector ('.button7') as HTMLButtonElement
button7.addEventListener ('click', function(){
    playsample (new Audio('df.mp3'))
})

const button8 = document.querySelector ('.button8') as HTMLButtonElement
button8.addEventListener ('click', function(){
    playsample (new Audio('e.mp3'))
})

const button9 = document.querySelector ('.button9') as HTMLButtonElement
button9.addEventListener ('click', function(){
    playsample (new Audio('ef.mp3'))
})

const button10 = document.querySelector ('.button10') as HTMLButtonElement
button10.addEventListener ('click', function(){
    playsample (new Audio('f.mp3'))
})

const button11 = document.querySelector ('.button11') as HTMLButtonElement
button11.addEventListener ('click', function(){
    playsample (new Audio('g.mp3'))
})

const button12 = document.querySelector ('.button12') as HTMLButtonElement
button12.addEventListener ('click', function(){
    playsample (new Audio('gf.mp3'))
})


function playsample (ton: any)
{
    ton.play()
}