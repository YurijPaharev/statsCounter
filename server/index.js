const fs = require('fs');
// const http = require('http');
// const gasAir = require('./gas');
// const rec = require('./rec').recAll;
// const crudeWater = require('./crudeWater').crudeAll;
// const chemicalCleaner = require('./chemicalCleaner');
// const fuelingPump = require('./fuelingPump');
// const netPump = require('./netPump');

// const factorySum = [gasAir, rec, crudeWater, chemicalCleaner, fuelingPump, netPump].reduce((a, b) => a + b ) + '';

// http.createServer(function(request, response)  {
//     response.writeHead(200, {'Content-Type': 'text/html'});
//     response.write(`<h1>${factorySum}</h1>`);
//     response.end();
// }).listen(8008);

// console.log('This stuff works ' + __dirname + '. File name is ' + __filename);
fs.readFile(__dirname + '/index.html', 'UTF-8', function (error, data) {
    if (error) {
        return console.error(error.message);
    }
    console.log(data);
});