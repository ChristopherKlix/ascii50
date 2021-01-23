/* Parsing HTML from template files */
$("#header").load('/templates/header.html', function() {
    console.log('Parsed #header');
});

$("#credit").load('/templates/credit.html', function() {
    console.log('Parsed #credit');
});
