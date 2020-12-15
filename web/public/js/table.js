/* TABLE LOGIC */

function init_table() {
    // State of ASCII range -- either '128' or '256'
    ascii_range = '128';

    create_table(ascii_type='dec', ascii_range=ascii_range);
}

function create_table(ascii_type, ascii_range) {
    // Clearing table to redraw
    table.innerHTML = '';

    // Define table layout
    const columns = 16;
    const rows = 16;
    
    // Iterate over each row
    for (let row = 0; row < rows; row++) {
        // Create a new row
        let new_row = table.insertRow(-1);

        // Iterate over each column
        for (let column = 0; column < columns; column += 2) {
            // Read ASCII code & ASCII character from json variable
            // Initialized in json.js file
            const ascii_code = json["128"][(columns * (column / 2) + row).toString()][ascii_type];
            const ascii_char = json["128"][(columns * (column / 2) + row).toString()]["ascii"];
            
            // Create first cell -- ASCII code
            cell_code = new_row.insertCell(column);
            cell_code.id = 'ascii_code_' + ascii_code;
            cell_code.className = 'number';
            cell_code.innerHTML = ascii_code;
            // Add additional styling for certain ASCII code types
            if (ascii_type == 'hex') {
                cell_code.style.fontSize = '0.9rem';
            } else if (ascii_type == 'bin') {
                cell_code.style.fontSize = '0.6rem';
            }

            // Create second cell -- ASCII character
            cell_char = new_row.insertCell(column + 1);
            cell_char.id = 'ascii_char_' + ascii_code;
            cell_char.className = 'char';
            cell_char.innerHTML = ascii_char;

            // Trigger 'copy_to_clipboard' on click
            cell_code.addEventListener('click', function(){
                const cell_id = 'ascii_code_' + ascii_code;
                copy_to_clipboard(cell_id, ascii_code)
            });
            cell_char.addEventListener('click', function(){
                const cell_id = 'ascii_char_' + ascii_code;
                copy_to_clipboard(cell_id, ascii_char)
            });
        }
    }
}

// Changing ASCII range from '128' to '256' and vice versa
function toggle_ascii_range() {
    if (ascii_range === '128') {
        btn_128.style.backgroundColor = 'rgba(163, 185, 0, 0)';
        btn_256.style.backgroundColor = 'rgba(163, 185, 0, 1)';
        ascii_range = '256';
    } else {
        btn_128.style.backgroundColor = 'rgba(163, 185, 0, 1)';
        btn_256.style.backgroundColor = 'rgba(163, 185, 0, 0)';
        ascii_range = '128';
    }
}
