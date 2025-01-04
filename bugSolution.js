const express = require('express');
const app = express();

function doSomethingAsync() {
  // Simulate an asynchronous operation that might fail
  return new Promise((resolve, reject) => {
    // Simulate a failure condition
    const success = Math.random() < 0.5; 
    setTimeout(() => {
      if (success) {
        resolve('Success!');
      } else {
        reject(new Error('Something went wrong!'));
      }
    }, 1000);
  });
}

app.get('/', (req, res, next) => {
  doSomethingAsync()
    .then(result => res.send(result))
    .catch(next); // Pass the error to the error handling middleware
});

// Global error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(3000, () => console.log('Server started'));