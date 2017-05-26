var fs = require('fs');

module.exports.send_404 = function (response) {
    console.error('Response not found');

    response.writeHead(404, {
        'Content-Type': 'text/plain'
    });
    response.end('Not found');
};

module.exports.send_500 = function (data, response) {
    console.error(data);

    response.writeHead(500, {
        'Content-Type': 'text/plain'
    });
    response.end(data);
};

module.exports.sendJson = function (data, response) {
    response.writeHead(200, {
        'Content-Type': 'application/json'
    });

    response.end(JSON.stringify(data));
}

module.exports.staticFile = function (staticPath) {
    return function (data, response) {
        let readStream;

        // Fix so routes to /index and /index.html both work.
        data = data.replace(/^(\/index)(.html)?$/i,'$1.html');
        data = '.' + staticPath + data;

        fs.stat(data, function (error, stats) {
            if (error || stats.isDirectory()) {
                return module.exports.send_404(response);
            }
            console.log(data)
            readStream = fs.createReadStream(data);
            return readStream.pipe(response);
        });
    }
}