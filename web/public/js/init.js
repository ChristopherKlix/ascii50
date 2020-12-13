// Get reference to HTML table tag
let table = document.getElementById('table');

// Initialize table mode
let mode = 'dec';

function create_table(ascii_type) {
    // Clearing table to redraw
    table.innerHTML = '';

    const columns = 16;
    const rows = 16;
    
    // Iterate over each row
    for (let row = 0; row < rows; row++) {
        // Create a new row
        let new_row = table.insertRow(-1);

        // Iterate over each column
        for (let column = 0; column < columns; column += 2) {
            const ascii_code = json["128"][(columns * (column / 2) + row).toString()][ascii_type];
            const ascii_char = json["128"][(columns * (column / 2) + row).toString()]["ascii"];
            
            // Create first cell -- ASCII code
            cell_code = new_row.insertCell(column);
            cell_code.id = 'ascii_code_' + ascii_code;
            cell_code.className = 'number';
            if (ascii_type == 'hex') {
                cell_code.style.fontSize = '0.9rem';
            } else if (ascii_type == 'bin') {
                cell_code.style.fontSize = '0.6rem';
            }
            cell_code.innerHTML = ascii_code;

            // Create second cell -- ASCII character
            cell_char = new_row.insertCell(column + 1);
            cell_char.id = 'ascii_char_' + ascii_code;
            cell_char.className = 'char';
            cell_char.innerHTML = ascii_char;

            // Trigger 'copy_to_clipboard' on click
            cell_code.addEventListener('click', function(){
                // copy_to_clipboard('ascii_code_' + ascii_code)
                const cell_id = 'ascii_code_' + ascii_code;
                copy_to_clipboard(cell_id, ascii_code)
            });
            cell_char.addEventListener('click', function(){
                // copy_to_clipboard('ascii_char_' + ascii_code)
                const cell_id = 'ascii_char_' + ascii_code;
                copy_to_clipboard(cell_id, ascii_char)
            });
        }
    }
}

/* Run initial table setup */
create_table('dec');
