# Hello there

This is an simple calculator app build with Angular 14.

## What is used here

* Lazy loading => used to load the calculator.module

* ngrx/store and ngrx/effects => to manage the the state of the app and manage the side effects / logic around each operation

* NestJS backend => to compute the expression result

## How to run the app

```bash
git clone git@github.com:radko94/simple-calculator.git && cd calculator && npm i && ng serve
```

or

```bash
git clone https://github.com/radko94/simple-calculator.git && cd calculator && npm i && ng serve
```

Then you need to go to https://github.com/radko94/simple-calculator-be to download and run the backend
