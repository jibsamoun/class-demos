import * as cheerio from 'cheerio';
import express from 'express';
const app = express();


const escapeHTML = str => String(str).replace(/[&<>'"]/g, 
    tag => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#39;',
        '"': '&quot;'
      }[tag]));

const userInputWithHTML = "Don't allow <em>tags</em> to be <strong>rendered</strong>"

// This function mocks what a user might *try* to input on the client side of your site... 
// you should not allow this/clean it up
function vulnerableAddUserInput(){
  return `
  <p>
  <strong>Here is the user input:</strong> ${userInputWithHTML}
  </p>
  `
}

// Below are the sections we'll be working though to learn how to avoid XSS
app.get('/', (req, res) => {
  res.send(`
  <html><body>
  <h1> demo for xss escaping</h1>

  <h2> vulnerable user input </h2>
  ${vulnerableAddUserInput()}
  
  <h2> fix with a function </h2>

  <h2> fix with a innerhtml </h2>
  
  </body>
  </html>
  `)
})

app.listen(3000, ()=>{
  console.log('Example app listening at http://localhost:3000')
})

