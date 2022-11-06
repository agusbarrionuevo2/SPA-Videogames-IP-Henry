const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const videogamesRouter = Router();
const { getVideogames } = require('./Controllers/Controllers')

videogamesRouter.get('/', async (req, res)=> {
	const { name } = req.query
	try {
		if(name) {
			let searchByName = await getVideogames(name)
			if(searchByName.count === 0)return res.status(404).send('No existe ningun juego con ese nombre')
			return res.status(200).send(searchByName)
		}
		let videogames = await getVideogames()
		return res.status(200).send(videogames)
	} catch (error) {
		return res.status(404).send(error.message)
	}
})

videogamesRouter.get('/:id', async (req, res)=> {

})

videogamesRouter.post('/', async (req, res) => {

})

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = videogamesRouter;
