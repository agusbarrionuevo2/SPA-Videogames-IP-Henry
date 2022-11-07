const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const videogamesRouter = Router();
const { getVideogames, getVideogameDetail, createVideogame } = require('./Controllers/Controllers')

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
	const {name, description, release_date, rating, platforms} = req.body
	try {
		const newVideogame = await createVideogame({name, description, release_date, rating, platforms})
		return res.status(200).send(newVideogame)
	} catch (error) {
		return res.status(404).send(error.message)
	}
})

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = videogamesRouter;
