const http = require('http');

const server = http.createServer((req, res) => {
  // Handle requests here
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

// Unexpected error handling
// This code does not handle errors that may occur during the request/response cycle, such as network issues or errors in the request handler.  These could crash the server silently.
