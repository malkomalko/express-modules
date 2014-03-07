module.paths.push(require('path').join(__dirname, 'components'))

var express = require('express')
  , http = require('http')
  , app = express()

require('fs').readdirSync('./components').forEach(function(component){
  app.use(require(component))
})

http.createServer(app).listen(3000, function(){
  console.log('Server listening on port 3000')
})
