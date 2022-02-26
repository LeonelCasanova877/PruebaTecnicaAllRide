const express = require('express');
const connectDataBase = require("./database");
const app = express();

const PORT = 8080;

connectDataBase();

app.listen(PORT,()=>console.log(`Server iniciado en el puerto ${PORT}`));

app.get('/',(req,res) => res.send('API CORRIENDO'));
