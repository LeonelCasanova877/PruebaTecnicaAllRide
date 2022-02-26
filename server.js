const express = require('express');
const connectDataBase = require("./database");
const app = express();

const PORT = 8080;

connectDataBase();
app.use(express.json())
app.use('/api/movies',require('./routes/api/movie'))

app.listen(PORT,()=>console.log(`Server iniciado en el puerto ${PORT}`));

