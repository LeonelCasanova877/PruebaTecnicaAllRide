# PruebaTecnicaAllRide
Prueba Técnica Backend Developer Jr. AllRide.


Para empezar el sistema, correr.

- npm start


El sistema puede: 
- *Ingresar* peliculas con los atributos **nombre**, **fecha de estreno**, **genero**, **director** y **resumen**, de los cuales **resumen** es opcional.
- *Editar* un atributo de una pelicula con su id.
- *Eliminar* una película con su id.
- *Listar* todas las películas ingresadas

Ingresar película:
- POST /api/movies \
Input body:  \
{ \
name: String, \
releaseDate: Date, \
genre: String \
summary: String \
director: String \
} \
Returns: \
{}

Editar película:
- PUT /api/movies/**:id** \
  Input body:  \
  { \
  name: String, \
  releaseDate: Date, \
  genre: String \
  summary: String \
  director: String \
  } \
  Returns: \
  {}

Eliminar película:
- DELETE /api/movies/**:id** \
  Returns: 
  {}

Listar películas:
- GET /api/movies \
  Returns: \
[\
   { \
_id: ObjectId\
  name: String,\
  releaseDate: Date,\
  genre: String,\
  director: String,\
  summary: String,\
  createdAt: Date\
  },\
    . \
.\
.\
]




