let moveButton = document.querySelector("#move");
let man = document.querySelector("#man");

window.addEventListener("keydown", keypress);

function keypress(e){
    console.log(e.key);
    if(e.key=="a"){
        startAnimation();
    }
    console.log(e.key);
    if(e.key=="n"){
        moveTo30();
    }
    console.log(e.key);
    if(e.key=="d"){
        moveFrom30();
    }
    console.log(e.key);
    if(e.key=="e"){
        oneJump();
    }
    console.log(e.key);
    if(e.key=="r"){
        jumping();
    }
    console.log(e.key);
    if(e.key=="s"){
        fade();
    }
    console.log(e.key);
    if(e.key=="o"){
        glow();
    }
    console.log(e.key);
    if(e.key=="n"){
        fallDown();
    }
    console.log(e.key);
    if(e.key=="space"){
        speak();
    }
    console.log(e.key);
    if(e.key=="."){
        shake();
    }
    console.log(e.key);
    if(e.key=="p"){
        mirror();
    }
    console.log(e.key);
    if(e.key=="a"){
        dance();
    }
    console.log(e.key);
    if(e.key=="a"){
        moveTo0();
    }
    console.log(e.key);
    if(e.key=="k"){
        goHit();
    }
    console.log(e.key);
    if(e.key=="!"){
        hiiter();
    }
}
moveButton.addEventListener('click', startAnimation);


function startAnimation() {

    man.classList.toggle('goLeft');
};


let moveTo30Button = document.querySelector("#moveTo30");

moveTo30Button.addEventListener('click', moveTo30);

function moveTo30() {

    man.classList.toggle('moveTo30');
};


let moveFrom30Button = document.querySelector("#moveFrom30");

moveFrom30Button.addEventListener('click', moveFrom30);

function moveFrom30() {

    man.classList.toggle('moveFrom30');
};


let oneJumpButton = document.querySelector("#oneJump");

oneJumpButton.addEventListener('click', oneJump);

function oneJump() {

    man.classList.toggle('oneJump');
};


let jumpingButton = document.querySelector("#jumping");

jumpingButton.addEventListener('click', jumping);

function jumping() {

    man.classList.toggle('jumping');
};


let fadeButton = document.querySelector("#fade");

fadeButton.addEventListener('click', fade);

function fade() {

    man.classList.toggle('fade');
};

let glowButton = document.querySelector("#glow");

glowButton.addEventListener('click', glow);

function glow() {

    man.classList.toggle('glow');
};

let fallDownButton = document.querySelector("#fallDown");

fallDownButton.addEventListener('click', fallDown);

function fallDown() {

    man.classList.toggle('fallDown');
};

let speakButton = document.querySelector("#speak");

speakButton.addEventListener('click', speak);

function speak() {

    dang.play();
};


let shakeButton = document.querySelector("#shake");

shakeButton.addEventListener('click', shake);

function shake() {

    man.classList.toggle('animated');
    man.classList.toggle('wobble');

};


let mirrorButton = document.querySelector("#mirror");

mirrorButton.addEventListener('click', mirror);

function mirror() {

    man.classList.toggle('mirror');


};

let danceButton = document.querySelector("#dance");

danceButton.addEventListener('click', dance);

function dance() {

    man.classList.toggle('animated');
    man.classList.toggle('hinge');

};

let moveTo0Button = document.querySelector("#moveTo0");

moveTo0Button.addEventListener('click', moveTo0);

function moveTo0() {

    man.classList.add('moveTo0');

};

let goHitButton = document.querySelector("#goHit");

goHitButton.addEventListener('click', goHit);

function goHit() {

    man.classList.toggle('goHit');

};

let hitterButton = document.querySelector("#hitter");
let h1Button = document.querySelector("#h1");

hitterButton.addEventListener('click', hitter);

function hitter() {

    h1.classList.toggle('hitter');
    man.classList.toggle('man1');

};
