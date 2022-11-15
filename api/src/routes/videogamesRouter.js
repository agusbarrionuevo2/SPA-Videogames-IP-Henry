const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const videogamesRouter = Router();
const {getVideogameDetail, getAllVideogames} = require('./Controllers/Controllers')
const {Genre, Videogame, Op} = require('../db')

videogamesRouter.get('/', async (req, res)=> {
	const { name } = req.query
	try {
		const videogames = await getAllVideogames(name)
		return res.status(200).send(videogames)
	} catch (error) {
		return res.status(404).send(error.message)
	}
})

videogamesRouter.get('/:id', async (req, res) => {
	const { id } = req.params
	try {
		const videogameDetail = await getVideogameDetail(id)
		return res.status(200).send(videogameDetail)
	} catch (error) {
		return res.status(404).send(`No existe un videojuego con el id: ${id}`)
	}
})

videogamesRouter.post('/', async (req, res) => {
	const {name, description, release_date, rating, platforms, genre} = req.body
	try {
		if(!name || !description || !platforms) throw new Error('Not enough information')
		const newVideogame = await Videogame.create(req.body)
		const genreDb = await Genre.findAll({
			where: { name: genre },
		});
		newVideogame.addGenre(genreDb)
		return res.status(200).send(newVideogame)
	} catch (error) {
		return res.status(404).send(error.message)
	}
})

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = videogamesRouter;
