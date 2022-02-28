const express = require("express");
const {check, validationResult} = require('express-validator')
const router = express.Router();
const Movie = require('../../models/Movie')

//@route        GET api/movies
//@description  Obtiene todas las peliculas presentes en la db
router.get('/',async (req,res)=> {
   try{
      let movies = await Movie.find({},{__v: 0});
      return res.json(movies);
   }catch (e) {
       console.error(e)
       return res.status(500).send('Error en el servidor')
   }
})


//@route        POST api/movies
//@description  Ingresa una película con los atributos Nombre, Fecha de estreno, Género.
router.post('/', [
    check('name','El nombre de la pelicula es requerido').not().isEmpty(),
    check('releaseDate','La fecha de salida es requerida').not().isEmpty(),
    check('genre','El genero de la pelicula es requerido').not().isEmpty(),
    check('director','El director de la pelicula es requerido').not().isEmpty(),
    check('director','El tipo de dato es erroneo').isString(),
    check('name','El tipo de dato es erroneo').isString(),
    check('genre','El tipo de dato es erroneo').isString()
    ],
    async (req,res)=> {
    const error = validationResult(req);
    if(!error.isEmpty()){
        return res.status(400).json({errors:error.array()});
    }
    const {name,genre,director,summary} = req.body;
    let {releaseDate} = req.body;
    releaseDate = new Date(releaseDate);
    if(isNaN(releaseDate.getHours())){
        return res.status(400).json({errors: [{msg:'La fecha no es valida, el formato es yyyy-mm-dd'}]})
    }
    try{
        if(await Movie.findOne({name,releaseDate,director})){
            return res.status(400).json({errors: [{msg:'La pelicula ya existe'}]})
        }
        let movie = new Movie({
            name,
            releaseDate,
            genre,
            summary,
            director
        })
        await movie.save();
        return res.send('Pelicula registrada exitosamente')
    }catch (e){
        console.error(e)
        return res.status(500).send('Error en el servidor')
    }
});

//@route        PUT api/movies
//@description  Edita una pelicula ya existente
router.put('/:id',[
    check('director','El tipo de dato es erroneo').isString(),
    check('name','El tipo de dato es erroneo').isString(),
    check('genre','El tipo de dato es erroneo').isString()
    ],async (req,res)=> {
    const {name,genre,summary,director} = req.body
    let {releaseDate} = req.body;
    if(releaseDate){
        releaseDate = new Date(releaseDate);
        if(isNaN(releaseDate.getHours())){
            return res.status(400).json({errors: [{msg:'La fecha no es valida, el formato es yyyy-mm-dd'}]})
        }
    }
    try{
        if(!(await Movie.findOne({_id:req.params.id}))){
            return res.status(400).json({errors: [{msg:'No existe la pelicula'}]})
        }
        await Movie.updateOne({_id:req.params.id},{name,releaseDate,genre,summary,director})
        return res.send('Actualizado correctamente')
    }catch (e) {
        console.error(e)
        return res.status(500).send('Error en el servidor')
    }
})


//@route        DELETE api/movies
//@description  Borra una pelicula de la base de datos
router.delete('/:id',async (req,res)=> {
    try{
        if(!(await Movie.findOne({_id:req.params.id}))){
            return res.status(400).json({errors: [{msg:'No existe la pelicula'}]})
        }
        await Movie.findByIdAndDelete(req.params.id)
        return res.send("Borrado correctamente")
    }catch (e) {
        console.error(e)
        return res.status(500).send('Error en el servidor')
    }
})


module.exports = router;
