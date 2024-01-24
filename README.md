# BarkBistros

A simple Meteor project written in TypeScript and React that puts together a list of restaurants and shows them on your screen. You can then search for a restaurant by name, address, keyword or by checking if it's open 🍔🌟

Find the deployed version [HERE](https://barkbistros.meteorapp.com/)

### Features

-Mobile-fist UI approach with Material and Tailwind  
-Responsive design  
-Choose between list- and grid-view for seamless user experience  
-Single-page application - no loading times!

## Getting Started

**NOTE:** BarkBistros runs on Meteor v.2, which uses Node engine v.<=14. If you encounter any issues with running the app, ensure you're using the correct Node version. More information [here for Mac and/or Linux](https://github.com/nvm-sh/nvm) and [here for Windows](https://github.com/coreybutler/nvm-windows)

To run the app locally, `cd` into the /app directory and run:

```bash
$ cd app
$ npm i
```

In the same directory, run:

```bash
$ meteor
```

This will start the app on port 3000 and start a local MongoDB collection. If you want to see the MongoDB connection string, type

```bash
$ meteor mongo
```

If you would like to run the app on the hosted database, kill the app and start it again with:

```bash
$ npm run start-local

```

This will connect to the MongoDB Atlas Cluster (and which connection string I have conveniently left for everybody to see in the package.json file 🤡)

## Running the Tests

### Unit/Integration tests

The tests in tests/api, /startup and /utils run on Mocha through the meteor:mocha dricker package. To start them, run

```bash
npm run test
```

There is some basic testing for the method(s), publication(s) and the loading of fixtures.

### End-to-end Testing

The tests in tests/cypress are some basic UI testing for seeing that the elements render on the page and that the correct results appear when the user searches for a restaurant. To run it through the Cypress UI, run

```bash
$ npm run cypress:ui
```

or, if you prefer to see the tests in the console,

```bash
$ npm run cypress:headless
```

## Tech Stack

-TypeScript  
-Meteor.js  
-React  
-MongoDB  
-Material UI  
-Tailwind.css
-Cypress
-Mocha
-Chai
