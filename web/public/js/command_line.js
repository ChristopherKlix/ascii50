/* COMMAND LINE */

// Command-line logic
function init_command_line() {
    // Regex
    const re_decimal = /^(ascii50\s+)?dec(imal)?$/i;
    const re_hexadecimal = /^(ascii50\s+)?hex(adecimal)?$/i;
    const re_octal = /^(ascii50\s+)?oct(al)?$/i;
    const re_binary = /^(ascii50\s+)?bin(ary)?$/i;
    const re_source = /^(ascii50\s+)?((source(code)?)|(git(hub)?))$/i;
    const re_matrix = /^(ascii50\s+)?matrix$/i;
    const re_buh = /^buh$/i;
    const re_uhm = /^uhm(\?)?$/i;
    const re_help = /^help$/i;

    // Logic
    DOM_command_line.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            if (DOM_command_line.value.search(re_decimal) != -1) {
                create_table('dec');
                change_greeting('72 73 33');
            } else if (DOM_command_line.value.search(re_hexadecimal) != -1) {
                create_table('hex');
                change_greeting('0x48 0x49 0x21');
            } else if (DOM_command_line.value.search(re_octal) != -1) {
                create_table('oct');
                change_greeting('110 111 41');
            } else if (DOM_command_line.value.search(re_binary) != -1) {
                create_table('bin');
                change_greeting('01001000 01001001 00100001');
            } else if (DOM_command_line.value.search(re_source) != -1) {
                window.location.href = 'https://google.com';
            } else if (DOM_command_line.value.search(re_matrix) != -1) {
                matrix();
            } else if (DOM_command_line.value.search(re_buh) != -1) {
                buh();
            } else if (DOM_command_line.value.search(re_uhm) != -1) {
                help(cmd=DOM_command_line.value);
            } else if (DOM_command_line.value.search(re_help) != -1) {
                help(cmd=DOM_command_line.value);
            }
    
            // Clear command line
            DOM_command_line.value = '';
        }
    });
}

function change_greeting(text) {
    DOM_greeting.innerHTML = text;
}
