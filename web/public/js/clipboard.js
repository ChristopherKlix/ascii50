/* COPY TO CLIPBOARD */

function copy_to_clipboard(id, ascii) {
    // Get reference to <td> that was clicked
    const DOM_cell = document.getElementById(id);

    // Copy to clipboard
    navigator.clipboard.writeText(ascii).then(function() {
        show_copied_char(ascii)
    });

    // Animation of cell flashing green
    const color = DOM_cell.style.color;
    DOM_cell.style.transition = 'color 0.1s';
    DOM_cell.style.color = 'rgba(163, 185, 0, 1)';
    window.setTimeout(function(){
        DOM_cell.style.transition = 'color 1s';
        DOM_cell.style.color = color;
    }, 1000)
}
