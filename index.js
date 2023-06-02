let Home=0
let Guest=0
let ScoreHome= document.getElementById("ScoreHome")
let ScoreGuest= document.getElementById("ScoreGuest")
ScoreHome.textContent= Home
ScoreGuest.textContent= Guest

function addhome1(){
    Home+= 1
    ScoreHome.textContent= Home
}

function addhome2(){
    Home+= 2
    ScoreHome.textContent= Home
}

function addhome3(){
    Home+= 3
    ScoreHome.textContent= Home
}

function addguest1(){
    Guest+= 1
    ScoreGuest.textContent= Guest
}

function addguest2(){
    Guest+= 2
    ScoreGuest.textContent= Guest
}

function addguest3(){
    Guest+= 3
    ScoreGuest.textContent= Guest
}