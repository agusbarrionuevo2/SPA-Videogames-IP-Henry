const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const videogamesRouter = Router();

videogamesRouter.get('/', async (req, res)=> {
	try {
		
	} catch (error) {
		
	}
})

videogamesRouter.get('/:id', async (req, res)=> {

})

videogamesRouter.post('/', async (req, res) => {

})

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = videogamesRouter;
