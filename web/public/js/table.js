/* TABLE LOGIC */

function init_table() {
    // State of ASCII range -- either '128' or '256'
    ascii_type = 'dec';
    ascii_range = '128';

    create_table(ascii_type=ascii_type, ascii_range=ascii_range);
    console.log('Parsed #table');
}

function create_table(type=ascii_type, range=ascii_range) {
    // Assign input values to global variables
    ascii_type = type;
    ascii_range = range;

    // Clearing table to redraw
    DOM_table.innerHTML = '';
    DOM_text.innerHTML = '';
    $("#nav-wrapper").css('visibility', 'visible');

    // Define table layout
    const columns = 16;
    const rows = 16;
    
    // Iterate over each row
    for (let row = 0; row < rows; row++) {
        // Create a new row
        const new_row = table.insertRow(-1);

        // Iterate over each column
        for (let column = 0; column < columns; column += 2) {
            // Read ASCII code & ASCII character from json variable
            // Initialized in json.js file
            const ascii_256 = (ascii_range == '256' ? 128 : 0);
            const ascii_index = (columns * (column / 2) + row + ascii_256).toString();

            const ascii_code        = json[ascii_range][ascii_index][ascii_type];
            const ascii_char        = json[ascii_range][ascii_index]["ascii"];
            const ascii_description = json[ascii_range][ascii_index]["description"];
            const ascii_cc          = json[ascii_range][ascii_index]["is_cc"];
            
            // Create first cell -- ASCII code
            const DOM_cell_code = new_row.insertCell(column);
            DOM_cell_code.id = 'ascii_code_' + ascii_code;
            DOM_cell_code.className = 'number';
            DOM_cell_code.innerHTML = ascii_code;
            // Add additional styling for certain ASCII code types
            if (ascii_type == 'hex') {
                DOM_cell_code.style.fontSize = '0.9rem';
            } else if (ascii_type == 'bin') {
                DOM_cell_code.style.fontSize = '0.6rem';
            }

            // Create second cell -- ASCII character
            const DOM_cell_char = new_row.insertCell(column + 1);
            DOM_cell_char.id = 'ascii_char_' + ascii_code;
            DOM_cell_char.className = ascii_cc ? 'char' : 'char pointer';
            DOM_cell_char.innerHTML = ascii_char;

            // Trigger 'copy_to_clipboard' on click
            DOM_cell_code.addEventListener('click', function(){
                const cell_id = 'ascii_code_' + ascii_code;
                copy_to_clipboard(cell_id, ascii_code)
            });

            if (!ascii_cc) {
                DOM_cell_char.addEventListener('click', function(){
                    const cell_id = 'ascii_char_' + ascii_code;
                    copy_to_clipboard(cell_id, ascii_char)
                });
            } else {
                const DOM_copy_tooltip = $("#copy-tooltip");
                const copy_tooltip_default = DOM_copy_tooltip.text();

                if (ascii_description != '') {
                    $("#" + DOM_cell_char.id).mouseenter(function() {
                        $("#copy-tooltip").text(ascii_description);
                    });
    
                    $("#" + DOM_cell_char.id).mouseleave(function() {
                        DOM_copy_tooltip.text(copy_tooltip_default);
                    });
                }
            }
        }
    }

    const DOM_bel_cell = document.getElementsByClassName("char")[56];
    const bel_class = DOM_bel_cell.className;
    DOM_bel_cell.className = bel_class + ' ' + 'shake';
}

// Changing ASCII range from '128' to '256' and vice versa
function toggle_ascii_range(button) {
    if (button === '256') {
        DOM_btn_128.style.backgroundColor = 'rgba(163, 185, 0, 0)';
        DOM_btn_256.style.backgroundColor = 'rgba(163, 185, 0, 1)';
        ascii_range = '256';
    } else if (button === '128') {
        DOM_btn_128.style.backgroundColor = 'rgba(163, 185, 0, 1)';
        DOM_btn_256.style.backgroundColor = 'rgba(163, 185, 0, 0)';
        ascii_range = '128';
    }

    create_table(ascii_type=ascii_type, ascii_range=ascii_range);
}

function buh() {
    DOM_quack_put.innerHTML = '&#x1F47B';

    $("td").each(function() {
        $( this ).addClass('shake-chunk shake-constant');
    })

    $("#copy-tooltip").text('aaaaaaahhhhhhhh!!!!!!');
}
