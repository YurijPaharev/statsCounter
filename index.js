const http = require('http');
const responder = require('./lib/responseGenerator');
const staticFile = responder.staticFile('/public/');
const factory = require('./lib/factory');

http.createServer(function(req, res)  {
    let _url;

    req.method = req.method.toUpperCase();
    console.log(req.method + ' ' + req.url);

    if (req.method !== 'GET') {
        res.writeHead(501, {
            'Content-Type': 'text-plain'
        });
        return res.end(req.method + ' is not implemented by this server');
    }

    if (_url = /^\/employees$/i.exec(req.url)) {
        // return a list of employees
        employeeService.getEmployees(function(error, data) {
            if (error) {
                return responder.send_500(error, res);
            } 
            return responder.sendJson(data, res);
        });
    } else if (_url = /^\/employees\/(\d+)$/i.exec(req.url)) {
        // find the employee by the id in the route
        employeeService.getEmployee(_url[1], function(error, data) {
            if (error) {
                return responder.send_500(error, res);
            }  else if (!data) {
                return responder.send_404(res);
            }
            return responder.sendJson(data, res);
        });
    } else {
        // try to send the static file
        res.writeHead(200);
        staticFile('index.html', res);
    }
}).listen(8008);

console.log('Server running at localhost:8008');