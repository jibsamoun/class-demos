import express from 'express';
import pluralize from 'pluralize';
import {promises as fs} from 'fs';
import fetch from 'node-fetch';
import parser from 'node-html-parser'
//const express = require('express')
const app = express()

const url = "http://ischool.uw.edu/";
const response = await fetch(url);
const pageText = await response.text()

console.log(pageText);

const htmlPage = parser.parse(pageText);
const imgTags = htmlPage.querySelectorAll("img");

for (let i=0; i<imgTags.length; i++){
    const imgTag = imgTags[i];

    console.log("Image " + i + " info:");
    console.log("alt text: " + imgTag.attributes.alt);
    console.log("img src: " + imgTag.attributes.src);
    console.log("\n\n");
}

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

app.get('/favicon.ico', async (req, res) => {
    res.type("png")
    let fileContents = await fs.readFile("favicon.ico")
    res.send(fileContents);
})

app.listen(3000, () => {
    console.log("Example app listening at http://localhost:3000")
})
