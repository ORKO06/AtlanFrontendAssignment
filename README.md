<h1 align="center">
    React SQL Editor - Atlan Frontend Engineering Internship Assignment
</h1>

<h3 align="center">
    Built using React and Tailwind
</h1>

## Introduction

The given application is developed as a task for Atlan. It enables users to run SQL queries in an online editor, and analyze the output obtained as a result of running the queries.


## View Demo on the Deployed Site

<p>Click https://atlan-online-sql-editor.netlify.app/ to view the deployed site</p>

## Features

Users can get data of any of the predefined SQL queries either by using SQL Editor or Sidebar Menu.\
Users can search for a particular data among many records using the search bar.\
Users can download the output window table as CSV, with just a single click.

## Predefined SQL Queries

- `Select * from Customers;`,
- `Select * from Orders;`,
- `Select * from Products;`

## ⚙️ NPM Modules Used

- `"@uiw/react-codemirror": "^4.21.9",` - To make the code editor
- `react-papaparse": "^4.1.0,` - To show the output as a simple CSV table
- `"react-dom": "^18.2.0",` - To interact with React's virtual DOM

## Page Load Time
GTmetrix: The fully loaded time is 563 ms, with the first contentful paint at 469 ms.

web.dev: The load time according to web.dev is 2.2 seconds. The site also scores 96 points in performance and 100 points in best practices. The exact metrics are:

- First Contentful Paint: 0.4s
- Speed Index: 1.5s
- Largest Contentful Paint: 0.6s
- Total Blocking Time: 0ms
- Cumulative Layout Shift: 0.027
<img width="1440" alt="Screenshot 2023-08-02 at 8 34 29 AM" src="https://github.com/ORKO06/AtlanFrontendAssignment/assets/74568847/343c6d13-133e-424e-95a3-15021790cf63">



## Steps I took to optimize the page load time

- The website is made responsive to a great extent even.
- Minimal dependencies have been used for the creation of the page.
- Keeping the number of state changes as low as possible.
- Used Lighthouse DevTools Extension to find the performance issues and fix them using their actionable suggestion.
- Used netlify that has world-class CDN technology that reduces waiting time even further.

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.

### `npm run build`

Builds the app for production to the `src/dist` folder.
