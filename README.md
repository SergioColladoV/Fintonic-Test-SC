# Fintonic-Test

Technical Test Fintonic - Questions

## Installation

Use the package manager [npm](https://www.npmjs.com/get-npm) in the folder of the project to install dependencies.

```bash
npm install
```

## Usage

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Author

* **Sergio Collado** - [SergioColladoV](https://github.com/SergioColladoV)

## TODOs

* Avoid FontAwesome and use SVG icons to reduce FontAwesome script loading time.
* Avoid using dependencies to decode HTML5 Entities that the API returns to improve performance. Make the decoding with pure javascript.
* Make pagination works with a maximum of 50 API results (5 Pages)
* Put order of IDs into operation
* When filtering, call the API to get results of the entire API, not just the current page