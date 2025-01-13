import express from 'express';
import pluralize from 'pluralize';
import {promises as fs} from 'fs';
import fetch from 'node-fetch';
import parser from 'node-html-parser'
//const express = require('express')
const app = express()



app.get('/', async (req, res) => {
    console.log("request to '/', sending back html")
    res.type("html")
    const fileContents = await fs.readFile("index.html")
    res.send(fileContents)
})

app.get('/style.css', async (req, res) => {
    console.log("request to '/style.css', sending back css content")
    res.type("css")
    const fileContents = await fs.readFile("style.css");
    res.send(fileContents);
})

app.get('/index.js', async (req, res) => {
    console.log("js is aliiiiive");
    res.type("js");
    let fileContents = await fs.readFile("index.js");
    res.send(fileContents);
})

app.get('/api/pluralize', async (req, res) => {
    let inputWord = req.query.word;
    const pluralWord = pluralize(inputWord);
    res.type("txt")
    res.send(pluralWord);
})

app.get('/api/auditurl', async (req, res) => {
    let url = req.query.url;
  //  const pluralWord = pluralize(inputWord);
   // const url = "http://ischool.uw.edu/";
    const response = await fetch(url);
    const pageText = await response.text()
    
  //  console.log(pageText);
    
    const htmlPage = parser.parse(pageText);
    const imgTags = htmlPage.querySelectorAll("img");
    
    let htmlReturn = "";

    for (let i=0; i<imgTags.length; i++){
        const imgTag = imgTags[i];
        htmlReturn += "<h3>Image " + i + " info:</h3>";
        htmlReturn += "alt text: " + imgTag.attributes.alt;
        htmlReturn += "img src: " + imgTag.attributes.src;
        htmlReturn += "<img src='" + url + imgTag.attributes.src + "' />";
    }


    res.type("html")
    res.send(htmlReturn);
})

app.get('/favicon.ico', async (req, res) => {
    res.type("png")
    let fileContents = await fs.readFile("favicon.ico")
    res.send(fileContents);
})

app.listen(3000, () => {
    console.log("Example app listening at http://localhost:3000")
})
