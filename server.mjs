// const express = require('express')
import express from "express";
import path from 'path';

console.log("i am a sever machice or software");
const app = express()
const port = process.env.PORT || 3000

app.get('/abc', (req, res) => {

  console.log("request ip",req.ip);
  res.send('Hello World! saif is here'+ new Date().toString());

})

const __dirname =path.resolve();
app.use('/', express.static(path.join(__dirname, './web/build')))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})