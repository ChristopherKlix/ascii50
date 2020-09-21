# ascii50
:duck: ASCII chart for CS50

Final project for CS50x at Harvard
by Christopher Klix

Thanks a lot for amazing lectures to David J. Malan, Brian Yu, Colton Ogden & the entire CS50 staff!

![GitHub release (latest by date)](https://img.shields.io/github/v/release/ChristopherKlix/ascii50?style=for-the-badge)

![GitHub issues](https://img.shields.io/github/issues/ChristopherKlix/ascii50?style=for-the-badge)

![GitHub](https://img.shields.io/github/license/ChristopherKlix/ascii50?style=for-the-badge)

Currently live on https://ascii50.firebaseapp.com or https://ascii50.web.app

Both are hosted and secured by [Google Firebase](https://firebase.google.com).

**Please send feature requests or bug reports via the [Google Form](https://forms.gle/2xBZcCashPk7kkgf9)!**

## Table of contents
1. [Features](#features)
1. [Code explained](#code-explained)
1. [HTML](#html)
1. [SCSS](#scss)
1. [Javascript](#javascript)
1. [Regular Expressions](#regular-expressions)
1. [Commands](#commands)

## Features
ASCII50 really is mainly a reference to look up ASCII codes.

**Copy to clipboard**

You can click on any char and it will copy either the integer or char to your clipboard

**Commands**

You can run commands via the command line. You can find some available commands further down but there are also some shortcuts, easter eggs & secret commands.

The command line currently only supports the `ascii50` programm which takes one argument.

More detail: [Commands](#commands)

**Upcoming features**
- [x] copy int or char to clipboard
- [ ] explanations for ASCII codes 0-32 & 128 (control characters)
- [ ] type instant conversion (text field to type in 'A' -> duck says '65')
- [ ] maybe interactive duck? - are there APIs for GPT or chatbots?
- [ ] syntax references - converting int to ASCII char in Python, JS etc.


## Code explained
**Don't be intimidated!** The main content is only in **4 files**:
* index.html
* main.css
* main.js
* ddb.png (the duck)

We use **SCSS** as a pre-processor for CSS. It allows for easier CSS typing and compiles to vanilla CSS before deploying.
* main.scss (compiles to main.css)
* main.css.map (by-product of compilation)

What about the rest?
ASCII50 uses **Google's Firebase** platform for hosting.
It adds a couple of files that allows for using other Firebase services like Auth & Cloud Functions (which we currently don't actually use).
* .firebaserc
* firebase.json

And then there is **Github's** files:
* .gitignore
* README.md (which you are currently reading)

## HTML
The **index.html** file in itself is pretty simple.

By convention, the entire content is wrapped into a `<div id="wrapper">`. It technically is a bit redundant, as `<body>` already does that, but it allows for some more control in CSS for example.

Inside the `<div id="wrapper">` are **three sections**.
* `<div id="header">`
* `<table id="table">`
* `<div id="copyright">`

### header (not `<head>`)
This section contains everything **above** the table. From the title, to the command-line and the duck.

Each sub-section is wrapped into a container `<div>` with a distinct id.
This way, both, CSS and JS can easily reference each individual element.

### table
The table contains... well, nothing really.

```
...
<!-- TABLE -- empty after DOM loaded, JS fills dynamically -->
<table id="table">
</table>
...
```

The **main.js** file is executed after the DOM has been loaded and populates the table.
This simply means, that it creates `<tr>` and `<td>` tags and inserts integers and strings.

See [Javascript](#javascript) for more detail.

### copyright
Well, each site needs a copyright line.

## SCSS
**main.scss** is pre-processed into **main.css**
The file is only included for completeness.

Both **main.scss** & **main.css** are kept up to date.

You **DON'T** need the main.scss for the website to work.
Think about it the same way as with hello.c and hello*.

SCSS allows you for example to store rgb values or pixel values in variables at the top and SCSS will replace them within your CSS lines when it is compiled.

It also allows for nesting elements inside of each other.

**SCSS**
```scss
$dark: rgb(48, 49, 48);

#element {
    background-color: $dark;
    
    p {
        color: #ffffff;
    }
}
```
**CSS**
```scss
#element {
    background-color: rgb(48, 49, 48);
}

#element p {
    color: #ffffff;
}
```

## Javascript
Alright, now it is getting fussy.

The JS code in this project is not focused on being clean and super efficient but rather making use of techniques and best practices learned in CS50.

It incorporates `Regular Expressions`, `User Input`, `for loops`, `extracting functions` and much more.

The `<table>` in the **index.html** is rendered empty. After the DOM is loaded, **main.js** populates it with columns and rows.

**HTML**
```html
<table id="table">
</table>
```
**JS**
```javascript
// get reference to HTML table tag
let table = document.getElementById("table");

// initialize table mode variable
// it is used by functions to for example copy a dec || hex integer
let mode = 'decimal';

/* SETUP TABLE */
function setup_table(command_mode) {

    // setting mode to input if input conforms to options
    if (command_mode.search(/^decimal|hexadecimal$/) != -1) {
        mode = command_mode;
    } else {
        return;
    }
    ...
}
```

This way, the table can be easily re-rendered to display hex codes instead of decimal codes when the user enteres a command.

As you can see, the `setup_table(command_mode)` function uses `Regular Expressions` to check if the argument conforms to possible modes.

Now, we won't go over every implementation detail. If you are interested, you can go into the source code yourself. It is very well documented with comments.

If you have question, feel free to ask me personally and not the CS50 staff, as they are not involved in this project.

### Populating the table
After we initialized `ascii_code_n` & `ascii_char_n` to empty arrays, we iterate over `0-127` (128 ASCII chars) and populate one column after the other.
Instead of hardcoding the `chars`, we convert the current `integer` (ASCII code) into the corresponding ASCII char.

**JS**
```javascript
// inside the setup_table() function
...

    for (let number = 0; number < 128; number++) {
        if (...) {
        
            ...
            
        } else if (number < 64) {
            if (mode === 'hexadecimal') {
                let hex = '0x'.concat(number.toString(16));
                ascii_code_3.push(hex);
            } else {
                ascii_code_3.push(number);
            }
            let char = String.fromCharCode(number);
            ascii_char_3.push(char);
        } else if (...) {
        
                ...
                
        }
    }

...
```
`number.toString(16)` converts an integer into a hexadecimal string. `65` becomes `41`.

By convention `'0x'.concat(...)` converts `65` into a more readable format `0x41`.

## Regular Expressions
Yeah, what everybody was waiting for!

ASCII50 makes use of **RE** for processing the command-line commands.
For example, triggering HEX mode does not only work with `ascii50 hexadecimal` but also `ascii50 hex`.

Or in **RE** words: `/^ascii50\s+hex(adecimal)?$/i`

Check out the sourcecode for `main.js` to see the **RE** for getting the sourcecode.

A very helpful tool for figuring out **RE** is https://regex101.com.

## Commands
As you might have realized, ASCII50 has its own command line... sort of.

**Commands**
```
ascii50 hexadecimal (changes ASCII codes into hex)

ascii50 decimal (changes ASCII codes into decimal)

ascii50 sourcecode (shows the source code)

ascii50 matrix (blue pill or red pill?)

... secret commands you said?
```
