# Japanese Whisky Database Demo

> A prototype/demo for a database manager

- Built with Vue.js, Webpack, Babel, Bootstrap, NodeJS, and npm
- Hosted on AWS and Firebase

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).

## The design so far...

### main.js

This is the entry point of the App. Here Vue is initialized, as well as global options and objects.

### App.vue

This is the main 'root' vue component that initializes the other components. It has a function to add seed data currently.
This will be extended to be where the db interfaces with the UI


### AppTableView.vue

This is the component that renders the table with all the data. It serves as the view of the data.


### AppTableEdit.vue

This is the component in charge of editing the data in the table, and saving these changes back to the db (via App.vue)

### Login.vue

This is the login page that is the landing. Logging in destroys this component from the DOM.


#### Last updated: 29 Jan 2018
