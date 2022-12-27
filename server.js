const http = require('http');

const server = http.createServer((req, res) => {
	res.end('Hello World!');
});

server.listen(3000, '0.0.0.0', () => {
	console.log('Server running at 3000');
});
