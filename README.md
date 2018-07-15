# ngx-pdf-parser for Angular
  
Best way for parse pdf document in Angular (on the user side).  
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.  

## Installation

### Clone example project from github  

The project will be cloned on your computer in ./pdf-parser-project folder.

`git clone https://github.com/vysheradugi4/pdf-parser-part.git`  

Go to project folder  
  
`cd pdf-parser-part`  
  
### Install dependencies  
  
`npm install`  
  
### Empty zlib installation   
  
Empty Compression Library installation if zlib not needed.  

Create folder `zlib` in `node_modules` folder  

Into `node_modules/zlib` folder create two files:  
  
    1. index.js (empty)  
    2. package.json  

Content of package.json:  
  
`{`  
`    "name": "zlib",`  
`    "version": "1.0.0"`  
`}`

We created empty not used zlib library for resolving dependencies of pdf.js  
  
Enjoy!  
  
## Integrate in exists project  
  
### Installation pdf.js part  
  
Install pdf.js library into dependencies section.  
   
`npm install --save pdfjs-dist`  
  
### Empty zlib installation     
  
Create folder `zlib` in `node_modules` folder  

Into `node_modules/zlib` folder create two files:  
  
    1. index.js (empty)  
    2. package.json  

Content of package.json:  
  
`{`  
`    "name": "zlib",`  
`    "version": "1.0.0"`  
`}`

We created empty not used zlib library for resolving dependencies of pdf.js

Put file `pdf.worker.entry.js` from `node_modules/pdfjs-dist/build/pdf.worker.entry.js` to `src/assets`  
  
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## License  
  
1. This project by MIT license.  
  
2. Angular is a development platform for building mobile and desktop web applications using Typescript/JavaScript and other languages.  
Homepage: https://github.com/angular/angular  
License: MIT License

3. PDF.js is a Portable Document Format (PDF) viewer that is built with HTML5.  
Homepage: https://github.com/mozilla/pdf.js
License: Apache License 2.0 

4. Zlib. A Massively Spiffy Yet Delicately Unobtrusive Compression Library
(Also Free, Not to Mention Unencumbered by Patents)
Homepage: https://zlib.net/
License: 