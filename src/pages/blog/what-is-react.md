---
title: "What is React?"
excerpt: "What is react?, why would you use it?, some prerequisites and your first react app"
cover: "/images/cover/what-is-react.jpg"
createdAt: "1st Jan 2023"
keywords: "What is react"
collection: "React"
---

## What exactly is React?

React is a library for building User Interfaces (UI).

React runs on a client as a Single Page Application (SPA), but can be used to build full stack apps by communicating with server/API (eg. MERN Stack).

React is often referred to as a front-end "framework" because it is capable and directly compared to frameworks such as Angular and Vue.

## Why would you use React?

- Structure the "view" layer of your application
- Reusable components with their state
- JSX - Dynamic mark-up
- Interactive UIs with - Virtual DOM
- Performance and Testing

## Prerequisites for React

You should have a good handle on JavaScript. I would not suggest jumping into React without learning JavaScript first.

- Data-Types, variables, functions, loops, spread and rest operators, etc.
- Promises and asynchronous programming
- Array methods like `forEach()` and `map()`
- Fetch API and make HTTP requests

## Creating New React App

For creating the New React App you have to install NodeJS first. You can install the latest version of NodeJS from this [link](https://nodejs.org/en/). NodeJS comes with a package manager pre-installed called [npm](https://www.npmjs.com/).

You can also install a chrome extension called React Developer Tools for debugging tools from this [link](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)

You can create a new react app by entering the following command in the terminals

```bash
npx create-react-app counter
cd counter
npm start
```

Here we are naming our app counter; you can call it anything you like. Also, our app is running at port 3000 you can go to http://localhost:3000 to view the newly created app.

Now in the code editor, the folder structure will be like this

```
counter/
    node_modules/
    pubilc/
        index.html
        favicon.ico
    src/
        App.css
        App.js
        App.test.js
        index.css
        index.js
        logo.svg
        reportWevVitals.js
        setupTests.js
    .gitignore
    package-lock.json
    package.json
    README.md
```

Here `src/index.js` is our JavaScript entry point

It would look something like this

```js
// src/index.js
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
```

Now as you can see we have imported the `App.js` file what it does is help in easily routing to different pages, etc.

Now in the `App.js` file remove all the code as we will be writing our code in this file.

First, we will create a function called `App` which will be our primary component.

```js
// src/App.js
const App = () => {
  return <h1>Counter</h1>;
};

export default App;
```

After that, we will import a react hook called `useState` from react which we will be using for creating the counter. What `useState` will do is it will hold the value of the count and it also gives a setter function to change the value of the count. _You can learn more about various react hooks from my other blog called [React Hooks](https://vatsalsakariya.vercel.app/blog/react-hooks)._

```js
// src/App.js
import { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);

  return <h1>Counter : {counter}</h1>;
};

export default App;
```

The above snippet will show the value of the counter on the page.

Now we will create three different functions to increment, decrement and reset the counter and add buttons on clicking that will execute these functions.

```js
// src/App.js
import { useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => setCounter((counter) => (counter += 1));
  const decrementCounter = () => setCounter((counter) => (counter -= 1));
  const resetCounter = () => setCounter(0);

  return (
    <>
      <h1>Counter : {counter}</h1>
      <hr />
      <p>
        <button onClick={decrementCounter}>-</button>
        <button onClick={incrementCounter}>+</button>
        <button onClick={resetCounter}>Reset</button>
      </p>
    </>
  );
};

export default App;
```

![Counter App](https://vatsal0601-portfolio-blog.herokuapp.com/uploads/counter_app_5fa5d62c08.png)

_Congratulations! you have successfully created your first react app._
