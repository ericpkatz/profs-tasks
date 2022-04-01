const app = require('express').Router();
const { Task } = require('../db');

app.get('/', async(req, res, next)=> {
  try {
    res.send(await Task.findAll());
  }
  catch(ex){
    next(ex);
  }
});

module.exports = app;
