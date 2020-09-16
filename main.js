// get reference to HTML table tag
let table = document.getElementById("table");

// initialize table mode
let mode = 'decimal';



/* SETUP TABLE */

function setup_table(command_mode) {

    // setting mode to input if input conforms to options
    if (command_mode.search(/^decimal|hexadecimal$/) != -1) {
        mode = command_mode;
    } else {
        return;
    }

    // cleaning table to redraw
    table.innerHTML = '';

    // arrays of ASCII codes
    let ascii_code_0 = [];
    let ascii_code_1 = [];
    let ascii_code_2 = [];
    let ascii_code_3 = [];
    let ascii_code_4 = [];
    let ascii_code_5 = [];
    let ascii_code_6 = [];
    let ascii_code_7 = [];

    // arrays of ASCII chars
    let ascii_char_0 = [];
    let ascii_char_1 = [];
    let ascii_char_2 = [];
    let ascii_char_3 = [];
    let ascii_char_4 = [];
    let ascii_char_5 = [];
    let ascii_char_6 = [];
    let ascii_char_7 = [];

    for (let number = 0; number < 128; number++) {
        if (number < 16) {
            if (mode === 'hexadecimal') {
                let hex = '0x'.concat(number.toString(16));
                ascii_code_0.push(hex);
            } else {
                ascii_code_0.push(number);
            }
        } else if (number < 32) {
            if (mode === 'hexadecimal') {
                let hex = '0x'.concat(number.toString(16));
                ascii_code_1.push(hex);
            } else {
                ascii_code_1.push(number);
            }
        } else if (number < 48) {
            if (mode === 'hexadecimal') {
                let hex = '0x'.concat(number.toString(16));
                ascii_code_2.push(hex);
            } else {
                ascii_code_2.push(number);
            }
            let char = String.fromCharCode(number);
            ascii_char_2.push(char);
        } else if (number < 64) {
            if (mode === 'hexadecimal') {
                let hex = '0x'.concat(number.toString(16));
                ascii_code_3.push(hex);
            } else {
                ascii_code_3.push(number);
            }
            let char = String.fromCharCode(number);
            ascii_char_3.push(char);
        }
        else if (number < 80) {
            if (mode === 'hexadecimal') {
                let hex = '0x'.concat(number.toString(16));
                ascii_code_4.push(hex);
            } else {
                ascii_code_4.push(number);
            }
            let char = String.fromCharCode(number);
            ascii_char_4.push(char);
        } else if (number < 96) {
            if (mode === 'hexadecimal') {
                let hex = '0x'.concat(number.toString(16));
                ascii_code_5.push(hex);
            } else {
                ascii_code_5.push(number);
            }
            let char = String.fromCharCode(number);
            ascii_char_5.push(char);
        } else if (number < 112) {
            if (mode === 'hexadecimal') {
                let hex = '0x'.concat(number.toString(16));
                ascii_code_6.push(hex);
            } else {
                ascii_code_6.push(number);
            }
            let char = String.fromCharCode(number);
            ascii_char_6.push(char);
        } else {
            if (mode === 'hexadecimal') {
                let hex = '0x'.concat(number.toString(16));
                ascii_code_7.push(hex);
            } else {
                ascii_code_7.push(number);
            }
            let char = String.fromCharCode(number);
            ascii_char_7.push(char);
        }
    }

    let numbers = [];
    numbers.push(ascii_code_0, ascii_code_1, ascii_code_2, ascii_code_3);
    numbers.push(ascii_code_4, ascii_code_5, ascii_code_6, ascii_code_7);
    
    // parsing in 'control character' placeholders
    ascii_char_0 = ['NUL', 'SOH', 'STX', 'ETX', 'EOT', 'ENQ', 'ACK', 'BEL', 'BS', 'HT', 'LF', 'VT', 'FF', 'CR', 'SO', 'SI'];
    ascii_char_1 = ['DLE','DC1','DC2','DC3','DC4','NAK','SYN','ETB','CAN','EM','SUB','ESC','FS','GS','RS','US'];
    
    // dynamically placing chars via ASCII conversion above
        //ascii_char_2 = ['SP', '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/'];
        //ascii_char_3 = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ':', ';', '<', '=', '>', '?'];
        //ascii_char_4 = ['@', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O'];
        //ascii_char_5 = ['P', 'Q', 'R', ...];
        //ascii_char_6 = ['`', 'a', 'b', ...];
        //ascii_char_7 = ['p', 'q', 'r', ...];

    // replacing chars w/ 'control character' placeholders
    ascii_char_2[0] = 'SP'; // ascii 32 for 'space'
    ascii_char_7[15] = 'DEL'; // ascii 127 for 'delete'

    // create array with ALL ascii columns
    let ascii = [];
    ascii.push(ascii_char_0, ascii_char_1, ascii_char_2, ascii_char_3);
    ascii.push(ascii_char_4, ascii_char_5, ascii_char_6, ascii_char_7);
    
    const columns = 16;
    
    // create new rows and fill with content
    for (let i = 0; i < columns; i++) {

        // create a new row
        let new_row = table.insertRow(-1);

        // iterate over each column
        for (let column = 0; column < columns; column += 2) {
            // create first cell -- ASCII code
            cell_0 = new_row.insertCell(column) // create cell
            cell_0.className = 'number'; // assign class to <td>
            cell_0.innerHTML = numbers[column / 2][i]; // parse in value

            // create second cell -- ASCII haracter
            cell_1 = new_row.insertCell(column + 1) // create cell
            cell_1.id = 'ascii_' + numbers[column / 2][i] // assign id to <td>
            cell_1.className = 'char'; // assign class to <td>
            cell_1.innerHTML = ascii[column / 2][i]; // parse in value

            // add event listener to listen for mouse click
            // trigger 'copy_to_clipboard' on click
            cell_1.addEventListener('click', function(){copy_to_clipboard('ascii_' + numbers[column / 2][i])});
        }
    }
}

/* end */



/* COMMAND LINE */

// get reference to input "command-line"
let command_line = document.getElementById("command-line");
command_line.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        // regular expressions!!!!!! yay...
        if (command_line.value.search(/^ascii50\s+dec(imal)?$/i) != -1) {
            // set ASCII code to decimals
            setup_table('decimal');
        } else if (command_line.value.search(/^ascii50\s+hex(adecimal)?$/i) != -1) {
            // set ASCII code to hexadecimals
            setup_table('hexadecimal');
        } else if (command_line.value.search(/^ascii50\s+(source(code)?)|(git(hub)?)$/i) != -1) {
            // redirect to Git rep
            window.location.href = "";
        } else if (command_line.value.search(/^ascii50\s+matrix$/i) != -1) {
            matrix();
        }

        // clear command line
        command_line.value = '';
    }
});

/* end */



/* COPY TO CLIPBOARD */

function copy_to_clipboard(id) {
    // get reference to <td> that was clicked
    let cell = document.getElementById(id);

    // generate a decimal integer
    let dec = (cell.innerText).charCodeAt(0);
    // generate a hexadecimal integer
    let hex = '0x'.concat(parseInt((cell.innerText).charCodeAt(0), 10).toString(16));

    // assigning previous dec or hex to int w/ tenary operator
    let int = mode === 'decimal' ? dec : hex;

    // assign either int or char w/ tenary operator
    let clipboard = copy_mode === 'int' ? int : cell.innerText;

    // actually copying variable clipboard to the clipboard
    navigator.clipboard.writeText(clipboard).then(function() {
        // clipboard successfully set
        // copied function to trigger duck
        copied(clipboard)
    });

    // animation of cell flashing green
    cell.style.transition = 'color 0.1s';
    cell.style.color = 'rgb(163, 185, 0)';
    window.setTimeout(function(){
        cell.style.transition = 'color 1s';
        cell.style.color = 'rgb(255, 255, 255)';
    }, 1000)
}

/* end */



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

// triggers 'copied' next to quark-put
function copied(clipboard) {
    // get reference to 'copied' element
    let copied = document.getElementById("copied");

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

/* end */



/* COPY MODE */

// state for copy mode -- either 'int' or 'char'
let copy_mode = 'int';

// get reference to menu items for copy mode
let copy_mode_int = document.getElementById("copy-mode-int");
let copy_mode_char = document.getElementById("copy-mode-char");

// add event listener for menu items
copy_mode_int.addEventListener('click', change_copy_mode);
copy_mode_char.addEventListener('click', change_copy_mode);

// changing copy mode from 'int' to 'char' or vice versa
function change_copy_mode() {
    if (copy_mode === 'int') {
        // change colors in UI
        copy_mode_int.style.backgroundColor = 'rgba(163, 185, 0, 0)';
        copy_mode_char.style.backgroundColor = 'rgba(163, 185, 0, 1)';
        // change copy mode state
        copy_mode = 'char';
    } else {
        // change colors in UI
        copy_mode_int.style.backgroundColor = 'rgba(163, 185, 0, 1)';
        copy_mode_char.style.backgroundColor = 'rgba(163, 185, 0, 0)';
        // change copy mode state
        copy_mode = 'int';
    }
}

/* end */



/* run initial table setup */
setup_table('decimal');
