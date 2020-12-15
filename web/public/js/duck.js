/* DUCK LOGIC */

function init_duck() {
    // get reference to ddb
    let duck = document.getElementById("duck");
    // get reference to quack-put -- like output but for ducks
    let quack_put = document.getElementById("quack-put");
    
    // add event listener to ddb to quack random ASCII when clicked
    duck.addEventListener('click', quack);
}

// actual quack function to quack random ASCII when clicked
function quack() {
    // 49 to 126
    // Math.random() returns value between 0 - 1
    let char = (Math.random() * 77 + 49);

    // set quack-put to random char
    quack_put.innerHTML = String.fromCharCode(parseInt(char, 10));
}

function matrix() {
    quack_put.innerHTML = '&#x1F407';
}

// Triggers 'copied' next to quack-put
function copied(clipboard) {
    // get reference to 'copied' element
    const copied = document.getElementById("copied");

    // set initial animation duration for 'copied'
    copied.style.transition = 'opacity 0.1s';
    // trigger animation
    copied.style.opacity = '1';

    // set quack-put to clipboard
    quack_put.innerHTML = clipboard;

    // trigger fadeout animation
    window.setTimeout(function(){
        copied.style.transition = 'opacity 1s';
        copied.style.opacity = '0';
    }, 1000)
}
