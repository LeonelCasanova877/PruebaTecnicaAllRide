const express = require('express');

const app = express();

const PORT = 8080;

app.listen(PORT,()=>console.log(`Server iniciado en el puerto ${PORT}`));

app.get('/',(req,res) => res.send('API CORRIENDO'));
