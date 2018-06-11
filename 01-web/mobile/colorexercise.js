let scene = document.querySelector("#scene");
let counter = 0;

scene.addEventListener('click', changeColor);

function changeColor() {
    counter++;
    console.log(counter);

    if (counter == 1) {
        scene.classList.remove('violet');
        scene.classList.add('red');


    } else if (counter == 2) {
        scene.classList.remove('red');
        scene.classList.add('orange');

    } else if (counter == 3) {
        scene.classList.remove('orange');
        scene.classList.add('yellow');
        

    } else if (counter == 4) {
        scene.classList.remove('yellow');
        scene.classList.add('green');
        

    } else if (counter == 5) {
        scene.classList.remove('green');
        scene.classList.add('blue');
        

    } else if (counter == 6) {
        scene.classList.remove('blue');
        scene.classList.add('indigo');
        

    } else if (counter == 7) {
        scene.classList.remove('indigo');
        scene.classList.add('violet');
        
        counter = 0;
    }


}
