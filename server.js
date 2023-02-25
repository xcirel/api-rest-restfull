const express = require('express');
const app = express();

// Verbos HTTP
// GET: Receber dados de um Resource.
// POST: Enviar dados ou informações para serem processados por um Resource.
// PUT: Atualizar os dados de um Resource.
// DELETE: Deletar um Resource.



app.listen(3000, function() {
  console.log("Server is runing");
})