const express = require("express");
const app = express();

const hostname = "127.0.0.1";
const port = 3001;
const sqlite3 = require("sqlite3").verbose();
const DBPATH = "curriculo (2).db";

const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(express.static("public"));

app.use(express.json());

/* Definição dos endpoints */

/** CRUD **********************/

// Retorna todos registros (é o R do CRUD - Read)
app.get("/informacao", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Access-Control-Allow-Origin", "*"); // Isso é importante para evitar o erro de CORS

  var db = new sqlite3.Database(DBPATH); // Abre o banco
  var sql = "SELECT * FROM Informacoes_Pessoais";
  db.all(sql, [], (err, rows) => {
    if (err) {
      throw err;
    }
    res.json(rows);
  });
  db.close(); // Fecha o banco
});

// Insere um registro (é o C do CRUD - Create)
app.post("/criar", urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader("Access-Control-Allow-Origin", "*"); // Isso é importante para evitar o erro de CORS

  sql =
    "INSERT INTO tbData (title, id, completed) VALUES ('" +
    req.body.title +
    "', 33, false)";
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  db.run(sql, [], (err) => {
    if (err) {
      throw err;
    }
  });
  db.close(); // Fecha o banco
  res.end();
});

// Atualiza um registro (é o U do CRUD - Update)
app.post("/atualizar", urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader("Access-Control-Allow-Origin", "*"); // Isso é importante para evitar o erro de CORS

  sql =
    "UPDATE tbData SET title = '" +
    req.body.title +
    "' WHERE userId = " +
    req.body.userId;
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  db.run(sql, [], (err) => {
    if (err) {
      throw err;
    }
    res.end();
  });
  db.close(); // Fecha o banco
});

//AEEEEEEEEE CONSEGUIII FLAVIOOOOO,ME MATEI PARA ;)

// Exclui um registro (é o D do CRUD - Delete)
app.post("/deletar", urlencodedParser, (req, res) => {
  res.statusCode = 200;
  res.setHeader("Access-Control-Allow-Origin", "*"); // Isso é importante para evitar o erro de CORS

  sql = "DELETE FROM tbData WHERE userId = " + req.body.userId;
  var db = new sqlite3.Database(DBPATH); // Abre o banco
  db.run(sql, [], (err) => {
    if (err) {
      throw err;
    }
    res.end();
  });
  db.close(); // Fecha o banco
});

/* Inicia o servidor */
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});