/* Run all initializer functions */
console.log('Started executing init.js');

// Defines the scripts to load in order
const scripts = [
    'assembler.js',
    'globals.js',
    'json.js',
    'clipboard.js',
    'duck.js',
    'command_line.js',
    'help.js',
    'table.js'
];

var deferred = new $.Deferred();
var promise = deferred.promise();

// Iterate over each script and load it
for (const i in scripts) {
    (function() {
        promise = promise.then(function() {
            return loadScript(scripts[i]);
        });
    })();
}

function loadScript(script_url){
    return $.getScript('/js/' + script_url, function() {
        console.log(script_url + ' loaded');
    });
}

promise.done(function() {
    // Event Listeners
    DOM_btn_128.addEventListener('click', function(){
        toggle_ascii_range('128')}, false);
    DOM_btn_256.addEventListener('click', function(){
        toggle_ascii_range('256')}, false);
        
    DOM_duck.addEventListener('click', quack);

    // Run command line logic w/ event listener
    init_command_line();
    // Run duck logic w/ event listener
    init_duck();
    // Run initial table setup
    // & table logic w/ event listener
    init_table();

    console.log('Finished executing init.js');

    // Easter egg
    console.log('Hey. Yeah, you...');
});

// Resolve the deferred object and trigger the callbacks
deferred.resolve();
