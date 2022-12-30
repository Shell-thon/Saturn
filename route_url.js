const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
	const parsedUrl = url.parse(req.url, true);
	const path = parsedUrl.pathname;
	const query = parsedUrl.query;

	if (path === '/') {
		res.end('Home page');
	}	else if (path === './font_page/about') {
		res.end('About page');
	}	else {
		res.end('404 Page Not Found');
	}
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
