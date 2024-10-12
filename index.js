const {program} = require('commander');
const http = require('http');
const fs = require('fs');

program
.requiredOption('-h, --host <address>')
.requiredOption('-p, --port <number>')
.requiredOption('-c, --cache <directory>');

program.parse();
const options = program.opts();

const requestListener = function (req, res)
{
    res.writeHead(200);

    res.end("Hello world!");
}
 
const server = http.createServer(requestListener);

server.listen(options.port, options.host, () => {
    console.log(`http://${options.host}:${options.port}`);
})