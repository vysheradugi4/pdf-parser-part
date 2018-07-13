# PdfParser

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

## Installation

1. Install pdf.js library into dependencies section.  
   
`npm install --save pdfjs-dist`  
  
  
2. Create folder `zlib` in `node_modules` folder  

Into `node_modules/zlib` folder create two files:  
  
    1. index.js (empty)  
    2. package.json  

3. Content of package.json:  
  
`{`  
`    "name": "zlib",`  
`    "version": "1.0.0"`  
`}`

We created empty not used zlib library for resolving dependencies of pdf.js

4. Put file `pdf.worker.entry.js` from `node_modules` `src/assets`




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
# pdf-parser-part
