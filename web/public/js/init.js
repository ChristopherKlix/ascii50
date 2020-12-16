/* Run all initializer functions */

// Global variables
// The state of the current ASCII range & type
let ascii_range;
let ascii_type;

// References
const command_line = document.getElementById('command-line');
const table = document.getElementById('table');
const btn_128 = document.getElementById('btn-128');
const btn_256 = document.getElementById('btn-256');
const duck = document.getElementById("duck");
const quack_put = document.getElementById("quack-put");
const copied = document.getElementById("copied");
const greeting = document.getElementById("greeting");

// Event Listeners
btn_128.addEventListener('click', function(){
    toggle_ascii_range('128')}, false);
btn_256.addEventListener('click', function(){
    toggle_ascii_range('256')}, false);
    
duck.addEventListener('click', quack);

// Run command line logic w/ event listener
init_command_line();
// Run duck logic w/ event listener
init_duck();
// Run initial table setup
// & table logic w/ event listener
init_table();

// Easter egg
console.log('Hey. Yeah, you...')
