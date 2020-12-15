/* COPY TO CLIPBOARD */

function copy_to_clipboard(id, ascii) {
    // Get reference to <td> that was clicked
    const cell = document.getElementById(id);

    const clipboard = ascii

    // Copy to clipboard
    navigator.clipboard.writeText(clipboard).then(function() {
        copied(clipboard)
    });

    // Animation of cell flashing green
    const color = cell.style.color;
    cell.style.transition = 'color 0.1s';
    cell.style.color = 'rgba(163, 185, 0, 1)';
    window.setTimeout(function(){
        cell.style.transition = 'color 1s';
        cell.style.color = color;
    }, 1000)
}

/* end */


// /* COPY MODE */

// // state for copy mode -- either 'int' or 'char'
// let copy_mode = 'int';

// // get reference to menu items for copy mode
// let copy_mode_int = document.getElementById('copy-mode-int');
// let copy_mode_char = document.getElementById('copy-mode-char');

// // add event listener for menu items
// copy_mode_int.addEventListener('click', change_copy_mode);
// copy_mode_char.addEventListener('click', change_copy_mode);

// // changing copy mode from 'int' to 'char' or vice versa
// function change_copy_mode() {
//     if (copy_mode === 'int') {
//         // change colors in UI
//         copy_mode_int.style.backgroundColor = 'rgba(163, 185, 0, 0)';
//         copy_mode_char.style.backgroundColor = 'rgba(163, 185, 0, 1)';
//         // change copy mode state
//         copy_mode = 'char';
//     } else {
//         // change colors in UI
//         copy_mode_int.style.backgroundColor = 'rgba(163, 185, 0, 1)';
//         copy_mode_char.style.backgroundColor = 'rgba(163, 185, 0, 0)';
//         // change copy mode state
//         copy_mode = 'int';
//     }
// }

// /* end */