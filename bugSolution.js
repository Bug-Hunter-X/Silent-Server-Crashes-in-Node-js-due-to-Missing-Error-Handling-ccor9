const http = require('http');

const server = http.createServer((req, res) => {
  try {
    // Handle requests here
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
  } catch (err) {
    console.error('Request processing error:', err);
    res.writeHead(500, {'Content-Type': 'text/plain'});
    res.end('Internal Server Error\n');
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
}).on('error', err => {
  console.error('Server error:', err);
});
