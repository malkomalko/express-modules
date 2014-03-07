var express = require('express')
  , app = module.exports = express()

var _ = require('lodash')

app.get('/compB', function(req, res){
  res.send(_.range(10))
})
