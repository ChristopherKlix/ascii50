/* DUCK LOGIC */

function init_duck() {
    return;
}

// Actual quack function to quack random ASCII when clicked
function quack() {
    // 49 to 126
    // Math.random() returns value between 0 - 1
    const char = (Math.random() * 77 + 49);

    // set quack-put to random char
    DOM_quack_put.innerHTML = String.fromCharCode(parseInt(char, 10));
}

function matrix() {
    DOM_quack_put.innerHTML = '&#x1F407';
}

// Triggers 'copied' next to quack-put
function show_copied_char(clipboard) {
    // set initial animation duration for 'copied'
    DOM_copied.style.transition = 'opacity 0.1s';
    // trigger animation
    DOM_copied.style.opacity = '1';

    // set quack-put to clipboard
    DOM_quack_put.innerHTML = clipboard;

    // trigger fadeout animation
    window.setTimeout(function(){
        DOM_copied.style.transition = 'opacity 1s';
        DOM_copied.style.opacity = '0';
    }, 1000)
}
