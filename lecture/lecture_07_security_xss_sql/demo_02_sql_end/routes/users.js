import express from 'express';
import sqlite3 from 'sqlite3';

var router = express.Router();

// db
let db = new sqlite3.Database(':memory:', (err) => {
  if (err) {
    return console.error(err.message);
  }
  console.log('connected')
})

db.serialize(() => {
  db
  .run('CREATE TABLE people(first_name text, last_name text)')
  .run(`INSERT INTO people(first_name, last_name)
    VALUES  ("Kristen", "Thayer"),
            ("Steven", "Universe"),
            ("Greg", "Universe"),
            ("Lisa", "Simpson"),
            ("Agatha", "Harkness")
  `)
  .run('CREATE TABLE secret_table(message text)')
  .run(`INSERT INTO secret_table (message)
    VALUES  ('The password for Kristen is: pa55w0rd'),
            ('The treasure is hidden on the 5th floor')
  `)

})

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

export default router;
