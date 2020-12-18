# ascii50
:duck: ASCII chart for CS50

Final project for CS50x at Harvard
by Christopher Klix

Thanks a lot for amazing lectures to David J. Malan, Brian Yu, Colton Ogden & the entire CS50 staff!

*NEW* Updated to v2.0
<span style="background-color: #E6FFED; color: #22863A">`New Features`</span>
* ASCII 128-255 added (incl. ©, æ, █)
* ASCII codes for 'octal' & 'binary' added
* Improved logic (JS)
* Improved UI & UX (hopefully)
* Bug fixes
* Added Easter Eggs

![GitHub release (latest by date)](https://img.shields.io/github/v/release/ChristopherKlix/ascii50?style=for-the-badge)

![GitHub issues](https://img.shields.io/github/issues/ChristopherKlix/ascii50?style=for-the-badge)

![GitHub](https://img.shields.io/github/license/ChristopherKlix/ascii50?style=for-the-badge)

Currently live on https://ascii50.firebaseapp.com or https://ascii50.web.app

Both are hosted and secured by [Google Firebase](https://firebase.google.com).

**Please send feature requests or bug reports!**

## Table of contents
1. [How to use](#features)
1. [Code explained](#code-explained)
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

`number.toString(16)` converts an integer into a hexadecimal string. `65` becomes `41`.

By convention `'0x'.concat(...)` converts `65` into a more readable format `0x41`.



## Commands
As you might have realized, ASCII50 has its own command line... sort of.

**Commands**
```
[hex, hexadecimal] (changes ASCII codes into hex)

[dec, decimal] (changes ASCII codes into decimal)

[source, sourcecode, github] (shows the source code)

[matrix] (follow the white rabbit)

[buh] (👻)

... secret commands you said?
```
