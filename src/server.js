'use strict';

const { createServer } = require('node:http');

const port = Number(process.env.PORT ?? 3000);

const server = createServer((request, response) => {
  const { pathname } = new URL(request.url || '/', 'http://localhost');

  if (request.method === 'GET' && pathname === '/health') {
    response.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
    response.end('{"status":"ok"}');
    return;
  }

  response.writeHead(404, { 'Content-Type': 'application/json; charset=utf-8' });
  response.end(JSON.stringify({ error: 'Not Found' }));
});

server.listen(port, () => {
  console.log(`repo-service listening on port ${port}`);
});