const http = require('http');

const server = http.createServer((req, res) => {
	if (req.method === 'POST') {
		let body = '';
		req.on('data', chunk => {
			body += chunk.toString();
		});
		req.on('end', () => {
			const formData = querystring.parse(body);
			res.end(`Your name is ${formData.name}`);
		});
	}
});

server.listen(3000, () => {
	console.log('Server listening on port 3000');
});
