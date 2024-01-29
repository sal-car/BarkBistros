# BarkBistros 🐕

A simple Meteor project written in TypeScript and React that puts together a list of restaurants and shows them on your screen. You can then search for a restaurant by name, address, keyword or by checking if it's open! 🍔🌟

🚀 Find the deployed version [HERE!](https://barkbistros.meteorapp.com/)

**Any bugs or issues, do let me know!**

### Features

-📱 Mobile-first UI approach with Material and Tailwind  
-🌐 Responsive design  
-🔲 Choose between list- and grid-view for a seamless user experience  
-🔄 Single-page application - no loading times!

## Folder structure

-`db`: contains the pre-loaded data (8 restaurants) and the Restaurant schema.  
-`server`: main server entry-point, runs the scripts to load the fixtures and run the publications.  
-`client`: main client entry-point, contains the fonts, main styling, and renders the App.  
-`imports/startup`: scripts for startup procedure; inserts the fixtures into the Restaurant collection and publishes them so they're available to the client.  
-`imports/api`: code used by both server and client. Contains the Restaurant Collection connection to Mongo, global interfaces, server and client methods to insert and search for restaurants (POST requests), and the publication to find all restaurants (GET request).  
-`imports/ui/containers`: Smart components containing the frontend logic; searching for restaurant, filtering them based on opening times, switching between grid/list view.  
-`imports/ui/components`: Dumb reusable components.  
-`imports/utils`: Utilities for filtering results based on search and opening times.  
-`tests`: tests for utilities functions, and in `/cypress`, e2e testing to check the rendering of components and app functionality.  
-`public`: restaurant images.

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

The tests in tests/api, /startup and /utils run on Mocha through the meteor:mocha driver package. To start them, run:

```bash
npm run test
```

There is some basic testing for the method(s), publication(s) and the loading of fixtures.

### End-to-end Testing

The tests in tests/cypress are some basic UI testing for seeing that the elements render on the page and that the correct results appear when the user searches for a restaurant. To run it through the Cypress UI, **first run the app using the meteor command above**, and then run:

```bash
$ npm run cypress:ui
```

or, if you prefer to see the tests in the console:

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
