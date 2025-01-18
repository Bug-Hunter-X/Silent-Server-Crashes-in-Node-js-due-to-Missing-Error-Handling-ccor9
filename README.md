# Silent Server Crashes in Node.js

This repository demonstrates a common, yet easily overlooked, error in Node.js server development: the lack of proper error handling.  Improper error handling can lead to silent server crashes, making debugging difficult.

## The Problem

The `bug.js` file contains a simple HTTP server.  However, it lacks any error handling.  If an error occurs during request processing (e.g., network issues, internal errors in your request handlers), the server will likely crash without providing any useful information in the logs.

## The Solution

The `bugSolution.js` file shows how to address this issue.  It uses `try...catch` blocks within the request handler to gracefully handle potential errors and logs them for debugging.