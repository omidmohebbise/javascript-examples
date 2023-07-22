const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  // Determine the requested file path
  let filePath;
  if (req.url === '/') {
    // Serve the index.html file by default for the root URL
    filePath = path.join('public', 'index.html');
  } else {
    filePath = path.join(__dirname, '../public', req.url);
  }

  // Determine the file extension
  const extname = path.extname(filePath);

  // Set the content type based on the file extension
  let contentType = 'text/plain';
  if (extname === '.html') {
    contentType = 'text/html';
  } else if (extname === '.js') {
    contentType = 'text/javascript';
  }

  // Read the file and send the response
  fs.readFile(filePath, (error, content) => {
    if (error) {
      if (error.code === 'ENOENT') {
        // File not found
        res.writeHead(404);
        res.end('404 Not Found');
      } else {
        // Other error
        res.writeHead(500);
        res.end('500 Internal Server Error');
      }
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
