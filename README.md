# ascii50
ASCII chart for CS50

Final project for CS50x at Harvard
by Christopher Klix

:duck:

Currently in beta version
## Table of contents
1. [Features](#features)
1. [Code explained](#code-explained)
1. [SCSS](#scss)
1. [Commands](#commands)

## Features
ASCII50 really is mainly a reference to look up ASCII codes.

**Copy to clipboard**

You can click on any char and it will copy either the integer or char to your clipboard

**Commands**

You can run commands via the command line. You can find some available commands further down but there are also some shortcuts, easter eggs & secret commands.

The command line currently only supports the `ascii50` programm which takes one argument.

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

## SCSS
**main.scss** is pre-processed into **main.css**
The file is only included for completeness.

Both **main.scss** & **main.css** are kept up to date.

You **DON'T** need the main.scss for the website to work.
Think about it the same way as with hello.c and hello*.

SCSS allows you for example to store rgb values or pixel values in variables at the top and SCSS will replace them within your CSS lines when it is compiled.

**SCSS**
```scss
$dark: rgb(48, 49, 48);

#element {
    background-color: $dark;
}
```
**CSS**
```scss
#element {
    background-color: rgb(48, 49, 48);
}
```

## Commands
As you might have realized, ASCII50 has its own command line... sort of.

**Commands**
```
ascii50 hexadecimal (changes ASCII codes into hex)

ascii50 decimal (changes ASCII codes into decimal)

ascii50 sourcecode (shows the source code)

ascii50 matrix (blue pill or red pill?)

... secret commands are there as well?
```
