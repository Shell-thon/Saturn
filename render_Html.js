const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  fs.readFile('index.html', (err, data) => {
    if (err) throw err;
    res.write(data);
    res.end();
  });
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
