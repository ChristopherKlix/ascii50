/* COPY TO CLIPBOARD */

function copy_to_clipboard(id, ascii) {
    // Get reference to <td> that was clicked
    const cell = document.getElementById(id);

    const clipboard = ascii

    // Copy to clipboard
    navigator.clipboard.writeText(clipboard).then(function() {
        show_copied_char(clipboard)
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
