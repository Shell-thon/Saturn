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
