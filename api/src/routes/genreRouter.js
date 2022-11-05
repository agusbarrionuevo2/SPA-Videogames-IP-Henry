const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const genreRouter = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
genreRouter.get('/', async(req, res)=> {
	
})

module.exports = genreRouter;
