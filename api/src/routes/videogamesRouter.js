const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const videogamesRouter = Router();
const { getVideogames, getVideogameDetail } = require('./Controllers/Controllers')

videogamesRouter.get('/', async (req, res)=> {
	const { name } = req.query
	try {
		let videogames = await getVideogames(name)
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
	const {} = req.body
})

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = videogamesRouter;
