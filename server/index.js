const http = require('http');
const gasAir = require('./gas');
const rec = require('./rec').recAll;
const crudeWater = require('./crudeWater').crudeAll;
const chemicalCleaner = require('./chemicalCleaner');
const fuelingPump = require('./fuelingPump');
const netPump = require('./netPump');

const factorySum = [gasAir, rec, crudeWater, chemicalCleaner, fuelingPump, netPump].reduce((a, b) => a + b ) + '';

http.createServer(function(request, response)  {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write(`<h1>${factorySum}</h1>`);
    response.end();
}).listen(8008);