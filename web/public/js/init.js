/* Run all initializer functions */

// Global variables
let ascii_range;

// References
const command_line = document.getElementById('command-line');
const table = document.getElementById('table');
const btn_128 = document.getElementById('btn-128');
const btn_256 = document.getElementById('btn-256');
const duck = document.getElementById("duck");
const quack_put = document.getElementById("quack-put");
const copied = document.getElementById("copied");

// Event Listeners
btn_128.addEventListener('click', toggle_ascii_range);
btn_256.addEventListener('click', toggle_ascii_range);
duck.addEventListener('click', quack);

// Run initial table setup
// & table logic w/ event listener
init_table();
// Run command line logic w/ event listener
init_command_line();
// Run duck logic w/ event listener
init_duck();

// Easter egg
console.log('Hey. Yeah, you...')
