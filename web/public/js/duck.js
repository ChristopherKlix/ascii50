/* DUCK LOGIC */

// get reference to ddb
let duck = document.getElementById("duck");
// get reference to quark-put -- like output but for ducks
let quark_put = document.getElementById("quark-put");

// add event listener to ddb to quark random ASCII when clicked
duck.addEventListener('click', quark);

// actual quark function to quark random ASCII when clicked
function quark() {
    // 49 to 126
    // Math.random() returns value between 0 - 1
    let char = (Math.random() * 77 + 49);

    // set quark-put to random char
    quark_put.innerHTML = String.fromCharCode(parseInt(char, 10));
}

function matrix() {
    quark_put.innerHTML = '&#x1F407';
}

// Triggers 'copied' next to quark-put
function copied(clipboard) {
    // get reference to 'copied' element
    const copied = document.getElementById("copied");

    // set initial animation duration for 'copied'
    copied.style.transition = 'opacity 0.1s';
    // trigger animation
    copied.style.opacity = '1';

    // set quark-put to clipboard
    quark_put.innerHTML = clipboard;

    // trigger fadeout animation
    window.setTimeout(function(){
        copied.style.transition = 'opacity 1s';
        copied.style.opacity = '0';
    }, 1000)
}
