# ascii50
:duck: ASCII chart for CS50

Final project for CS50x at Harvard
by Christopher Klix

Thanks a lot for amazing lectures to David J. Malan, Brian Yu, Colton Ogden & the entire CS50 staff!

__*NEW* Updated to v2.0__
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
1. [How to use](#how-to-use)
1. [Commands](#commands)
1. [Code explained](#code-explained)

## How to use
ASCII50 really is mainly a reference to look up ASCII codes.

### Copy to clipboard

You can click on any ASCII code or character (e.g. `64` or `@`) and it will copy it to your clipboard.
Some characters were created (back in the days) for the purpose of controlling devices.
Which is why they are called 'control characters' and are not printable and therefore not 'copy-able'.

Those include ASCII 0-31 & 127.

### Commands

You can run commands via the command line. You can find some available commands further down but there are also some shortcuts, easter eggs & secret commands.

More details: [Commands](#commands)


## Code explained
The app is currently only available on the web but I'm currently working on making it available as a macOS app as well.
Android & iOS/iPadOS might come as well (probably first as Electron-Wrapper and maybe native at some point).
As this is currently just a fun-project the progress of this undertaking depends on motivation and time :).

### Repo structure
The root directory contains **no** app-relevant code.

___

#### /root/
```sh
/root/
  ├─ app/
  │    └─ ...
  │
  ├─ web/
  │    └─ ...
  │
  ├─ .gitignoe
  ├─ LICENSE
  ├─ README.md (this file)
  ├─ scss_compiler.py
  └─ util.py
```
**`app/` The app directory is currently not in the repo but will be added as soon as the Electron app is available.**

**`web/` The web directory contains everything relevant to the web app.**

`.gitignore` The default git file that make sure no temporary files are getting uploaded to GitHub (e.g. `__pycache__/`).

`LICENSE` A simple license file.

`README.md` You are reading it right now.

`scss_compiler.py` A simple Python script that makes compiling SCSS to CSS easy during development.

`util.py` Utilities that are being used by the above Python script.

___

#### /web/
```sh
 /web/
  ├─ public/
  │    ├─ css/
  │    │    └─ ...
  │    │
  │    ├─ img/
  │    │    └─ ...
  │    │
  │    ├─ js/
  │    │    └─ ...
  │    │
  │    ├─ scss/
  │    │    └─ ...
  │    │
  │    └─ index.html
  │
  ├─ .firebaserc
  ├─ README.md
  └─ firebase.json
```
**`public/` This directory contains everything that is up on the host server.**

`.firebaserc` Tells Firebase the associated project (not relevant for the app).

`README.md` Find more detail about the logic about the app.

`firebase.json` The configuration file that tells Firebase what to deploy to the host server (not relevant for the app).

___

## Commands
As you might have realized, ASCII50 has its own command line... sort of.

**Commands**
```
[dec, decimal] # Changes ASCII codes into decimal (base-10)

[hex, hexadecimal] # Changes ASCII codes into hex (base-16)

[oct, octal] # Changes ASCII codes into octal (base-8)

[bin, binary] # Changes ASCII codes into binary (base-2)

[uhm?, help] # Shows a short 'tutorial' for the tool

[source, sourcecode, github] # Shows the source code

[matrix] # Follow the white rabbit

[buh] (👻)

... Secret commands you said?
```
