const express = require("express");
// import express from "express";
const path = require("path");
const app = express();
const ghpages = require("gh-pages");
const port = 3000;

app.use(express.static(`${__dirname}/`));
ghpages.publish("/", error => {
  console.error(error);
});

app.listen(port, () =>
  console.log(`Express server is running on port : ${port}`)
);
