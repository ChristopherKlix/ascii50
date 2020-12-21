function help(cmd) {
    $("#nav-wrapper").css('visibility', 'hidden');
    DOM_table.innerHTML = '';
    
    const html_raw = [
        '<h2>' + cmd + '... Good you ask!</h2>',
        '<p>Let me quickly explain how this tool works.</p>',
        '<hr>',
        '<h3>Copy to clipboard</h3>',
        '<p>Click on any ASCII code or character to copy it to your clipboard. ',
        'Some ASCII codes are so-called \'control character\' and are not printable and therefore ',
        'not copy-able. They were used back in the days to control physical machines. ',
        'Instead of being able to copy these, you can find a short description of each control character when hovering over it.</p>',
        '<p>Control characters are 0-31 & 128.</p>',
        '<hr>',
        '<h3>Command-line</h3>',
        '<p>You can enter commands to interact with the tool. ',
        'For example, you can change the type in which the ASCII code is displayed from decimal to hexadecimal.</p>',
        '<div class="pre-wrapper">',
        '<pre>$ dec   <span># decimal</span></pre>',
        '<pre>$ hex   <span># hexadecimal</span></pre>',
        '<pre>$ oct   <span># octal</span></pre>',
        '<pre>$ bin   <span># binary</span></pre>',
        '</div>',
        '<p><i>If you find a mistake in the codes, please report an issue on GitHub. Thanks!</i></p>',
        '<hr>',
        '<h3>Source code & documentation</h3>',
        '<p>You can find the sourcecode to this project on my GitHub. ',
        'Typing [source] in the command-line will redirect you to the Repo.</p>',
        '<div class="pre-wrapper">',
        '<pre>$ source   <span># or github</span></pre>',
        '</div>',
        '<hr>',
        '<h3>Easter Eggs</h3>',
        '<p>What might that be? ',
        'If I would\'ve written this tool, I\'d had put some hints into the official doc of this project on GitHub.</p>',
        'What\'d you say? I DID write this tool???',
        '<hr>'
    ]

    let html = '';
    for (const index in html_raw) {
        html += html_raw[index];
    }

    DOM_text.innerHTML = html;
}
