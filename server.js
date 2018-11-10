const express = require("express");
// import express from "express";
const path = require("path");
const app = express();
const port = 3000;

app.use(express.static(`${__dirname}/`));

app.listen(port, () =>
  console.log(`Express server is running on port : ${port}`)
);
