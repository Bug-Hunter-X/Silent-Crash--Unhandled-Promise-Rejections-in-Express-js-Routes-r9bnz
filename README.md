# Silent Crash: Unhandled Promise Rejections in Express.js

This repository demonstrates a common issue in Express.js applications: silent crashes due to unhandled promise rejections within asynchronous route handlers.  The `bug.js` file showcases the problematic code, while `bugSolution.js` provides a corrected version with proper error handling.

## Problem

Asynchronous operations (like database queries or API calls) are frequent in Express.js. If these operations fail and the error isn't properly handled, the application might crash silently, making debugging difficult. The provided example uses `doSomethingAsync()` as a placeholder for such an operation.

## Solution

The solution involves using a `catch` block within the `.then()` chain to handle potential errors.  The improved version also includes centralized error handling using a global error handler middleware, providing more robust and informative error reporting.

## How to reproduce the bug
1.  Clone this repository.
2.  Navigate to the directory.
3.  Run `node bug.js`.
4.  Simulate a failure in `doSomethingAsync` (e.g., throw an error). Observe that the server crashes without clear error messages.
5.  Run `node bugSolution.js` to see the improved, more robust version.