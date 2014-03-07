var express = require('express')
  , app = module.exports = express()

app.get('/compA', function(req, res){
  res.send('hello from compA')
})
