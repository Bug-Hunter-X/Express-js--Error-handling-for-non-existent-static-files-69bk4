# Node.js Express.js - Handling Non-Existent Static Files

This repository demonstrates a common error in Node.js Express.js applications when serving static files: the server throws an error if the requested file does not exist.

The `bug.js` file shows the problematic code. The `bugSolution.js` file provides a solution using error handling to gracefully handle such cases.

## Steps to reproduce the bug:

1. Clone this repository.
2. Run `npm install` to install Express.js.
3. Run `node bug.js`.
4. Access the server in your browser at `http://localhost:3000`.  You'll get an error because `index.html` doesn't exist.

## Solution:

The solution involves using the `express.static` middleware to serve static files and adding error handling to manage the cases where a file is not found.