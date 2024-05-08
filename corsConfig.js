const cors = require('cors');
const express = require('express');

const app = express();
const PORT = 9876;

app.use(cors({
  origin: 'http://localhost:9876'
}));

app.listen(PORT, () => {
  console.log(`CORS enabled: allowing requests from http://localhost:9876`);
});

module.exports = {
    // Other webpack configurations...
    resolve: {
      fallback: {
        "path": require.resolve("path-browserify")
      }
    }
  };
  

  
