//var finalhandler = require('finalhandler')
var http = require('http')
var serveStatic = require('serve-static')

// Serve up public/ftp folder
var serve = serveStatic('public', {'index': ['index.html', 'index.htm']})

// Create server
var server = http.createServer(function(req, res){
  //var done = finalhandler(req, res)
  serve(req, res, null)
})

// Listen
server.listen(3000)